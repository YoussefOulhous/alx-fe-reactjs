import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"; // Import data from JSON

function RecipeDetail() {
  // Destructure `id` from the route params
  const { id } = useParams();
  
  // State to hold the recipe data
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe based on the id
    const recipeData = data.find((recipe) => recipe.id === Number(id));
    
    // Set the recipe state
    setRecipe(recipeData);
  }, [id]); // Effect runs when `id` changes

  // If recipe data is not available yet, show loading message
  if (!recipe) {
    return <div>Loading...</div>;
  }

  // Return the recipe details layout
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <p className="text-gray-700 text-lg mb-4">{recipe.summary}</p>

      <h2 className="text-xl font-semibold mt-6">Ingredients:</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        )) || <li>Ingredients not available.</li>}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Cooking Instructions:</h2>
      <p>{recipe.instructions || "Instructions not available."}</p>
    </div>
  );
}

export default RecipeDetail;
