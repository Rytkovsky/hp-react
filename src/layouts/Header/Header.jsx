import { Link } from "react-router-dom";
import { Favorites } from "../../pages/Favorites/Favorites";
import { Input } from "../../Ui/Input/Input";
import { RoutingBtn } from "../../Ui/RoutingBtn/RoutingBtn";
import { Select } from "../../Ui/Select/Select";
import { Container } from "../Container/Container";

import s from "./Header.module.scss";

export const Header = ({ findCards, findCharacterHouse, favorites }) => {
  return (
    <>
      {favorites === "favorites" ? (
        <header className={s.header}>
          <Container>
            <Link to="/">
              <RoutingBtn back={true}>← Back To All</RoutingBtn>
            </Link>
            <h2 className={s.header__title}>Liked ones</h2>
            <p className={s.header__text}>
              Your favorite characters from the Harry Potter universe.
            </p>
          </Container>
        </header>
      ) : (
        <header className={s.header}>
          <Container>
            <h1 className={s.header__title}>Harry Potter</h1>
            <p className={s.header__text}>
              View all characters from the Harry Potter universe
            </p>
            <form className={s.header__form} action="#">
              <Input findCards={findCards}></Input>
              <Select findCharacterHouse={findCharacterHouse}></Select>
            </form>
          </Container>
        </header>
      )}
    </>
  );
};
