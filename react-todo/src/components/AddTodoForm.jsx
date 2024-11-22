import React from 'react'
import { useState } from 'react'

function AddTodoForm({addtasks}) {

    const [task , settask] = useState('') ;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task){
            addtasks(task),
            settask('')
        }
    };
        

  return (
    <>
    <input type="text" onChange={(e) => settask(e.target.value)} value={task} />
    <button onClick={handleSubmit} type='Submit'>Add !</button>
    
    </>
  )
}

export default AddTodoForm ;