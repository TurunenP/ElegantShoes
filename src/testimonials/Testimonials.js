import React from 'react';
import avatarUser from '../assets/person_icon.png';
import './Testimonials.css'; 

const Testimonials = () => {
  return (
    <section id="testimonial-section" className='testimonials-container'>
      <div className='headline'>
      <h1>
          <span>What</span> Customers say ...
        </h1>
      </div>
      <div className='testimony'>
        <div className='statement'>
          <div className='image'>
            <img src={avatarUser} alt='avatar' />
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. <span>Lorem Ipsum</span>{" "}
          tempor incididunt. 
          </p>
        </div>
        <div className='statement'>
          <div className='image'>
            <img src={avatarUser} alt='avatar' />
          </div>
          <p>
          Duis aute irure dolor in fugiat nulla pariatur. <span>Lorem Ipsum</span>{" "}
          tempor incididunt. 
          </p>
        </div>
        <div className='statement'>
          <div className='image'>
            <img src={avatarUser} alt='avatar' />
          </div>
          <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. <span>Lorem Ipsum</span>{" "}
          tempor incididunt. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
