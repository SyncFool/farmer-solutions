import React, { useState } from "react";
import "../../assets/css/Transport.css";
import TopBar from "../TopBar";
import DFooter from "../DFooter";
import BreadCrumb from "../BreadCrumb";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function Transport() {
  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
          <TopBar />
          {/* Bread Crum */}
          <BreadCrumb props={"परिवहन किराये पर लें"}></BreadCrumb>
          {/* video */}
          <div className="video-transport">
            <video autoPlay muted loop id="myVideo" className="mx-2">
              <source
                src="./assets/videos/driving-tractor.mp4"
                type="video/mp4"
              />
            </video>
            <div className="punchline-transport">
            <p>ट्रैक्टर से काम तेजी से पूरा करें। अभी अपना बुक करें</p>
          </div>
            <div className="book-options-transport d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
              <div className="heading-transport-booking">
                <h4>ट्रैक्टर बुक करें</h4>
              </div>
              <div  className="input-transport d-inline-flex focus-ring my-2  text-decoration-none border rounded-2"  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)",width:'80%',marginLeft:'auto',marginRight:'auto'  }}>
                <input type="text" placeholder="गांव का पता" className="d-inline-flex focus-ring py-2 px-2 text-decoration-none rounded-2"  style={{ backgroundColor: "rgba(255, 255, 255, 2)" ,width:'100%' }}/>
              </div>
              <div  className="input-transport d-inline-flex focus-ring my-2  text-decoration-none border rounded-2"  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)",width:'80%',marginLeft:'auto',marginRight:'auto'  }}>
                <input type="text" placeholder="सेवा का प्रकार" className="d-inline-flex focus-ring py-2 px-2 text-decoration-none rounded-2"  style={{ backgroundColor: "rgba(255, 255, 255, 2)" ,width:'100%' }}/>
              </div>
              <button className="btn btn-success rounded-pill mx-5 py-2 my-3">किराया जानें</button>
            </div>
          </div>

          
          {/* footer Area */}
          <DFooter></DFooter>
        </div>
      </div>
    </>
  );
}
