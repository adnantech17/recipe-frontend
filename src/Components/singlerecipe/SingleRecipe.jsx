import "./singleRecipe.scss";
import { useHistory, Link } from "react-router-dom";

const SingleRecipe = ({ recipe }) => {
  console.log(recipe);
  const history = useHistory();
  const deletePost = async () => {
    fetch(`/recipe/recipes/${recipe.id}/`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="singleRecipe container">
      <h1 className="singleRecipeTitle">{recipe.title}</h1>
      <div className="singleRecipeDetails">
        <div className="recipeTags">
          <h5>
            Tags:
            {recipe.tags.map((tag) => (
              <span className="recipeCat" key={tag.id}>
                {tag.name}
              </span>
            ))}{" "}
          </h5>
        </div>
        <div className="recipeIngredients">
          <h5>
            Ingreditens:
            {recipe.ingredients.map((ing) => (
              <span className="recipeCat" key={ing.id}>
                {ing.name}
              </span>
            ))}
          </h5>
        </div>
        <h5>Time(Minutes): {recipe.time_minutes}</h5>
        <h5>Price: {recipe.price}</h5>
      </div>
      <div className="edit-delete-button">
        <div>
          <Link
            className="button"
            to="/"
            className="btn btn-danger"
            onClick={() => deletePost()}
          >
            Delete
          </Link>
        </div>
        <div>
          <Link
            to={{
              pathname: "/update-recipe",
              state: {
                tags: recipe.tags,
                ingredients: recipe.ingredients,
                time: recipe.time_minutes,
                price: recipe.price,
                title: recipe.title,
                id: recipe.id,
              },
            }}
            className="btn btn-success"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
