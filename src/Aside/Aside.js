import React from 'react';
import './Aside.css';
import Category from './Category/Category';
import Costs from './Costs/Costs';
import Colors from './Colors/Colors';

const Aside = ({handleChange}) => {
  // console.log(handleChange);

  return (
    <>
    <section className='aside'>
        <div className='logo'>
        <h1>🛒</h1>
        </div>
        <Category handleChange ={handleChange}/>
        <Costs handleChange ={handleChange}/>
        <Colors handleChange ={handleChange}/>
     
    </section>

    </>
  )
}

export default Aside;