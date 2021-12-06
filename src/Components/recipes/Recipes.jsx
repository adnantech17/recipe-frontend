import "./recipes.css";
import Recipe from "../recipe/Recipe";
import { useEffect, useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [err, setErr] = useState(null);
  useEffect(() => {
    fetch("/recipe/recipes/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        console.log(data);
      })
      .catch((err) => setErr(err));
  }, []);
  return (
    <div className="posts">
      {recipes !== null ? (
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Recipes;
