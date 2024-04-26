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
          <BreadCrumb props={"डैशबोर्ड"}></BreadCrumb>
          {/* Menu Area */}
          <div className="card-menu">
            <div className="card card-items ">
              <div className="menu-icon col-6">
                <img src="/assets/images/crop.png" alt="" />
              </div>
              <div className="menu-text-area col-6">
                <div className="menu-heading">
                  <h4 className="menu-heading-text">फसल का उत्पादन</h4>
                </div>
                <div className="menu-details">
                  <p className="menu-subline-text">50 टन</p>
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
                  <h4 className="menu-heading-text">श्रमिक को काम पर रखा गया</h4>
                </div>
                <div className="menu-details">
                  <p className="menu-subline-text">500 व्यक्ति</p>
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
                  <h4 className="menu-heading-text">खाद खरीदें</h4>
                </div>
                <div className="menu-details">
                  <p className="menu-subline-text">200 पैकेट</p>
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
                  <h4 className="menu-heading-text">ट्रैक्टर किराये पर</h4>
                </div>
                <div className="menu-details">
                  <p className="menu-subline-text">50</p>
                </div>
              </div>
            </div>
          </div>
          {/* Chart Area */}
          <div className="graphs my-2">
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
                  <p>फेसबुक पर हमे पसन्द करो</p>
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
                  <p>हमें ट्विटर पर फॉलो करें</p>
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
                  <p>हमें लिंक्डइन पर फ़ॉलो करें</p>
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
                  <p>हमें इंस्टाग्राम पर फॉलो करें</p>
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
