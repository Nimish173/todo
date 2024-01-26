import React from 'react';
import './Task.css'

function Task({ task, index, onDelete}) {
  return (
    <div className='task'>
      {task} 
      
    </div>
  );
}

export default Task;

