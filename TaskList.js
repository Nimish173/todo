import {React,useState} from 'react';
import Task from './Task';
import './TaskList.css'

function TaskList({ tasks }) {
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  
  const onDelete = (index) => {
    if (index === -1) {
      setTasks([]);
    } else {
      const updatedTasks = tasks.filter((task, i) => i !== index);
      setTasks(updatedTasks);
    }
  };

  return (
    <div>
      {tasks.map((task, index,onDelete) => (
        <div>
        <Task key={index} 
        task={task} 
        />
        <button className='delete-button' onClick={onDelete(index)}>x</button>
        </div>
      ))}
      <p>You have {pendingTasks} pending tasks</p>
      <button className='clear-all' onClick={onDelete(-1)} >Clear All</button>
    </div>
  );
}

export default TaskList;
