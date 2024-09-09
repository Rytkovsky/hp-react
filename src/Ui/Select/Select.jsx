import s from "./Select.module.scss";

export const Select = ({findHouseCards}) => {
  return (
    <>
      <div>
        <p className={s.select__text}>House</p>
        <select
          onChange={findHouseCards}
          className={s.select__select}
          name="school"
          id="house-select"
        >
          <option value="all">All</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="">None</option>
        </select>
      </div>
    </>
  );
};
