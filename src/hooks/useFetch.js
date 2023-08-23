import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const url = "https://the-cocktail-db3.p.rapidapi.com/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "94d16b6350msh1e6cf70124d4552p13aa5ajsn7d7d07d8f7f9",
      "X-RapidAPI-Host": "the-cocktail-db3.p.rapidapi.com",
    },
  };

  useEffect(function () {
    async function fetchDrinks() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDrinks();
  }, []);

  return { data };
};

export default useFetch;
