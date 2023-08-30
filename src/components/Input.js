import React from 'react';

const Input = ({handleChange, value, title, name, color}) => {
  return (
    <label className='aside-label-container'>
          <input onChange = {handleChange} type='radio' 
          value={value}name={name}/>
          <span className='check' style={{backgroundColor:color}}></span>{title}
        </label>
  )
}

export default Input;