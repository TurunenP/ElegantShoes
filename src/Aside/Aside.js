import React from 'react';
import './Aside.css';
import Category from './Category/Category';
import Costs from './Costs/Costs';
import Colors from './Colors/Colors';

const Aside = ({handleChange}) => {
  
  return (
    <>
    <section className='aside'>
    <div className='logo'>
        <h1 className='cart'>🛒</h1>
    </div>
    <div className='component-container'>
        <Category handleChange={handleChange} />
    </div>
    <div className='component-container'>
        <Costs handleChange={handleChange} />
    </div>
    <div className='component-container'>
        <Colors handleChange={handleChange} />
    </div>
</section>
    </>
  )
}

export default Aside;