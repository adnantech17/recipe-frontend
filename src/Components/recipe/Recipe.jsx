import "./recipe.css";
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <img
        src="https://media.istockphoto.com/vectors/recipe-card-vector-id618446308"
        className="recipeImg"
      />
      <div className="recipeInfo">
        <div className="recipeTitle">
          <Link to={"/recipe/" + recipe.id}>{recipe.title}</Link>
        </div>
        <hr />
      </div>
      <h3 className="recipeDesc">Price: {recipe.price}$</h3>
      <h3 className="recipeDesc">Time: {recipe.time_minutes} Minutes</h3>
    </div>
  );
};

export default Recipe;
