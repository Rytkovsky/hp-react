import s from "./Card.module.scss";
import manImg from "../../assets/imgs//Man.png";
import womanImg from "../../assets/imgs/woman.png";
import { LikeBtn } from "../../Ui/LikeBtn/LikeBtn";
import whiteHeartImg from "../../assets/imgs/white-heart.svg";
import redHeartImg from "../../assets/imgs/red-heart.svg";

export const Card = ({
  el,
  id,
  img,
  name,
  actor,
  gender,
  house,
  core,
  alive,
  addToFavorites,
  deleteFavorite,
  filteredDataCards,
  favoriteCheck,
}) => {
  const favorite = favoriteCheck(id);
  console.log(favorite);

  function favoriteHandler() {
    if (favorite) {
      deleteFavorite(el);
    } else {
      addToFavorites(el);
    }
  }

  return (
    <>
      <article className={s.card}>
        <img
          className={s.card__img}
          src={
            img
              ? img
              : gender === "male"
              ? manImg
              : gender === "female"
              ? womanImg
              : "Not found"
          }
          alt="wizard"
        />
        <LikeBtn onclick={() => favoriteHandler()}>
          {favorite ? <img src={redHeartImg} /> : <img src={whiteHeartImg} />}
        </LikeBtn>

        <h2 className={s.card__title}>{name}</h2>
        <p className={s.card__text}>Actor:{actor ? actor : "Unknown"}</p>
        <p className={s.card__text}>Gender:{gender}</p>
        <p className={s.card__text}>House:{house ? house : "None"}</p>
        <p className={s.card__text}>Wand Core:{core ? core : "None"}</p>
        <p className={s.card__text}>alive:{alive ? "yes" : "no"}</p>
      </article>
    </>
  );
};
