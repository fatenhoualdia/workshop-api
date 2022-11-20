import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [oneRecipe, setOneRecipe] = useState({});
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=f5916273&app_key=5414e5c4db39d2938445151db71feb10`
      );
      console.log("res", res);
      setOneRecipe(res.data.recipe);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {oneRecipe.ingredientLines.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
