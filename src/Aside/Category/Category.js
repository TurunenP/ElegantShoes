import React from 'react';
import "./Category.css";
import Input from '../../components/Input';

const Category = ({handleChange}) => {
  return (
    <div >
      <h2 className='aside-title'>Category</h2>
      <label className='aside-label-container'>
      <input onChange={handleChange} type='radio' value=""
      name='test'/>
      <span className='check'></span>All
      </label>
      <Input
       handleChange={handleChange}
       value="sneakers"
       title="Sneakers"
       name="test"
      />
      <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
  
      {/* <div>
        <label className='aside-label-container'>
          <input type='radio' name='test'/>
          <span className='check'></span>All
        </label>
        <label className='aside-label-container'>
          <input type='radio' name='test'/>
          <span className='check'></span>Sneakers
        </label>
        <label className='aside-label-container'>
          <input type='radio' name='test'/>
          <span className='check'></span>Flats
        </label>
        <label className='aside-label-container'>
          <input type='radio' name='test'/>
          <span className='check'></span>Sandals
        </label>
        <label className='aside-label-container'>
          <input type='radio' name='test'/>
          <span className='check'></span>Heels
        </label>
        </div>  */}
    </div>
  )
}

export default Category;