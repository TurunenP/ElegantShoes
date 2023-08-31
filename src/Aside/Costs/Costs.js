import React from 'react';
import './Costs.css';
import Input from '../../components/Input';

const Costs = ({handleChange}) => {
  
  return (
    <div className='cost'>
      <h2 className='aside-title cost-title'>Price</h2>
      <label className='aside-label-container'>
      <input onChange={handleChange} type='radio' value=""
      name='test2'/>
      <span className='check'></span>All
      </label>

      <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
           </div>
  )
}

export default Costs;