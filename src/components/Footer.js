import React from 'react';
import logo from "../assets/sneakers.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import '../Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
       
        <div className='identity holder'>
        <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            repudiandae.
          </p>
          <ul>
            <li className='social'><AiFillInstagram /></li>
            <li className='social'><FaFacebookF /></li>
            <li className='social'><GrLinkedinOption /></li>
            <li className='social'><BsTwitter /></li>
          </ul>
        </div>
        <div className="about holder">
        <div className="head">
            <h3>About Us</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            eligendi repellat laudantium blanditiis iure nulla, ut aliquam
            itaque unde nesciunt cum veritatis perferendis vel expedita! Nam
          </p>
        </div>
        <div className="contact holder">
        <div className="head"> 
        <h3>Contact Us</h3>
    </div>

    <p className='address'>+358 401231231</p>
    <p className='address'>elegantshoes@gmail.com</p>
    <p className='address'>@elegantshoes</p>
    <p className='address'>214 Street, Ground Floor, Oulu</p>
     </div>
     <div className='bottom_footer'>
     <h2>
          Copyright &copy; 2023 <span>ElegantShoes</span>
        </h2>
     </div> 
  
{/* <div className="scroll-down-space"></div> */}

    </div>
  )
}

export default Footer;

