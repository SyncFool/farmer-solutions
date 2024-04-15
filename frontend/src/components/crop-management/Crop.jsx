import TopBar from "../TopBar.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import DFooter from "../DFooter.jsx";
import BreadCrumb from "../BreadCrumb.jsx";
import "../../assets/css/Crop.css";
import CropDetailsChart from "./CropDetailsChart.jsx";
import CropDetailsBar from "./CropDetailsBar.jsx";

export default function CropManagement() {
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
            <div className="right-container-crop col-6"></div>
          </div>
          {/* Close Chart */}
<div className="crop-details-cards">
<div className="card" style={{width: "18rem"}}>
  <img src="/assets/images/crop.png" className="card-img-top" style={{height: "10rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Barley</h5>
    <p className="card-text">Grown With organic fertilizers</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Produced Size: 20TON</li>
    <li className="list-group-item">Price : Rs 20,000 / Ton</li>
    <li className="list-group-item">In Stock : 10 TON</li>
  </ul>
  <div className="card-body button-to-crop">
    <a href="#" className="btn btn-success rounded-pill">Edit</a>
    <a href="#" className="btn btn-danger rounded-pill">Delete</a>
  </div>
</div>
</div>
          {/* Right Area Close */}

          {/* footer Area */}
          <DFooter></DFooter>
        </div>
      </div>
    </>
  );
}
