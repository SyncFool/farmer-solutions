import React, { useState } from 'react';
import "../../assets/css/Purchase.css";
import TopBar from "../TopBar";
import DFooter from "../DFooter";
import BreadCrumb from "../BreadCrumb";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

export default function Purchase() {
  const [activeTab, setActiveTab] = useState("seeds"); // Initialize active tab state

  // Function to handle tab click
  const handleTabClick = (tab) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  const PurchaseCards=()=>{
    return(
        <>
        <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
  }

  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
          <TopBar />
          {/* Bread Crum */}
          <BreadCrumb props={"Purchase"}></BreadCrumb>

          {/* Tab Bar */}
          <div className="card purchase-nav-bar">
            <ul className="nav nav-tabs justify-content-center">
              <li className="nav-item">
                <a href="seeds" className={`nav-link ${activeTab === "seeds" ? "active" : ""}`} onClick={() => handleTabClick("seeds")}>
                  Seeds
                </a>
              </li>
              <li className="nav-item">
                <a href="fertilizers" className={`nav-link ${activeTab === "fertilizers" ? "active" : ""}`} onClick={() => handleTabClick("fertilizers")}>
                  Fertilizers
                </a>
              </li>
            </ul>
            <div className="cart-purchase">
              <CiShoppingCart />
            </div>
          </div>

          {/* Content */}
          <div className="card">
            <div id="seeds" style={{ display: activeTab === "seeds" ? "flex" : "none" }} className='seeds-purchase-area'>
              <PurchaseCards/>  <PurchaseCards/>
              <PurchaseCards/>
              <PurchaseCards/>
              <PurchaseCards/>
            </div>
            <div id="fertilizers" style={{ display: activeTab === "fertilizers" ? "flex" : "none" }} className='fertilizers-purchase-area'>
            <PurchaseCards/>
            <PurchaseCards/>
            <PurchaseCards/>
            <PurchaseCards/>
            <PurchaseCards/>
            </div>
          </div>

          {/* footer Area */}
          <DFooter></DFooter>
        </div>
      </div>
    </>
  );
}
