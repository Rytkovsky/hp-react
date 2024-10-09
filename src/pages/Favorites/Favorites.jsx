import { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { Container } from "../../layouts/Container/Container";
import { Header } from "../../layouts/Header/Header";
import { Main } from "../../layouts/Main/Main";
import { favoritesContext } from "../../providers/FavoritesProvider/FavoritesProvider";
import s from "./Favorites.module.scss";

export const Favorites = () => {
  const { favorites } = useContext(favoritesContext);

  return (
    <>
      <Header />
      <Main>
        <section className={s.cards}>
          <Container>
            <div className={s.cards__wrapper}>
              {favorites.map((el) => (
                <Card key={el.id} el={el} img={el.image} />
              ))}
            </div>
          </Container>
        </section>
      </Main>
    </>
  );
};
