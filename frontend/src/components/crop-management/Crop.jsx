import TopBar from "../TopBar.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import DFooter from "../DFooter.jsx";
import BreadCrumb from "../BreadCrumb.jsx";
import "../../assets/css/Crop.css";
import CropDetailsChart from "./CropDetailsChart.jsx";
import CropDetailsBar from "./CropDetailsBar.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CropManagement() {
  const CropDetailsComponent = ({ cropData }) => {
    const CropDetails = ({ props }) => {
      return (
        <>
          <div className="crop-details-cards" style={{margin:"1rem"}}>
            <div className="card" style={{ width: "17rem"}}>
              <img
                src={props.image}
                className="card-img-top"
                style={{ height: "10rem" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.tagline}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">उत्पादित फसल: {props.size} टन</li>
                <li className="list-group-item">कीमत : {props.price} प्रति टन</li>
                <li className="list-group-item">स्टॉक में : {props.instock} टन</li>
              </ul>
              <div className="card-body button-to-crop">
                <a href="#" className="btn btn-success rounded-pill mx-1">
                एडिटिंग करें
                </a>
                <a href="#" className="btn btn-danger rounded-pill mx-1">
                यहां हटाएं
                </a>
              </div>
            </div>
          </div>
        </>
      );
    };
  
    return (
      <>
        {cropData.map((item) => (
          <CropDetails props={item} key={item.id} />
        ))}
      </>
    );
  };
  


  const [cropData,setCropData]=useState([]);
  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
          <TopBar />
          {/* Bread Crum */}
          <BreadCrumb props={"फसल प्रबंधन"}></BreadCrumb>

          {/* Details of Crop With Chart  */}

          <div className="crop-chart-details card">
            <div className="left-crop-chart col-6">
              <CropDetailsChart></CropDetailsChart>
            </div>
            <div className="right-crop-bargraph col-4">
              <CropDetailsBar />
            </div>
          </div>
          {/* Menu Area */}
          <div className="add-menu-crop card">
            <div className="col-6 left-container-crop ">
              <Link to="/add-new-crop">
              <button className="btn btn-success rounded-pill">
              नई फसल जोड़ें
              </button>
              </Link>
            </div>
       
          </div>
       <div className="crop-details-area-edit-add card">
       <CropDetailsComponent cropData={cropData} />
       </div>
          {/* Right Area Close */}

          {/* footer Area */}
          <DFooter></DFooter>
        </div>
      </div>
    </>
  );
}
