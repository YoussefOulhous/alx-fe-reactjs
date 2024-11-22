import React from 'react'

function TodoList({tasks , deleteTask ,toggleTask}) {
  return (
    <>
    <h3>Tasks !</h3>
    
    {tasks.map((task,index)=> {
        return(
        <div key={index} style={{fontSize:'18px',fontFamily:'arial'} }>
            <p style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task}</p> 
            {/* <span onClick={() => toggleTask(index)}>{task.text}</span> */}
            <button onClick={() => deleteTask(index)}>Delete !</button>
        </div>
        )
    } )}
    
    </>
  )
}

export default TodoList