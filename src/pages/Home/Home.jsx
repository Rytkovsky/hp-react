import { Link } from "react-router-dom";
import { Container } from "../../layouts/Container/Container";
import { Header } from "../../layouts/Header/Header";
import { Main } from "../../layouts/Main/Main";
import { RoutingBtn } from "../../Ui/RoutingBtn/RoutingBtn";
import { Card } from "../../components/Card/Card";
import redHeartImg from "../../assets/imgs/red-heart.svg";
import s from "./Home.module.scss";

export const Home = ({ findCards, findCharacterHouse, filteredDataCards }) => {
  return (
    <>
      <Header findCards={findCards} findCharacterHouse={findCharacterHouse} />
      <Main>
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
                />
              ))}
            </div>
          </Container>
        </section>
      </Main>
    </>
  );
};
