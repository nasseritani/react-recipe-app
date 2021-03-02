import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Recipe from "./Recipe";
const RecipeDetails = ({ match }) => {
  const context = useContext(RecipeContext);
  let matchId = match.params.id;
  return (
    <div className="favorite-container">
      {context.recipes
        .filter((recipe) => recipe.recipe.calories == matchId)
        .map((recipe, index) => (
          <div className="favorite-recipe">
            {recipe.recipe.healthLabels.map((ingredient) => (
              <div>
                <h1>{ingredient}</h1>
                <h1>{ingredient.text}</h1>
                <img src={ingredient.image} alt="a" />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};
export default RecipeDetails;
