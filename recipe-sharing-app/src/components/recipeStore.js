import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Add a recipe and filter afterward
  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Delete a recipe and filter afterward
  deleteRecipe: (id) => {
    const updated = get().recipes.filter(recipe => recipe.id !== id);
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Update a recipe and filter afterward
  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Replace all recipes and filter based on current search
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  // Set the search term and re-filter
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  // Actual filtering logic — by title, ingredient, or time
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

  // Favorites
  addFavorite: (id) => {
    const { favorites } = get();
    if (!favorites.includes(id)) {
      set({ favorites: [...favorites, id] });
      get().generateRecommendations();
    }
  },

  removeFavorite: (id) => {
    set(state => ({
      favorites: state.favorites.filter(favId => favId !== id)
    }));
    get().generateRecommendations();
  },

  // Recommendations (mock: return random subset of favorites)
  generateRecommendations: () =>
  set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
