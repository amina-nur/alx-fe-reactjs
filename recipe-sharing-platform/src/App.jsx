import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <div className="p-6">
        {/* Main title for the app */}
        <h1 className="text-3xl font-bold text-blue-500 mb-6">
          Recipe Sharing Platform
        </h1>

        {/* Define routes for the app */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
