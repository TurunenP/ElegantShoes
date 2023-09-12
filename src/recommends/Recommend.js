import React from 'react';
import './Recommend.css';
import '../index.css';
import Button from '../components/Button';

const Recommend = ({handleClick}) => {
  return (
    <>
       <div>
      <h2 className="recommend-title">Recommendations</h2>
      <div className='recommend-flex'>
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler = {handleClick} value="Nike" title="Nike"/>
        <Button onClickHandler = {handleClick} value="Adidas" title="Adidas"/>
        <Button onClickHandler = {handleClick} value="Puma" title="Puma"/>
        <Button onClickHandler = {handleClick} value="Vans" title="Vans"/>
      </div>
    </div>  
    </>
  )
}

export default Recommend;

