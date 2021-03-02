import React from "react";

const RecipeIngredient = ({ ingredients }) => (
  <ul className="ingredient-list">
    {ingredients.map((ingredient, index) => (
      <li className="ingredient-text">{ingredient.text}</li>
    ))}
  </ul>
);
export default RecipeIngredient;
