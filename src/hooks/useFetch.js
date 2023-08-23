import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const url = "https://the-cocktail-db3.p.rapidapi.com/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4404fa7a69mshd238c5848ad2854p1ae416jsn9c5311831c4e",
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
