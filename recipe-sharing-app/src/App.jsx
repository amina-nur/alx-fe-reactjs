import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; 
import { useEffect } from 'react';
import useRecipeStore from './recipeStore';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const sampleData = [
  { id: 1, title: 'Pasta', ingredients: ['flour', 'egg'], time: 20 },
  { id: 2, title: 'Salad', ingredients: ['lettuce', 'tomato'], time: 10 }
];

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    // Load sample recipes
    setRecipes(sampleData);
  }, []);

  return (
    <Router>
      <div className="App p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <hr className="my-4" />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

