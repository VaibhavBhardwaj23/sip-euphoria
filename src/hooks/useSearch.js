import { useEffect, useState } from "react";

export const useSearch = (slug) => {
  console.log(slug);
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [method, setMethod] = useState([]);
  const url = `https://the-cocktail-db3.p.rapidapi.com/${slug}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "94d16b6350msh1e6cf70124d4552p13aa5ajsn7d7d07d8f7f9",
      "X-RapidAPI-Host": "the-cocktail-db3.p.rapidapi.com",
    },
  };

  useEffect(function () {
    async function getRecipe() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setRecipe(result);
        setIngredients(result.ingredients);
        setMethod(result.method);
      } catch (error) {
        console.error(error);
      }
    }
    getRecipe();
  }, []);
  return { recipe, ingredients, method };
};
