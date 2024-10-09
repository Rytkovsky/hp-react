import { useEffect, useState } from "react";
import { Home } from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Favorites } from "./pages/Favorites/Favorites";

function App() {
  //ПЕРВИЧНЫЙ ГЛАВНЫЙ МАССИВ
  const [dataCards, setDataCards] = useState([]);
  //МАССИВ С ФИЛЬТРАЦИЕЙ ПО ИНПУТУ
  const [filteredDataCards, setFilteredDataCards] = useState([]);
  // МАССИВ С ФИЛЬТРАЦИЕЙ ПО СЕЛЕКТУ
  const [selectedDataCards, setSelectedDataCards] = useState([]);
  //ПОЛУЧАЕМ ДАННЫЕ С АПИ
  useEffect(() => {
    async function apiCards() {
      try {
        const dataApi = await fetch(
          "https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters"
        );
        const dataApiResult = await dataApi.json();
        setDataCards(dataApiResult);
        setFilteredDataCards(dataApiResult);
      } catch (err) {
        console.log(err);
      }
    }
    apiCards();
  }, []);

  //ПОИСК ПО ИНПУТУ
  function findCards(evt) {
    const findValue = evt.target.value.toLowerCase().trim();
    setFilteredDataCards(
      selectedDataCards.filter((el) =>
        el.name.toLowerCase().includes(findValue)
      )
    );
  }
  //ПОИСК ПО СЕЛЕКТУ
  function findCharacterHouse(evt) {
    const findSelectValue = evt.target.value;
    if (findSelectValue == "all") {
      setFilteredDataCards(dataCards);
    } else {
      const dataFilter = dataCards.filter((el) => el.house == findSelectValue);
      setSelectedDataCards(dataFilter);
      setFilteredDataCards(dataFilter);
    }
  }
  //РОУТЕР ДЛЯ ПЕРЕХОДА ПО СТРАНИЦАМ
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          filteredDataCards={filteredDataCards}
          findCards={findCards}
          findCharacterHouse={findCharacterHouse}
        />
      ),
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "*",
      element: "Error",
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
