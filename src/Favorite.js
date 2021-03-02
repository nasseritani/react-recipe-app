import { RecipeProvider, RecipeContext } from "./RecipeContext";
import React, { useContext, useEffect, useState } from "react";
import RecipeDetails from "./RecipeDetail";
import Recipe from "./Recipe";
const Favorite = () => {
  const context = useContext(RecipeContext);
  return (
    <div className="favorite-container">
      {context.favoriteRecipe.slice(0, 4).map((recipe, index) => (
        <div className="favorite-recipe">
          <Recipe
            key={index}
            label={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
          />
        </div>
      ))}
    </div>
  );
};

export default Favorite;
