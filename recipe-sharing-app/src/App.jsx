import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {RecipeList} from './components/RecipeList';
import {AddRecipeForm} from './components/AddRecipeForm';
import  {EditRecipeForm} from './components/EditRecipeForm';
import  { RecipeDetails} from './components/RecipeDetails';
import {SearchBar} from './components/SearchBar';
import './App.css'
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <header style={{ marginBottom: '20px' }}>
          <h1>Recipe Sharing App</h1>
          <nav>
            <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
            <Link to="/add" style={{ margin: '0 10px' }}>Add Recipe</Link>
            <Link to="/favorites" style={{ margin: '0 10px' }}>Favorites</Link>
            <Link to="/recommendations" style={{ margin: '0 10px' }}>Recommendations</Link>
          </nav>
        </header>

        <SearchBar /> 
        
        <Routes>
          <Route path="/" element={<RecipeList />} /> 
          <Route path="/add" element={<AddRecipeForm   />} /> 
          <Route path="/edit/:id" element={<RecipeDetails  />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} /> 
          <Route path="/recommendations" element={<RecommendationsList />} /> 
        </Routes>
      </div>
    </Router>
  );
};
export default App;
