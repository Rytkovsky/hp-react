import { Header } from "../../layouts/Header/Header";
import { Main } from "../../layouts/Main/Main";
import s from "./Home.module.scss";

export const Home = ({
  findCards,
  findCharacterHouse,
  filteredDataCards,
  addToFavorites,
  deleteFavorite,
  favoriteCheck,
  delete1,
}) => {
  return (
    <>
      <Header findCards={findCards} findCharacterHouse={findCharacterHouse} />
      <Main
        filteredDataCards={filteredDataCards}
        addToFavorites={addToFavorites}
        deleteFavorite={deleteFavorite}
        favoriteCheck={favoriteCheck}
        delete1={delete1}
      />
    </>
  );
};
