import { Header } from "../../layouts/Header/Header";
import { Main } from "../../layouts/Main/Main";
import s from "./Favorites.module.scss";

export const Favorites = ({
  favorites,
  addToFavorites,
  deleteFavorite,
  favoriteCheck,
  delete1
}) => {
  return (
    <>
      <Header favorites="favorites" />
      <Main
        liked="favorites"
        favorites={favorites}
        addToFavorites={addToFavorites}
        deleteFavorite={deleteFavorite}
        favoriteCheck={favoriteCheck}
        delete1={delete1}
      />
    </>
  );
};
