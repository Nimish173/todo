import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav>
            <h3 className='logo'> Todo List </h3>

            <ul className='nav-links'>
                
            <Link to='/Todo'> <li>Create Todo</li></Link>
            <Link to='/teachers'> <li>Update Todo</li></Link>
            </ul>
        </nav>
  );
}

export default Navbar;