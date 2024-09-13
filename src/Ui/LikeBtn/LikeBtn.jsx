import s from "./LikeBtn.module.scss";
export const LikeBtn = ({ children, onclick }) => {
  return (
    <>
      <button onClick={onclick} className={s.like}>{children}</button>
    </>
  );
};
