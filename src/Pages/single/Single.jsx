import "./single.css";
import SingleRecipe from "../../Components/singlerecipe/SingleRecipe";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = (props) => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/recipe/recipes/${id}/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipe(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="single">
      {recipe ? <SingleRecipe recipe={recipe} /> : <h1>Loading</h1>}
    </div>
  );
};

export default Single;
