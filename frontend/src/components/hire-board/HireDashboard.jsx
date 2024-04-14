import TopBar from "../TopBar";
import DFooter from "../DFooter";
import BreadCrumb from "../BreadCrumb";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import "../../assets/css/HireBoard.css";
import { useState } from "react";

const PeopleCardComponent = ({farmerData}) => {
  const PeopleCard = ({ props }) => {
    return (
      <>
        <div className="card person-card-component">
          <div className="verified-hireboard">
            {props.verified && (
              <img src="./assets/images/verified.png" alt="" />
            )}
          </div>
          <div className="user-image-hireboard">
            <img
              src={props.image}
              alt=""
              style={{ height: "100px", width: "100px", borderRadius: "10px" }}
            />
          </div>
          <div className="person-details-hireboard">
            <div className="user-title-hireboard">
              <p>{props.name}</p>{" "}
              <button className="btn rounded-pill btn-outline-info">
                Hire Me
              </button>
            </div>
            <div className="user-tagline-hireboard">
              <div className="rating-hireboard-person">
                <p className="star">&#9733;</p> <p>{props.rating}</p> <p>|</p>
                <p>Rs {props.charges} Per Hour</p> <p>|</p>
                <p className="reviews">{props.review} reviews</p>
              </div>
            </div>
            <div className="user-description-area-hireboard">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {farmerData.map((item) => (
        <PeopleCard props={item} key={item.id} />
      ))}
    </div>
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

  const [farmerData, setFarmerData] = useState([
    {
      id: 1,
      name: "John Smith",
      verified: true,
      image: "./assets/images/person/1.jpg",
      rating: 4.3,
      charges: 180,
      review: 1200,
      description:
        "Hello, I'm John Smith. I have a passion for agriculture and have been working in the field for several years. I specialize in crop management and sustainable farming practices.",
    },
    {
      id: 2,
      name: "Michael Johnson",
      verified: true,
      image: "./assets/images/person/2.jpg",
      rating: 4.7,
      charges: 200,
      review: 1500,
      description:
        "Hi, I'm Michael Johnson. I come from a farming family and have hands-on experience in various aspects of agriculture. I'm dedicated to delivering top-quality produce to consumers.",
    },
    {
      id: 3,
      name: "David Brown",
      verified: false,
      image: "./assets/images/person/3.jpg",
      rating: 4.1,
      charges: 160,
      review: 900,
      description:
        "My name is David Brown. I'm a young and enthusiastic farmer with a keen interest in modern farming techniques. I'm committed to continuous learning and improvement in agriculture.",
    },
    {
      id: 4,
      name: "James Wilson",
      verified: true,
      image: "./assets/images/person/4.jpg",
      rating: 4.5,
      charges: 220,
      review: 1800,
      description:
        "I'm James Wilson, a seasoned farmer with a focus on sustainable farming practices. I believe in the importance of environmental stewardship and strive to minimize the ecological impact of farming.",
    },
    {
      id: 5,
      name: "Robert Taylor",
      verified: false,
      image: "./assets/images/person/5.jpg",
      rating: 4.2,
      charges: 190,
      review: 1100,
      description:
        "Hey there, I'm Robert Taylor. I have a strong background in horticulture and specialize in cultivating fruits and vegetables. I'm dedicated to providing fresh and nutritious produce to the community.",
    },
    {
      id: 6,
      name: "William Martinez",
      verified: true,
      image: "./assets/images/person/6.jpg",
      rating: 4.6,
      charges: 210,
      review: 1600,
      description:
        "I'm William Martinez, an experienced farmer with a focus on precision agriculture. I leverage technology to optimize crop yields and ensure sustainable farming practices.",
    },
    {
      id: 7,
      name: "Daniel Thomas",
      verified: true,
      image: "./assets/images/person/7.jpg",
      rating: 4.4,
      charges: 195,
      review: 1350,
      description:
        "Hello, I'm Daniel Thomas. I have a diverse background in agriculture, with expertise in livestock management and organic farming. I'm passionate about animal welfare and environmental sustainability.",
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
          <BreadCrumb props={"Hire Dashboard"}></BreadCrumb>

          {/* Hiring Area */}
          <div
            className="hire-dashboard-area card"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="left-hire-dashboard col-7 card">
             <PeopleCardComponent farmerData={farmerData} />
            </div>
            <div
              className="right-hire-dashboard col-5 card"
              style={{ overflow: "scroll", height: "70vh", padding: "1rem" }}
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
