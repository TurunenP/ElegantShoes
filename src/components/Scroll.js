import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import './Scroll.css'; 

const Scroll = () => {
  const [scrollState, setScrollState] = useState(false);

  const handleScroll = () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`top-scroll ${scrollState ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp />
    </div>
  );
};

export default Scroll;
