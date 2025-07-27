import React from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div>
      <h2 className="text-2xl font-bold mt-4 mb-2">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Try favoriting some recipes.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} className="mb-2 p-2 border rounded">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description || 'No description'}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;

