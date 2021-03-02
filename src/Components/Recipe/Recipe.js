import { Link } from "react-router-dom";

import React, { useContext, useState } from "react";
import RecipeIngredient from "./RecipeIngredient";
const Recipe = ({ label, image, calories, ingredients }) => {
  const [isOpened, setIsOpened] = useState("");
  const toggle = (e) => setIsOpened((wasOpened) => !wasOpened);
  return (
    <div className="recipe-container">
      <div className="recipe-image">
        <Link to={`/recipe/${calories}`}>
          <img src={image} alt={label} />
        </Link>
      </div>
      <div className="recipe-content">
        <h3>{label}</h3>
        <p>Calories :{Math.floor(calories)}</p>
      </div>

      {/* <p>
        <Link to={`/recipe/${label}`}>Show Ingredients</Link>
      </p> */}
      {ingredients && (
        <div className="box">
          <div className="btnIngredient" onClick={(e) => toggle(e)}>
            <h3>Show ingredients</h3>
          </div>
          {isOpened && <RecipeIngredient ingredients={ingredients} />}
        </div>
      )}
    </div>
  );
};
export default Recipe;
