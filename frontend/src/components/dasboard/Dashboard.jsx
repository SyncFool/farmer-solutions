import Sidebar from "../sidebar/Sidebar";
import "../../assets/css/Dashboard.css";

import Chart from "./Chart";
import BarGraph from "./BarGraph";
import PieChart from "./PieChart";
import DFooter from "../DFooter";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { TiSocialInstagram } from "react-icons/ti";

import BreadCrumb from "../BreadCrumb";
import TopBar from "../TopBar";

export default function Dashboard() {
  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
         <TopBar/>
          {/* Bread Crum */}
          <BreadCrumb props={"Dashboard"}></BreadCrumb>
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
                  <FaTwitter />
                </div>
                <div className="heading-social-media">
                  <p>Follow us on Twitter</p>
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
                  <RxLinkedinLogo />
                </div>
                <div className="heading-social-media">
                  <p>Follow us on LinkedIn</p>
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
                  <TiSocialInstagram />
                </div>
                <div className="heading-social-media">
                  <p>Follow us on Instagram</p>
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
