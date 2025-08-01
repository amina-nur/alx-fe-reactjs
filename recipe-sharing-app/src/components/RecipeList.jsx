import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
const addFavorite = useRecipeStore(state => state.addFavorite);
const removeFavorite = useRecipeStore(state => state.removeFavorite);
const favorites = useRecipeStore(state => state.favorites);

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
            <button
            className="text-sm text-red-600 underline mr-2"
            onClick={() =>
              favorites.includes(recipe.id)
              ? removeFavorite(recipe.id)
              : addFavorite(recipe.id)}>
                {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
                </button>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-600 underline hover:text-blue-800"
            >
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
