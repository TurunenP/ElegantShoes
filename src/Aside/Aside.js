import React from 'react';
import './Aside.css';
import '../index.css'
import Category from './Category/Category';
import Costs from './Costs/Costs';
import Colors from './Colors/Colors';

const Aside = ({ handleChange }) => {
  return (
    <>
      <section className='aside'>
        <div className='aside-header'>
          <div className='logo'>
            <h1>🛒</h1>
         
          
        </div>
        <div className='aside-content'>
          <Category handleChange={handleChange} />
          <Costs handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
        </div>

      </section>
    </>
  );
}

export default Aside;
