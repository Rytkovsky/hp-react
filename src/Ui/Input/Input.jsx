import s from "./Input.module.scss";

export const Input = ({ findCards }) => {
  return (
    <>
      <div className={s.input}>
        <p className={s.input__text}>Name</p>
        <input
          onChange={findCards}
          
          className={s.input__input}
          type="text"
          placeholder="Type character name"
        />
      </div>
    </>
  );
};
