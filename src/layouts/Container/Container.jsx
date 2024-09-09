import s from "./Container.module.scss";

export const Container = ({ children }) => {
  // либо {children} с помощью деструктуризации
  return <div className={s.container}>{children}</div>;
};
