import { Card } from "../../components/Card/Card";
import { Cards } from "../Cards/Cards";
import { Container } from "../Container/Container";
import s from "./Main.module.scss";

export const Main = ({
  filteredDataCards,
  liked,
  addToFavorites,
  deleteFavorite,
  favoriteCheck,
  favorites,
  delete1,
}) => {
  return (
    <>
      {liked === "favorites" ? (
        <main>
          <section className={s.cards}>
            <Container>
              <div className={s.cards__wrapper}>
                {favorites.map((el) => (
                  <Card
                    key={el.id}
                    el={el}
                    id={el.id}
                    img={el.image}
                    name={el.name}
                    actor={el.actor}
                    gender={el.gender}
                    house={el.house}
                    core={el.wand.core}
                    alive={el.alive}
                    addToFavorites={addToFavorites}
                    deleteFavorite={deleteFavorite}
                    favoriteCheck={favoriteCheck}
                    delete1={delete1}
                  />
                ))}
              </div>
            </Container>
          </section>
        </main>
      ) : (
        <main>
          <Cards
            filteredDataCards={filteredDataCards}
            addToFavorites={addToFavorites}
            deleteFavorite={deleteFavorite}
            favoriteCheck={favoriteCheck}
            delete1={delete1}
          />
        </main>
      )}
    </>
  );
};
