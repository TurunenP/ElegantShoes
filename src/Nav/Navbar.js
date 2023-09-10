import React from 'react';
import './Navbar.css';


import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <div className='navbar-container'>
        <input type="text"
        className="search-input"
        placeholder="Enter your search..."/>
      </div>
      <div className='profile-container'>
        
        <a href='#'>
          <AiOutlineUser className='nav-icon'/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;