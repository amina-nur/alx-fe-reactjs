import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data.json';

function RecipeDetail() {
  // useParams lets us grab the recipe ID from the URL (e.g. /recipe/1)
  const { id } = useParams();
  
  // Local state to store the recipe data
  const [recipe, setRecipe] = useState(null);

  // When component loads, find the recipe matching the ID
  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  // If recipe is not found, show a fallback
  if (!recipe) {
    return <p className="text-center text-red-500">Recipe not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Recipe title */}
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      {/* Recipe image */}
      <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg mb-6" />

      {/* Ingredients section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>

      {/* Cooking instructions */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;
