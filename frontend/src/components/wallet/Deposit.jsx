import TopBar from "../TopBar.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import DFooter from "../DFooter.jsx";
import BreadCrumb from "../BreadCrumb.jsx";
import "../../assets/css/Deposit.css";
import { Link } from "react-router-dom";

export default function Deposit() {
  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
          <TopBar />
          {/* Bread Crum */}
          <BreadCrumb props={"पैसे जमा करें"}></BreadCrumb>

          <div className="add-money-deposit p-5">
            <span>उपलब्ध शेष राशि : Rs 3000</span>
            <div className="input-add-money-deposit">
              <div class="input-group  p-4">
                <span class="input-group-text">₹</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
               
              </div>
            </div>
            
            
            <Link to="/add-money" style={{textDecoration:'none',color:'black',width:'20%'}}>
            <button className="btn btn-outline-success rounded-pill col-12 w-100">पैसे जोड़ें  </button>
            </Link>
          </div>

          {/* footer Area */}
          <DFooter></DFooter>
        </div>
      </div>
    </>
  );
}
