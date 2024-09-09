import { Cards } from "../Cards/Cards";
import s from "./Main.module.scss";

export const Main = ({ data }) => {
 

  return (
    <main>
      <Cards
      data = {data}/>
      
    </main>
  );
};
