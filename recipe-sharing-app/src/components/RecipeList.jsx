import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
            <p>Time: {recipe.time} mins</p>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
