import { Input } from "../../Ui/Input/Input";
import { Select } from "../../Ui/Select/Select";
import { Container } from "../Container/Container";
import s from "./Header.module.scss";

export const Header = ({ findCards, findHouseCards }) => {
  return (
    <header>
      <Container>
        <h1 className={s.header__title}>Harry Potter</h1>
        <p className={s.header__text}>
          View all characters from the Harry Potter universe
        </p>
        <form className={s.header__form} action="#">
          <Input findCards={findCards}></Input>
          <Select findHouseCards={findHouseCards}></Select>
        </form>
      </Container>
    </header>
  );
};
