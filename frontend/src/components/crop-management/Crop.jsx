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
  


  const [cropData,setCropData]=useState([
    {
      id: 1,
      name: "जौ",
      image: "./assets/images/crop/1.jpeg",
      tagline: "विभिन्न उपयोगों के लिए एक बहुमुखी अनाज",
      size: 200,
      price: 50000,
      instock: 50
    },
    {
      id: 2,
      name: "गेहूं",
      image: "./assets/images/crop/2.jpeg",
      tagline: "कई संस्कृतियों में एक मुख्य खाद्य",
      size: 180,
      price: 48000,
      instock: 60
    },
    {
      id: 3,
      name: "मक्का",
      image: "./assets/images/crop/3.jpeg",
      tagline: "एक व्यापक रूप से खेती की जाने वाली अनाज",
      size: 220,
      price: 55000,
      instock: 40
    },
    {
      id: 4,
      name: "चावल",
      image: "./assets/images/crop/4.jpeg",
      tagline: "अरबों के लिए प्राथमिक खाद्य स्रोत",
      size: 240,
      price: 60000,
      instock: 45
    },
    {
      id: 5,
      name: "सोयाबीन",
      image: "./assets/images/crop/5.jpeg",
      tagline: "प्रोटीन और तेल का मूल्यवान स्रोत",
      size: 190,
      price: 52000,
      instock: 55
    },
    {
      id: 6,
      name: "गन्ना",
      image: "./assets/images/crop/6.jpeg",
      tagline: "चीनी उत्पादन का प्रमुख स्रोत",
      size: 300,
      price: 70000,
      instock: 30
    },
    {
      id: 7,
      name: "कपास",
      image: "./assets/images/crop/7.jpeg",
      tagline: "वस्त्रों में उपयोग की जाने वाली एक बहुमुखी रेशा",
      size: 250,
      price: 65000,
      instock: 35
    },
    {
      id: 8,
      name: "आलू",
      image: "./assets/images/crop/8.jpeg",
      tagline: "विभिन्न रसोई उपयोगों के साथ एक मुख्य खाद्य",
      size: 170,
      price: 45000,
      instock: 70
    },
    {
      id: 9,
      name: "बाजरा",
      image: "./assets/images/crop/9.jpeg",
      tagline: "एक सूखे के प्रति सहनशील अनाज",
      size: 210,
      price: 53000,
      instock: 50
    },
    {
      id: 10,
      name: "ज्वार",
      image: "./assets/images/crop/10.jpeg",
      tagline: "खाद्य, चारा, और बायोफ्यूल के लिए एक बहुमुखी अनाज",
      size: 230,
      price: 57000,
      instock: 45
    },
    {
      id: 11,
      name: "जई",
      image: "./assets/images/crop/11.jpeg",
      tagline: "कई स्वास्थ्य लाभों के साथ एक पौष्टिक अनाज",
      size: 200,
      price: 50000,
      instock: 60
    },
    {
      id: 12,
      name: "क्विनोआ",
      image: "./assets/images/crop/12.jpeg",
      tagline: "उच्च पोषणीय मूल्य वाला ग्लूटेन मुक्त सुदृढ़ अनाज",
      size: 180,
      price: 48000,
      instock: 55
    },
    {
      id: 13,
      name: "सूरजमुखी",
      image: "./assets/images/crop/13.jpeg",
      tagline: "अपने बीज के लिए कृषि किया जाने वाला एक सुंदर फूल",
      size: 220,
      price: 55000,
      instock: 40
    },
    {
      id: 14,
      name: "मटर",
      image: "./assets/images/crop/14.jpeg",
      tagline: "विभिन्न रसोई व्यंजनों में उपयोग किया जाने वाला एक बहुमुखी दाल",
      size: 240,
      price: 60000,
      instock: 50
    },
    {
      id: 15,
      name: "चना",
      image: "./assets/images/crop/15.jpg",
      tagline: "बहुमुखी उपयोगों के साथ एक पौष्टिक दाल",
      size: 190,
      price: 52000,
      instock: 65
    },
    {
      id: 16,
      name: "अल्फाल्फा",
      image: "./assets/images/crop/16.jpg",
      tagline: "पशु चारा के लिए उपयोग  कया जाने वाला उच्च प्रोटीन वाला फोरेज फसल",
      size: 300,
      price: 70000,
      instock: 30
    },
    {
      id: 17,
      name: "मूँगफली",
      image: "./assets/images/crop/17.jpg",
      tagline: "इसके खाने योग्य बीज के लिए उत्पादित गोख",
      size: 250,
      price: 65000,
      instock: 40
    },
    {
      id: 18,
      name: "मसूर",
      image: "./assets/images/crop/18.jpg",
      tagline: "विभिन्न रसोई व्यंजनों में उपयोग किया जाने वाला एक पौष्टिक दाल",
      size: 170,
      price: 45000,
      instock: 55
    },
    {
      id: 19,
      name: "कनोला",
      image: "./assets/images/crop/19.jpg",
      tagline: "पकाने और बायोडीजल में उपयोग किए जाने वाले मूल्यवान तेलबीज फसल",
      size: 210,
      price: 53000,
      instock: 35
    },
    {
      id: 20,
      name: "अलसी का बीज",
      image: "./assets/images/crop/20.jpg",
      tagline: "ओमेगा-3 फैटी एसिड्स में समृद्ध पौष्टिक बीज",
      size: 230,
      price: 57000,
      instock: 500
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
