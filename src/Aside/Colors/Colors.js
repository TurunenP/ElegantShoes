import React from 'react';
import './Colors.css'
import Input from '../../components/Input';

const Colors = ({handleChange}) => {
  return (
    <>
    <div>
      <h2 className='aside-title colors-title'>Colors</h2>
      <label className='aside-label-container'>
      <input onChange={handleChange} type='radio' value=""
      name='test3'/>
      <span className='check all'></span>All
      </label>

      <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test3"
          color="black"
        />
         <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
        />
         <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test3"
          color="red"
        />
         <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test3"
          color="green"
        />

        <label className="aside-label-container">
          <input
            type="radio"
            onChange={handleChange}
            value="white"
            name="test3"
          />
          <span
            className="check"
            style={{ 
              background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
    </div>
    </>
  )
}

export default Colors;