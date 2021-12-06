import React, { useEffect, useState } from "react";
import "./newrecipe.scss";

import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.
import { useHistory } from "react-router-dom";

const NewRecipe = () => {
  const history = useHistory();
  const [tags, setTags] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(null);
  const [price, setPrice] = useState(null);
  const [ingsArray, setIngsArray] = useState([]);
  const [tagArray, setTagArray] = useState([]);

  const handleChange = async (newTags) => {
    setTags(newTags);
    await fetchTags(newTags);
  };

  const handleIngChange = async (ings) => {
    setIngredients(ings);
    await fetchIngs(ings);
  };

  const fetchTags = async (tags) => {
    var tagArray = [];
    await fetch("/recipe/tags/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        tags.forEach(async (tag) => {
          var contains = false;
          var id = -1;
          for (var i = 0; i < data.length; i++) {
            if (tag === data[i].name) {
              contains = true;
              id = data[i].id;
              break;
            }
          }
          if (contains) tagArray.push(id);
          else {
            await fetch("/recipe/tags/", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Token " + localStorage.getItem("token"),
              },
              body: JSON.stringify({
                name: tag,
              }),
            })
              .then((res) => res.json())
              .then((data) => tagArray.push(data.id));
          }
        });
      });
    setTagArray(tagArray);
  };

  const fetchIngs = async (ings) => {
    var ingsArray = [];
    await fetch("/recipe/ingredients/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        ings.forEach(async (ing) => {
          var contains = false;
          var id = -1;
          for (var i = 0; i < data.length; i++) {
            if (ing === data[i].name) {
              contains = true;
              id = data[i].id;
              break;
            }
          }
          if (contains) ingsArray.push(id);
          else {
            await fetch("/recipe/ingredients/", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Token " + localStorage.getItem("token"),
              },
              body: JSON.stringify({
                name: ing,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                ingsArray.push(data.id);
              });
          }
        });
      });

    setIngsArray(ingsArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(ingsArray);
    fetch("/recipe/recipes/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: title,
        ingredients: ingsArray,
        tags: tagArray,
        time_minutes: time,
        price: price,
        link: "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container all-container">
      <h1>Create a New Recipe</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group new-post-title">
          <input
            type="text"
            className="form-control"
            required=""
            placeholder="Title*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="btn btn-sm btn-primary form-group">
            Publish
          </button>
        </div>

        <div className="tag-cat d-flex align-items-center">
          <div className="col-md-12 col-sm-12 ">
            <TagsInput value={tags} onChange={handleChange} />
          </div>
        </div>
        <div className="tag-cat d-flex align-items-center">
          <div className="col-md-12 col-sm-12 ">
            <TagsInput
              value={ingredients}
              onChange={handleIngChange}
              inputProps={{
                className: "react-tagsinput-input",
                placeholder: "Add a ingredient",
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            required=""
            placeholder="Time (Minutes)*"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            required=""
            placeholder="Price (Minutes)*"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default NewRecipe;
