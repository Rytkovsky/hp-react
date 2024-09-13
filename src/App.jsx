import { useEffect, useState } from "react";
import { Home } from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Favorites } from "./pages/Favorites/Favorites";

function App() {
  const [dataCards, setDataCards] = useState([]); // Это Hook - useState - dataCards- массив по которому работаем, setDataCards - действия которые делаем с массивом.  По умолчанию выставляем ему значением - пустой массив
  const [filteredDataCards, setFilteredDataCards] = useState([]); // массив для фильтрации. Фильтруем по первому массиву
  const [selectedDataCards, setSelectedDataCards] = useState([]); // делаем новый массив для поиска по селекту (чтобы при селекте инпут не перебивал селект)

  //ИЗБРАННОЕ
  const [favorites, setFavorites] = useState([]);

  async function apiCards() {
    try {
      const dataApi = await fetch(
        "https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters"
      );
      const dataApiResult = await dataApi.json();
      setDataCards(dataApiResult); // записываем в первый массив результаты нашей ассинхронной функции
      setFilteredDataCards(dataApiResult); // записываем во второй массив результаты ассинхронной функции
      setSelectedDataCards(dataApiResult); // записываем в третий массив результаты ассинхронной функции
    } catch (err) {
      console.log(err);
    }
  }
  // второй хук . Функция призыва АПИ вызывается в нём
  useEffect(() => {
    // отслеживает жизненный цикл компонента. зарождение обновление удаление
    apiCards();
  }, []); // второй параметр - массив зависимостей

  //функция по поиску по имени (по инпуту). Фильтруем второй массив по первому - пропсами передаем уже фильтрованный массив в Main
  function findCards(evt) {
    const findValue = evt.target.value.toLowerCase().trim();

    setFilteredDataCards(
      selectedDataCards.filter((el) =>
        el.name.toLowerCase().includes(findValue)
      )
    );
  }

  //функция по поиску по селекту
  function findCharacterHouse(evt) {
    const findSelectValue = evt.target.value;
    if (findSelectValue == "all") {
      apiCards();
      setSelectedDataCards(dataCards);
    } else {
      const dataFilter = dataCards.filter((el) => el.house == findSelectValue);
      setSelectedDataCards(dataFilter);
      setFilteredDataCards(dataFilter);
    }
  }
  // Добавление карты в избранное
  //Если он не найдет такой айдишник в массиве то добавит его
  function addToFavorites(card) {
    if (!favorites.find((el) => el.id === card.id)) {
      setFavorites([...favorites, card]);
      console.log(card);
    }
  }

  function delete1(id) {
    setFavorites(favorites.filter((el) => el.id !== id));
    console.log("my delete");
  }

  // Удаление карты из избранного
  function deleteFavorite(card) {
    setFavorites(favorites.filter((el) => el.id !== card.id));
    console.log("errr");
  }

  //проверка на наличие карты в избранном
  function favoriteCheck(id) {
    favorites.find((el) => el.id === id);
    console.log(id);
    
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          filteredDataCards={filteredDataCards}
          findCards={findCards}
          findCharacterHouse={findCharacterHouse}
          addToFavorites={addToFavorites}
          deleteFavorite={deleteFavorite}
          favoriteCheck={favoriteCheck}
          delete1={delete1}
        />
      ),
    },
    {
      path: "/favorites",
      element: (
        <Favorites
          favorites={favorites}
          addToFavorites={addToFavorites}
          deleteFavorite={deleteFavorite}
          favoriteCheck={favoriteCheck}
          delete1={delete1}
        />
      ),
    },
    {
      path: "*",
      element: "Error",
    },
  ]);
  console.log(favorites);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
