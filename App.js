import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import AddTask from './Component/AddTask';
import TaskList from './Component/TaskList';
import Navbar from './Component/Navbar';

function App() {
  const [tasks, setTasks] = useState([]);
  const Mytask=[]

  const setMyTask=(value)=>{
    Mytask.push(value)
  }
  const handleAddTask = (newTask) => {
    Mytask.push(newTask);
    setTasks([...tasks, newTask]);
  };

   
 
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <h1 className='container'>Todo App</h1>
      
      
      
      <AddTask onAdd={handleAddTask}/>
      <TaskList tasks={tasks}/>
      
    </div>
  );
}

export default App;
