
import '../assets/css/Header.css'
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Header(){
    return <>
<nav className="navbar bg-body-tertiary">
  <div className=" header">
    <div className="container contact-details">
    <a className="navbar-brand" href="#">
      <FaLocationDot className='Icons'/>
      Ramveer Nagar Mathura
    </a>
    <a className="navbar-brand" href="#">
      <FaPhoneVolume className='Icons'/>
      +91 8006441903
    </a>
    <a className="navbar-brand" href="#">
      <FaMessage className='Icons'/>
       support@farmersolutions.com
    </a>
    </div>
    <div className="container contact-details social-media">
      Follow Us:
      <a className="navbar-brand" href="#">
      <FaFacebookF className='Icons'/>
    </a>
    <a className="navbar-brand" href="#">
      <FaSquareTwitter className='Icons'/>
    </a>
    <a className="navbar-brand" href="#">
      <FaSquareInstagram className='Icons'/>
    </a>
    <a className="navbar-brand" href="#">
      <FaLinkedin className='Icons'/>
    </a>
    </div>
  </div>
</nav>
</>
}

export default Header;