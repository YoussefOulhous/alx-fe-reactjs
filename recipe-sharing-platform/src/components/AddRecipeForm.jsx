import React from 'react'
import { useState } from 'react'

function AddRecipeForm({addRecipes}) {

    const[title , settitle ] = useState('');
    const [ingredients , setingredients] = useState('');
    const [ preparition , setpreparition ] = useState('') ;

    const handletheAdd = (e) => {
        e.prevetDefault;

        const newrecipe = {
            title,
            ingredients:ingredients.split(',').map((item) => item.trim()),
            preparition:preparition.split(',').map((item) => item.trim())
        };

        if(!title || !ingredients || !preparition){
            alert('please checke if all the inputs is not empty !')
            return ;
        } 

        addRecipes(newrecipe)

        settitle('');
        setingredients('');
        setpreparition('');

        

        


    }

  return (

    <div className='mt-10'>
         <h2 className='font-semibold text-4xl text-blue-700 text-center'>Add a new recipe !</h2>
   
        <div className='p-6 flex gap-3 mt-9 border-2 border-black rounded-md m-4 shadow-black shadow-sm'>
           
            <label className='font-medium text-2xl md:text-xl '> Recipes title :</label>
            <input type="text"  placeholder='title' value={title} onChange={(e)=> settitle(e.target.value)} className='border-2 border-slate-700 rounded-md h-16 p-3 md:text-lg text-xl font-medium'/>
            <label className='font-medium text-2xl md:text-xl '> Recipes ingredient :</label>
            <textarea name="ingredients" value={ingredients} onChange={(e)=> setingredients(e.target.value)} placeholder='ingredients ' className='border-2 border-slate-700 rounded-md h-28 p-3 text-xl md:text-lg font-medium'> ingredients :</textarea>
            <label className='font-medium text-2xl md:text-xl'> Recipes preparition steps :</label>
            <textarea name="preparition" value={preparition} onChange={(e)=> setpreparition(e.target.value)} placeholder='preparition steps ' className='border-2 border-slate-700 rounded-md h-28 p-3 text-xl md:text-lg font-medium'>preparition steps :</textarea>
            
        </div>

        <button onClick={handletheAdd} className='w-36 h-14 bg-red-600 text-white border-2 border-black rounded-md block mx-auto font-semibold hover:bg-red-500 delay-75 duration-100'>Add the recipe !</button>
    </div>
  )
}

export default AddRecipeForm