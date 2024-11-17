import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes available. Add some!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '20px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} style={{ marginRight: '10px' }}>
              View Details
            </Link>
            <button onClick={() => deleteRecipe(recipe.id)} style={{ padding: '5px 10px' }}>
              Delete
            </button>
            <Link to={`/edit/${recipe.id}`} style={{ marginLeft: '10px' }}>
            <button>Edit</button>
          </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
