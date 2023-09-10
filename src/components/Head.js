import React, { useState } from 'react';
import './Head.css'; 
import foodYummy from '../assets/sneakers.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';

const Nav = () => {
  const [navState, setNavState] = useState(false);

  const handleToggleClick = (e) => {
    e.stopPropagation();
    setNavState(!navState);
  };

  const handleLinkClick = () => {
    setNavState(false);
  };

  return (
    <>
      <nav className="head">
        <div className="label">
          <img src={foodYummy} alt="Icon" />
          <div className="toggle" onClick={handleToggleClick}>
            {navState ? (
              <VscChromeClose />
            ) : (
              <GiHamburgerMenu />
            )}
          </div>
        </div>
        <ul className="links">
          <li><a href="#home" className="active" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#products-section" onClick={handleLinkClick}>Products</a></li>
          <li><a href="#testimonial-section" onClick={handleLinkClick}>Testimonials</a></li>
          <li><a href="#newsletter-section" onClick={handleLinkClick}>Newsletter</a></li>
        </ul>
      </nav>
      <div className={`response-nav ${navState ? "show" : ""}`}>
        <ul>
          <li><a href="#home" className="active" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#products-section" onClick={handleLinkClick}>Products</a></li> 
          <li><a href="#testimonials" onClick={handleLinkClick}>Testimonials</a></li>
          <li><a href="#newsletter-section" onClick={handleLinkClick}>Newsletter</a></li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
