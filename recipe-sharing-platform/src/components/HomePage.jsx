import React from 'react'
import { useState , useEffect} from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom';

function HomePage() {

    const [recipes , setrecipes ] = useState ([]);

    useEffect(()=>{
        setrecipes(data);
    },[]);

  return (
    <div className='w-1/2 mx-auto'>
        <h1 className='text-4xl font-bold text-center p-5 text-blue-700'>Recipes List !</h1>
        <div className='grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4'>
            {recipes.map((recipe) => (
                <div key={recipe.id} className='border rounded-lg shadow-md p-4 flex flex-col items-center bg-white'>
                    <img src={recipe.image} alt={recipe.title} className='w-32 h-32 mx-auto p-2 mt-5  object-cover hover:scale-110 duration-100 delay-75' />
                    <h2 className='font-semibold text-3xl text-center ' >{recipe.title}</h2>
                    <p className='text-center font-light mt-5'>{recipe.summary}</p>
                    <Link to={`/recipe/${recipe.id}`} className="text-blue-500 underline">
                         View Details
                    </Link>
                </div>
            ))}
        </div>

    </div>
  )
}

export default HomePage