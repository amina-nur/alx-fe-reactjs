import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],              // All recipes
  filteredRecipes: [],      // Recipes matching the search term
  favorites: [],            // Favorite recipe IDs
  recommendations: [],      // Recommended recipes
  searchTerm: '',           // Current search filter

  // Add new recipe and re-filter list
  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Delete a recipe by ID and re-filter
  deleteRecipe: (id) => {
    const updated = get().recipes.filter(recipe => recipe.id !== id);
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Update an existing recipe and re-filter
  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Replace the entire recipes list and re-filter
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  // Update the search term and re-filter
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  // Filtering logic: title, ingredients, or time
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const lowerTerm = searchTerm.toLowerCase();

    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(lowerTerm) ||
      (Array.isArray(recipe.ingredients) &&
        recipe.ingredients.some(ing => ing.toLowerCase().includes(lowerTerm))) ||
      (recipe.time && recipe.time.toString().includes(lowerTerm))
    );

    set({ filteredRecipes: filtered });
  },

  // Add to favorites only if not already included
  addFavorite: (id) => {
    const { favorites } = get();
    if (!favorites.includes(id)) {
      set({ favorites: [...favorites, id] });
      get().generateRecommendations();
    }
  },

  // Remove from favorites by ID
  removeFavorite: (id) => {
    set(state => ({
      favorites: state.favorites.filter(favId => favId !== id)
    }));
    get().generateRecommendations();
  },

  // Generate random recommendations from favorites (mock)
  generateRecommendations: () => {
    set((state) => {
      const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    });
  }
}));

export default useRecipeStore;
