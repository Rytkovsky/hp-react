import { useEffect, useState } from "react";
import "./App.css";
import { Main } from "./layouts/Main/Main";
import { Header } from "./layouts/header/header";

function App() {
  const [dataCards, setDataCards] = useState([]); // Это Hook - useState - dataCards- массив по которому работаем, setDataCards - действия которые делаем с массивом.  По умолчанию выставляем ему значением - пустой массив
  const [filteredDataCards, setFilteredDataCards] = useState([]); // массив для фильтрации. Фильтруем по первому массиву
  const [selectedDataCards, setSelectedDataCards] = useState([]); // делаем новый массив для поиска по селекту (чтобы при селекте инпут не перебивал селект)

  async function apiCards() {
    try {
      const dataApi = await fetch(
        "https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters"
      );
      const dataApiResult = await dataApi.json();
      setDataCards(dataApiResult); // записываем в первый массив результаты нашей ассинхронной функции
      setFilteredDataCards(dataApiResult); // записываем во второй массив результаты ассинхронной функции
      setSelectedDataCards(dataApiResult); // записываем в третий массив результаты ассинхронной функции
    } catch (err) {
      console.log(err);
    }
  }
  // второй хук . Функция призыва АПИ вызывается в нём
  useEffect(() => {
    // отслеживает жизненный цикл компонента. зарождение обновление удаление
    apiCards();
  }, []); // второй параметр - массив зависимостей

  //функция по поиску по имени (по инпуту). Фильтруем второй массив по первому - пропсами передаем уже фильтрованный массив в Main
  function findCards(evt) {
    const findValue = evt.target.value.toLowerCase().trim();

    setFilteredDataCards(
      selectedDataCards.filter((el) =>
        el.name.toLowerCase().includes(findValue)
      )
    );
  }

  //функция по поиску по селекту
  function findCharacterHouse(evt) {
    const findSelectValue = evt.target.value;
    if (findSelectValue == "all") {
      apiCards();
      setSelectedDataCards(dataCards);
    } else {
      const dataFilter = dataCards.filter((el) => el.house == findSelectValue);
      setSelectedDataCards(dataFilter);
      setFilteredDataCards(dataFilter);
    }
  }

  console.log(dataCards);
  console.log(filteredDataCards);
  console.log(selectedDataCards);

  return (
    <>
      <Header findCards={findCards} findHouseCards={findCharacterHouse} />
      <Main data={filteredDataCards} />
    </>
  );
}

export default App;
