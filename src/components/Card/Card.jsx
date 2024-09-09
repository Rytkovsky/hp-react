import s from "./Card.module.scss";
import manImg from "../../assets/imgs//Man.png";
import womanImg from "../../assets/imgs/woman.png";

export const Card = ({ img, name, actor, gender, house, core, alive }) => {
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
        <h2 className={s.card__title}>Name:{name}</h2>
        <p className={s.card__text}>Actor:{actor ? actor : "Unknown"}</p>
        <p className={s.card__text}>Gender:{gender}</p>
        <p className={s.card__text}>House:{house ? house : "None"}</p>
        <p className={s.card__text}>Wand Core:{core ? core : "None"}</p>
        <p className={s.card__text}>alive:{alive ? "yes" : "no"}</p>
      </article>
    </>
  );
};
