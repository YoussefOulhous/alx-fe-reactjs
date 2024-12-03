import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail.JSX';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import { useState } from 'react';

function App() {
  
  const [recipes , setRecipes] = useState([]);

  const addRecipes =(newrecipe)=> setRecipes([...recipes, newrecipe]);


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
        <AddRecipeForm  addRecipes={addRecipes}/>

        <div className='p-8 mt-5'>

            <div className='border-2 border-black rounded-md p-7 text-center m-16' >

              {recipes.map((recipe , index)=>(
                <div key={index}>
                  <h1 className='text-3xl font-bold'>The Title :</h1>
                  <h1 className='font-semibold text-2xl'>{recipe.title}</h1> 

                  <h4 className='text-3xl font-bold' >ingredient :</h4> 
                  <ul>
                    {recipe.ingredients.map((ingredient , i)=>(
                      <li key={i} className='text-xl font-medium'>{ingredient}</li>
                    ))}
                  </ul>

                    <h4 className='text-3xl font-bold'>preparition Steps :</h4>
                  <ol>
                    {recipe.preparition.map((prepa , i) =>(
                      <li key={i} className='text-xl font-medium'>{prepa}</li>
                    ))}
                  </ol>


              </div>
              ))}

            </div>

        </div>

      </Router>
      
    </div>
  )
}

export default App