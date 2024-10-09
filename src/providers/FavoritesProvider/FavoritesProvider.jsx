import { createContext, useEffect, useState } from "react";

export const favoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  //КЛЮЧ ДЛЯ LOCALSTORAGE
  const FAVORITE = "favorite-characters";
  //БЕРЕМ ДАННЫЕ ДЛЯ МАССИВА ЛИБО ИЗ LS ЛИБО ПУСТОЙ МАССИВ 
  const getDataFromLocalStorage =
    JSON.parse(localStorage.getItem(FAVORITE)) ?? [];

  //ИЗБРАННОЕ
  const [favorites, setFavorites] = useState(getDataFromLocalStorage);

  // ДОБАВЛЕНИЕ В LS
  useEffect(() => {
    localStorage.setItem(FAVORITE, JSON.stringify(favorites));
  }, [favorites]);

  // Добавление карты в избранное
  //Если он не найдет такой айдишник в массиве то добавит его
  function addToFavorites(card) {
    if (!favorites.find((el) => el.id === card.id)) {
      setFavorites([...favorites, card]);
    }
  }

  // УДАЛЕНИЕ ИЗ ИЗБРАННОГО
  function deleteFavorite(card) {
    setFavorites(favorites.filter((el) => el.id !== card.id));
  }

  //ПРОВЕРКА НА НАЛИЧИЕ КАРТЫ В ИЗБРАННОМ 
  function favoriteCheck(id) {
    return favorites.find((el) => el.id === id);
  }
  // ОБЪЕКТ С ФУНКЦИЯМИ И МАССИВОМ ДЛЯ ПЕРЕДАЧИ ЧЕРЕЗ USE CONTEXT
  const favoritesData = {
    favorites,
    addToFavorites,
    deleteFavorite,
    favoriteCheck,
  };

  return (
    <>
      <favoritesContext.Provider value={favoritesData}>
        {children}
      </favoritesContext.Provider>
    </>
  );
};
