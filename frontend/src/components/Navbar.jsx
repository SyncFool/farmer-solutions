import "../assets/css/Navbar.css";
import React from "react";
// import { FaCartShopping } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-1">
        <div className="brand-logo">
          <img
            src="./assets/images/logo2.png"
            className="logo-brand"
            alt="LOGO"
            height="60px"
          />
        </div>
        <div className="items">
          <div className="item">
            <NavLink 
              className="navLink" 
              to="/" 
             
            > 
              होम 
            </NavLink>
          </div>
          {/* <div className="item">
            <NavLink 
              className="navLink" 
              to="/services" 
             
            > 
              Services 
            </NavLink>
          </div> */}
          
          <div className="item">
            <NavLink 
              className="navLink" 
              to="/about-us" 
             
            > 
              हमारे बारे में जानें
            </NavLink>
          </div>
          <div className="item">
            <NavLink 
              className="navLink" 
              to="/contact-us" 
           
            > 
              संपर्क करें 
            </NavLink>
          </div>
        </div>
        <div className="functions">
          {/* <FaCartShopping className="cart-icon btn-sign" /> */}
        
          <NavLink 
            className="btn btn-outline-success rounded-pill btn-sign"
            to="/register"
            style={({ isActive }) => ({
              display: isActive ? "none" : "block",
              width:'100%'
            })}
          >
            खाता खोलें
          </NavLink>
        
          <NavLink  
            className="btn btn-success rounded-pill btn-sign"
            to="/login"
            style={({ isActive }) => ({
              marginLeft: isActive ? "0" : "0",
              display: isActive ? "none" : "block",
              width:'100%'
            })}
          >
            लॉग इन करें
          </NavLink>
      
        </div>
      </div>
    </>
  );
};

export default Navbar;
