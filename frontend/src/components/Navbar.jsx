import '../assets/css/Navbar.css'
import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

const Navbar =()=>{
    return(<>
        <div className='navbar-1'>
            <div className='brand-logo'>
                <img src="./assets/images/logo2.png" className='logo-brand' alt="LOGO" height="60px" />
            </div>
            <div className="items">
                <div className="item">Home</div>
                <div className="item">Services</div>
                <div className="item">Projects</div>
                <div className="item">About Us</div>
                <div className="item">Conatct Us</div>
              
            </div>
            <div className="functions">
                <FaCartShopping className='cart-icon btn-sign'/>
                <button className="btn btn-outline-success rounded-pill btn-sign"> Register</button>
                <button className="btn btn-success rounded-pill btn-sign"> Login</button>
            </div>
        </div>
    </>)
}

export default Navbar;