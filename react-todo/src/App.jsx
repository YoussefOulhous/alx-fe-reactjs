import React from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import { useState } from 'react'



function App() {

  const [tasks , settasks ] = useState ([]) ;

  const addtasks = (taskText) => {
    const newTask = { text: taskText , completed: false };
    settasks([...tasks,taskText])
  }

  const deleteTask = (i) => {
    settasks(tasks.filter((_,i) => i !== i))
  }

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
    );
    settasks(updatedTasks);
};


  return (
    <>
    <AddTodoForm addtasks={addtasks} />
    <TodoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </>
  )
}

export default App