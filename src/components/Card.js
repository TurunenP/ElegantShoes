import React from 'react';
import {BsCartCheckFill} from 'react-icons/bs'

const Card = ({img, title, star, reviews, prevPrice, newPrice}) => {
  return (
    <section className='product-card'>
       <div className='product-img-container'>
          <img src={img} alt={title} className='product-img'/>
          <div className='product-details'>
            <h3 className='product-title'>{title}</h3>
            <section className='product-reviews'>
           {star} {star} {star} {star}
           <span className='reviews'>{reviews}</span>
            </section>
            <section className='product-cost'>
              <div className='cost'>
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className='cart'>
              <BsCartCheckFill/>
              </div>
            </section>
          </div>
          </div>
        </section> 
  )
}

export default Card;