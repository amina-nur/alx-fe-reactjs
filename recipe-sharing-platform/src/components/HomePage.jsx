import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // for navigation

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // load mock data when component mounts
  useEffect(() => {
    fetch("/src/data.json") // fetch local file
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Recipes</h1>

      {/* Responsive grid with Tailwind */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-lg w-full h-40 object-cover mb-3"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-3">{recipe.summary}</p>

            {/* Link to detail page */}
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
