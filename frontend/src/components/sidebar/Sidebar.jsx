import "../../assets/css/Sidebar.css";
import { IoReorderFourOutline } from "react-icons/io5";
import React from "react"
import { NavLink  } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { PiPottedPlantLight } from "react-icons/pi";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import { GiPlantSeed } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { useState } from "react";

const Sidebar = () => {
     
  return (
   
    <>
      <div className="d-flex sidebar flex-column flex-shrink-0 p-3 bg-light">
        <NavLink
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
            
          <img
            className="brand-icon-img mx-5"
            src="./assets/images/logo2.png"
            alt=""
            style={{ width: "50%" }}
          />
           
        </NavLink>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
        <li>
  <NavLink 
    to="/user-panel" 
    className={({isActive}) => {
      return isActive ? ' nav-link active' : 'nav-link link-dark';
    }}
    aria-current="page"
  >
    <FaHome className="bi me-2" />
    Dashboard
  </NavLink>
</li>

         
          <li>
            <>
            <NavLink to="/wallet"  className={({isActive}) => {
      return isActive ? ' nav-link active' : 'nav-link link-dark';
    }}>
              <CiWallet  className="bi me-2" />
              Wallet 
            </NavLink>
            </>
          </li>
     
          <li>
            <>
            <NavLink to="/crop-management"  className={({isActive}) => {
      return isActive ? ' nav-link active' : 'nav-link link-dark';
    }}>
              <PiPottedPlantLight className="bi me-2" />
              Crop Management
            </NavLink>
            </>
          </li>
          <li>
            <>
            <NavLink to="/hire-board"  className={({isActive}) => {
      return isActive ? ' nav-link active' : 'nav-link link-dark';
    }}>
              <FaPersonMilitaryToPerson className="bi me-2" />
              Hire Board
            </NavLink>
            </>
          </li>
          <li>
            <>
            <NavLink to="/purchase"  className={({isActive}) => {
      return isActive ? ' nav-link active' : 'nav-link link-dark';
    }}>
              <GiPlantSeed className="bi me-2" />
              Purchase
            </NavLink>
            </>
          </li>
          <li>
            <NavLink to="/book-transport"  className={({isActive}) => {
      return isActive ? ' nav-link active' : 'nav-link link-dark';
    }}>
              <GiFarmTractor className="bi me-2" />
              Book Transport
            </NavLink>
          </li>
          <li>
            <>
            <NavLink to="/complaint"  className={({isActive}) => {
      return isActive ? ' nav-link active' : 'nav-link link-dark';
    }}>
              <VscFeedback  className="bi me-2" />
              Complaint & Suggestions
            </NavLink>
            </>
          </li>
          
          <li>
            <>
            <NavLink to="/setting" className={({isActive}) => {
      return isActive ? ' nav-link active' : 'nav-link link-dark';
    }}>
              <IoSettingsOutline className="bi me-2" />
              Settings
            </NavLink>
            </>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
