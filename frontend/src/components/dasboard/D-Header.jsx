import Sidebar from "../sidebar/Sidebar";
import "../../assets/css/DHeader.css";
import { FaEnvelope } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import Chart from "./Chart";
import BarGraph from "./BarGraph";
import PieChart from "./PieChart";
import DFooter from "./DFooter";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Dashboard() {
  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
          <div className="top-bar">
            <div className="icons">
              <FaEnvelope className="icon-header" />
            </div>
            <div style={{ marginRight: "50px" }} className="icons">
              <IoMdNotifications className="icon-header" />
            </div>
          </div>
          <div className="breadcrum-header">
            <h4>Dashboard</h4>
          </div>
          <div className="breadcrum-menu">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#" className="breadcrumb-item-text">
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </nav>
          </div>
          {/* Menu Area */}
          <div className="card-menu">
            <div className="card card-items ">
              <div className="menu-icon col-6">
                <img src="/assets/images/crop.png" alt="" />
              </div>
              <div className="menu-text-area col-6">
                <div className="menu-heading">
                  <h4 className="menu-heading-text">Crop Produced</h4>
                </div>
                <div className="menu-details">
                  <p className="menu-subline-text">50 TON</p>
                </div>
              </div>
            </div>
            <div className="card card-items">
              {" "}
              <div className="menu-icon col-6">
                <img src="/assets/images/labour.png" alt="" />
              </div>
              <div className="menu-text-area col-6">
                <div className="menu-heading">
                  <h4 className="menu-heading-text">Labour Hired</h4>
                </div>
                <div className="menu-details">
                  <p className="menu-subline-text">500 Person</p>
                </div>
              </div>
            </div>
            <div className="card card-items">
              {" "}
              <div className="menu-icon  col-6">
                <img src="/assets/images/fertilizers.png" alt="" />
              </div>
              <div className="menu-text-area col-6">
                <div className="menu-heading">
                  <h4 className="menu-heading-text">Fertilizers Buy</h4>
                </div>
                <div className="menu-details">
                  <p className="menu-subline-text">200 Packets</p>
                </div>
              </div>
            </div>
            <div className="card card-items">
              {" "}
              <div className="menu-icon col-6">
                <img src="/assets/images/tractor.png" alt="" />
              </div>
              <div className="menu-text-area col-6">
                <div className="menu-heading">
                  <h4 className="menu-heading-text">Tractor Rented</h4>
                </div>
                <div className="menu-details">
                  <p className="menu-subline-text">50</p>
                </div>
              </div>
            </div>
          </div>
          {/* Chart Area */}
          <div className="graphs">
            <div className="chart card col-6">
              <Chart></Chart>
            </div>
            <div className="bargraph card col-3">
              <BarGraph></BarGraph>
            </div>
            <div className="piechart card col-3">
              <PieChart></PieChart>
            </div>
          </div>

          {/* Social Media */}
          <div className="social-media-section card">
            <div
              className="card social-media-cards col-4"
              style={{ backgroundColor: "#546ca9" }}
            >
              <div className="heading-icon-text">
                <div className="icon-social-media">
                  <FaSquareFacebook />
                </div>
                <div className="heading-social-media">
                  <p>Like us on facebook</p>
                </div>
              </div>
              <div className="count-socialmedia">
                <p>10,000</p>
              </div>
            </div>
            <div
              className="card social-media-cards col-4"
              style={{ backgroundColor: "#45a0f0" }}
            >
              {" "}
              <div className="heading-icon-text">
                <div className="icon-social-media">
                  <FaSquareFacebook />
                </div>
                <div className="heading-social-media">
                  <p>Like us on facebook</p>
                </div>
              </div>
              <div className="count-socialmedia">
                <p>10,000</p>
              </div>
            </div>
            <div
              className="card social-media-cards col-4"
              style={{ backgroundColor: "#1565c0" }}
            >
              {" "}
              <div className="heading-icon-text">
                <div className="icon-social-media">
                  <FaSquareFacebook />
                </div>
                <div className="heading-social-media">
                  <p>Like us on facebook</p>
                </div>
              </div>
              <div className="count-socialmedia">
                <p>10,000</p>
              </div>
            </div>
            <div
              className="card social-media-cards col-4"
              style={{ backgroundColor: "#c13584" }}
            >
              {" "}
              <div className="heading-icon-text">
                <div className="icon-social-media">
                  <FaSquareFacebook />
                </div>
                <div className="heading-social-media">
                  <p>Like us on facebook</p>
                </div>
              </div>
              <div className="count-socialmedia">
                <p>10,000</p>
              </div>
            </div>
          </div>

          {/* footer section */}
          <div className="dfooter">
            <DFooter />
          </div>
          {/* Right Area Close */}
        </div>
      </div>
    </>
  );
}
