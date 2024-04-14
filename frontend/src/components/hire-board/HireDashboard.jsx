import TopBar from "../TopBar";
import DFooter from "../DFooter";
import BreadCrumb from "../BreadCrumb";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import "../../assets/css/HireBoard.css";
import { useState } from "react";

const PeopleCard = ({ props }) => {
  return (
    <>
      <div className="card" style={{ width: "10rem", height: "10rem" }}>
        <img
          src={props.image}
          class="card-img-top"
          alt="..."
          style={{ height: "10rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Charges : {props.rate}/Per Hour</li>
          <li className="list-group-item">Location : {props.location}</li>
        </ul>
        <div
          className="card-body"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link
            to="/"
            style={{ marginLeft: 0 }}
            className="check-more-details btn btn-outline-success rounded-pill"
          >
            Check More Details
          </Link>
        </div>
      </div>
    </>
  );
};
const RecentHiresComponents = ({ recentHiresData }) => {
  const RecentHires = ({ props }) => {
    return (
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>Rs {props.charges}</td>
        <td>{props.date}</td>
        <td>
          <button className="btn btn-success btn-rehire rounded-pill">
            Re Hire
          </button>
        </td>
      </tr>
    );
  };

  return (
    <tbody>
      {recentHiresData.map((item) => (
        <RecentHires key={item.id} props={item} />
      ))}
    </tbody>
  );
};

export default function HireDashboard() {
  const [recentHiresData, setRecentHiresData] = useState([
    { id: 1, name: "Vivek", charges: "500", date: "22-03-2024" },
    { id: 2, name: "John", charges: "600", date: "23-03-2024" },
    { id: 3, name: "Emily", charges: "550", date: "24-03-2024" },
    { id: 4, name: "David", charges: "700", date: "25-03-2024" },
    { id: 5, name: "Sophia", charges: "450", date: "26-03-2024" },
    { id: 6, name: "Daniel", charges: "800", date: "27-03-2024" },
    { id: 7, name: "Olivia", charges: "480", date: "28-03-2024" },
    { id: 8, name: "James", charges: "520", date: "29-03-2024" },
    { id: 9, name: "Emma", charges: "650", date: "30-03-2024" },
    { id: 10, name: "Ethan", charges: "530", date: "31-03-2024" },
    { id: 11, name: "Liam", charges: "620", date: "01-04-2024" },
    { id: 12, name: "Ava", charges: "470", date: "02-04-2024" },
    { id: 13, name: "Mia", charges: "540", date: "03-04-2024" },
    { id: 14, name: "Noah", charges: "720", date: "04-04-2024" },
    { id: 15, name: "Isabella", charges: "510", date: "05-04-2024" },
    { id: 16, name: "Sophia", charges: "690", date: "06-04-2024" },
    { id: 17, name: "Benjamin", charges: "580", date: "07-04-2024" },
    { id: 18, name: "Mason", charges: "630", date: "08-04-2024" },
    { id: 19, name: "Charlotte", charges: "490", date: "09-04-2024" },
    { id: 20, name: "Harper", charges: "570", date: "10-04-2024" },
  ]);

  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
          <TopBar />
          {/* Bread Crum */}
          <BreadCrumb props={"Hire Dashboard"}></BreadCrumb>

          {/* Hiring Area */}
          <div
            className="hire-dashboard-area card"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div
              style={{ display: "flex", flexDirection: "row" }}
              className="left-hire-dashbard col-6 card"
            >
              <PeopleCard
                props={{
                  id: 1,
                  name: "Mohit Singh",
                  rate: 500,
                  location: "Taradham Colony",
                  description: "Does Very Good Service",
                  image: "./assets/images/person/person1.jpeg",
                }}
              />
              <PeopleCard
                props={{
                  id: 1,
                  name: "Mohit Singh",
                  rate: 500,
                  location: "Taradham Colony",
                  description: "Does Very Good Service",
                  image: "./assets/images/person/person2.jpeg",
                }}
              />
            </div>
            <div
              className="right-hire-dashboard col-6 card"
              style={{ overflow: "scroll", height: "70vh", width: "38vw" }}
            >
              <div className="header-hire-board">
                <p> Recent Hires</p>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Charges</th>
                    <th scope="col">Date</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <RecentHiresComponents recentHiresData={recentHiresData} />
              </table>
            </div>
          </div>
          {/* Hiring Area Close */}
          {/* footer Area */}
          <DFooter></DFooter>
        </div>
      </div>
    </>
  );
}
