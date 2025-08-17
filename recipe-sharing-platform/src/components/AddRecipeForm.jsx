import { useState } from "react";

function AddRecipeForm() {
  // State to track inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // --- Validation logic ---
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    // Clear error and simulate form submission
    setError("");
    alert("Recipe submitted successfully!");

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Add a New Recipe
      </h2>

      {/* --- Show validation errors --- */}
      {error && <p className="text-red-500 mb-3">{error}</p>}

      {/* --- Form --- */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Spaghetti Carbonara"
          />
        </div>

        {/* Ingredients Input */}
        <div>
          <label className="block text-gray-700 font-medium">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Separate ingredients with commas"
            rows="3"
          />
        </div>

        {/* Steps Input */}
        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Step 1, Step 2, Step 3..."
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
