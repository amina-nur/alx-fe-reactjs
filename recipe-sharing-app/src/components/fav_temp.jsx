import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavouriteList =() => {
    const favorites = useRecipeStore(state => state.favorites);
    const recipes = useRecipeStore(state => state.recipes);
    const favoriteRecipes = favorites
    .map(is => recipes.find(r => r.id === id))
    .filter(Boolean);

return (
    <div>
      <h2 className="text-2xl font-bold mt-4 mb-2">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="mb-2 p-2 border rounded">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description || 'No description'}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default FavouriteList;