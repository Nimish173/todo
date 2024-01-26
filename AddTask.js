import React, { useState } from 'react';
import './AddTask.css'

function AddTask({ onAdd }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text) {
      onAdd(text);
      setText('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAdd();
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder='Add your New Todo'
        onKeyDown={handleKeyDown}
        style={{ width: '200px', height: '20px',marginRight:'10px' }}
      />
      <button className='add-button' 
      onClick={handleAdd}>+</button>
    </div>
  );
}

export default AddTask;
