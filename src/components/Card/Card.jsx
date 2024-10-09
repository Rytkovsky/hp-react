import s from "./Card.module.scss";
import manImg from "../../assets/imgs//Man.png";
import womanImg from "../../assets/imgs/woman.png";
import { LikeBtn } from "../../Ui/LikeBtn/LikeBtn";
import whiteHeartImg from "../../assets/imgs/white-heart.svg";
import redHeartImg from "../../assets/imgs/red-heart.svg";
import { favoritesContext } from "../../providers/FavoritesProvider/FavoritesProvider";
import { useContext } from "react";

export const Card = ({ el, img }) => {
  const { addToFavorites, deleteFavorite, favoriteCheck } =
    useContext(favoritesContext);

  const favorite = favoriteCheck(el.id);
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
            img ? img  : el.gender === "male"    ? manImg : el.gender === "female"  ? womanImg  : "Not found"
          }
          alt="wizard"
        />
        <LikeBtn onclick={() => favoriteHandler()}>
          {favorite ? <img src={redHeartImg} /> : <img src={whiteHeartImg} />}
        </LikeBtn>

        <h2 className={s.card__title}>{el.name}</h2>
        <p className={s.card__text}>Actor:{el.actor ? el.actor : "Unknown"}</p>
        <p className={s.card__text}>Gender:{el.gender}</p>
        <p className={s.card__text}>House:{el.house ? el.house : "None"}</p>
        <p className={s.card__text}>
          Wand Core:{el.wand.core ? el.wand.core : "None"}
        </p>
        <p className={s.card__text}>alive:{el.alive ? "yes" : "no"}</p>
      </article>
    </>
  );
};
