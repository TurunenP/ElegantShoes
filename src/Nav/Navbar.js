import React from 'react';
import './Navbar.css';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <div className='nabar-container'>
        <input type="text"
        className="search-input"
        placeholder="Enter your search..."/>
      </div>
      <div className='profile-container'>
        <a href='#'>
          <FiHeart className='nav-icon'/>
        </a>
        <a href='#'>
          <AiOutlineShoppingCart className='nav-icon'/>
        </a>
        <a href='#'>
          <AiOutlineUser className='nav-icon'/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;