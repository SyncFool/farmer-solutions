import TopBar from "../TopBar.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import DFooter from "../DFooter.jsx";
import BreadCrumb from "../BreadCrumb.jsx";
import "../../assets/css/Crop.css";
import CropDetailsChart from "./CropDetailsChart.jsx";
import CropDetailsBar from "./CropDetailsBar.jsx";
import { useState } from "react";

export default function CropManagement() {
  const CropDetailsComponent = ({ cropData }) => {
    const CropDetails = ({ props }) => {
      return (
        <>
          <div className="crop-details-cards" style={{margin:"1rem"}}>
            <div className="card" style={{ width: "17rem" }}>
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
                <li className="list-group-item">Produced Size: {props.size} Ton</li>
                <li className="list-group-item">Price : {props.price} Per Ton</li>
                <li className="list-group-item">In Stock : {props.instock} Ton</li>
              </ul>
              <div className="card-body button-to-crop">
                <a href="#" className="btn btn-success rounded-pill">
                  Edit
                </a>
                <a href="#" className="btn btn-danger rounded-pill">
                  Delete
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
  


  const [cropData,setCropData]=useState([
    {
      id: 1,
      name: "Barley",
      image: "./assets/images/crop/1.jpeg",
      tagline: "A versatile grain for various uses",
      size: 200,
      price: 50000,
      instock: 50
    },
    {
      id: 2,
      name: "Wheat",
      image: "./assets/images/crop/2.jpeg",
      tagline: "A staple food in many cultures",
      size: 180,
      price: 48000,
      instock: 60
    },
    {
      id: 3,
      name: "Corn",
      image: "./assets/images/crop/3.jpeg",
      tagline: "A widely cultivated cereal grain",
      size: 220,
      price: 55000,
      instock: 40
    },
    {
      id: 4,
      name: "Rice",
      image: "./assets/images/crop/4.jpeg",
      tagline: "A primary food source for billions",
      size: 240,
      price: 60000,
      instock: 45
    },
    {
      id: 5,
      name: "Soybean",
      image: "./assets/images/crop/5.jpeg",
      tagline: "A valuable source of protein and oil",
      size: 190,
      price: 52000,
      instock: 55
    },
    {
      id: 6,
      name: "Sugarcane",
      image: "./assets/images/crop/6.jpeg",
      tagline: "A major source of sugar production",
      size: 300,
      price: 70000,
      instock: 30
    },
    {
      id: 7,
      name: "Cotton",
      image: "./assets/images/crop/7.jpeg",
      tagline: "A versatile fiber used in textiles",
      size: 250,
      price: 65000,
      instock: 35
    },
    {
      id: 8,
      name: "Potato",
      image: "./assets/images/crop/8.jpeg",
      tagline: "A staple food with various culinary uses",
      size: 170,
      price: 45000,
      instock: 70
    },
    {
      id: 9,
      name: "Millet",
      image: "./assets/images/crop/9.jpeg",
      tagline: "A drought-tolerant cereal grain",
      size: 210,
      price: 53000,
      instock: 50
    },
    {
      id: 10,
      name: "Sorghum",
      image: "./assets/images/crop/10.jpeg",
      tagline: "A versatile grain used for food, feed, and biofuel",
      size: 230,
      price: 57000,
      instock: 45
    },
    {
      id: 11,
      name: "Oats",
      image: "./assets/images/crop/11.jpeg",
      tagline: "A nutritious cereal grain with many health benefits",
      size: 200,
      price: 50000,
      instock: 60
    },
    {
      id: 12,
      name: "Quinoa",
      image: "./assets/images/crop/12.jpeg",
      tagline: "A gluten-free pseudocereal with high nutritional value",
      size: 180,
      price: 48000,
      instock: 55
    },
    {
      id: 13,
      name: "Sunflower",
      image: "./assets/images/crop/13.jpeg",
      tagline: "A beautiful flower cultivated for its seeds",
      size: 220,
      price: 55000,
      instock: 40
    },
    {
      id: 14,
      name: "Pea",
      image: "./assets/images/crop/14.jpeg",
      tagline: "A versatile legume used in various cuisines",
      size: 240,
      price: 60000,
      instock: 50
    },
    {
      id: 15,
      name: "Chickpea",
      image: "./assets/images/crop/15.jpg",
      tagline: "A nutritious pulse with many culinary uses",
      size: 190,
      price: 52000,
      instock: 65
    },
    {
      id: 16,
      name: "Alfalfa",
      image: "./assets/images/crop/16.jpg",
      tagline: "A high-protein forage crop used for animal feed",
      size: 300,
      price: 70000,
      instock: 30
    },
    {
      id: 17,
      name: "Peanut",
      image: "./assets/images/crop/17.jpg",
      tagline: "A legume grown for its edible seeds",
      size: 250,
      price: 65000,
      instock: 40
    },
    {
      id: 18,
      name: "Lentil",
      image: "./assets/images/crop/18.jpg",
      tagline: "A nutritious pulse used in various cuisines",
      size: 170,
      price: 45000,
      instock: 55
    },
    {
      id: 19,
      name: "Canola",
      image: "./assets/images/crop/19.jpg",
      tagline: "A valuable oilseed crop used in cooking and biodiesel",
      size: 210,
      price: 53000,
      instock: 35
    },
    {
      id: 20,
      name: "Flaxseed",
      image: "./assets/images/crop/20.jpg",
      tagline: "A nutritious seed rich in omega-3 fatty acids",
      size: 230,
      price: 57000,
      instock:500
}]);
  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
          <TopBar />
          {/* Bread Crum */}
          <BreadCrumb props={"Crop Management"}></BreadCrumb>

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
              <button className="btn btn-success rounded-pill">
                Add New Crop
              </button>
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
