import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
} from "react-router-dom";

import styles from "./recipes.scss";
import time from "../images/time.svg";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const getData = async () => {
    let response = await fetch("http://localhost:3001/recipes");
    let data = await response.json();
    console.log(data);
    setRecipes([...recipes, ...data]);
  };
  

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="PLP-wrapper">
      <div className="PLP-header">
        <h1>Explore our menu</h1>
        <p>
          Choose from an ever changing mix of meat, fish, Beyond Meat, WW
          Approved, Diabetes Friendly recipes and health-conscious offerings{" "}
        </p>
      </div>

      <div className="recipes-wrapper">
        {recipes.map((recipe) => {
          return (
            <Link to={`/recipe/${recipe.id}`}>
              <div className="recipe">
                <img src={recipe.image} alt="recipe-img" />
                <p>{recipe.title}</p>

                <p>
                  {" "}
                  <img src={time} alt="time"></img> {recipe.readyInMinutes}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
