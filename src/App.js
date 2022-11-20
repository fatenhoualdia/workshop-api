import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Filter from "./filter/Filter";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import RecipeList from "./recipeList/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=f5916273&app_key=5414e5c4db39d2938445151db71feb10&cuisineType=Mediterranean`
      );
      console.log("res", res);
      setRecipes(res.data.hits);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter setQuery={setQuery} />
              <RecipeList recipes={recipes} />
            </>
          }
        />
        <Route path="/details/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
