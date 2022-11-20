import React from "react";
import RecipeCard from "../recipeCard/RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((el) => (
        <RecipeCard key={el.recipe.uri.slice(51)} el={el.recipe} />
      ))}
    </div>
  );
};

export default RecipeList;