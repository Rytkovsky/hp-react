import { Card } from "../../components/Card/Card";
import { RoutingBtn } from "../../Ui/RoutingBtn/RoutingBtn";
import { Container } from "../Container/Container";
import s from "./Cards.module.scss";
import whiteHeartImg from "../../assets/imgs/white-heart.svg";
import redHeartImg from "../../assets/imgs/red-heart.svg";
import { Link } from "react-router-dom";

export const Cards = ({
  filteredDataCards,
  addToFavorites,
  deleteFavorite,
  favoriteCheck,
  delete1
}) => {
  return (
    <section className={s.cards}>
      <Container>
        <Link to="/favorites">
          <RoutingBtn back={false}>
            <img src={redHeartImg}></img> <span>Show Liked</span>
          </RoutingBtn>
        </Link>

        <div className={s.cards__wrapper}>
          {filteredDataCards.map((el) => (
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
              addToFavorites={ addToFavorites}
              deleteFavorite={ deleteFavorite}
              favoriteCheck={favoriteCheck}
              delete1={delete1}
              filteredDataCards={filteredDataCards}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
