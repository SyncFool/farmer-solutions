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
              मुझे चुनिएँ
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
          दोबारा चुनिएँ
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
    {
      id: 1,
      name: "विवेक",
      charges: "500",
      date: "22-03-2024"
    },
    {
      id: 2,
      name: "जॉन",
      charges: "600",
      date: "23-03-2024"
    },
    {
      id: 3,
      name: "एमिली",
      charges: "550",
      date: "24-03-2024"
    },
    {
      id: 4,
      name: "देविद",
      charges: "700",
      date: "25-03-2024"
    },
    {
      id: 5,
      name: "सोफिया",
      charges: "450",
      date: "26-03-2024"
    },
    {
      id: 6,
      name: "डेनियल",
      charges: "800",
      date: "27-03-2024"
    },
    {
      id: 7,
      name: "ओलिविया",
      charges: "480",
      date: "28-03-2024"
    },
    {
      id: 8,
      name: "जेम्स",
      charges: "520",
      date: "29-03-2024"
    },
    {
      id: 9,
      name: "एमा",
      charges: "650",
      date: "30-03-2024"
    },
    {
      id: 10,
      name: "ईथन",
      charges: "530",
      date: "31-03-2024"
    },
    {
      id: 11,
      name: "लियाम",
      charges: "620",
      date: "01-04-2024"
    },
    {
      id: 12,
      name: "एवा",
      charges: "470",
      date: "02-04-2024"
    },
    {
      id: 13,
      name: "मिया",
      charges: "540",
      date: "03-04-2024"
    },
    {
      id: 14,
      name: "नोआ",
      charges: "720",
      date: "04-04-2024"
    },
    {
      id: 15,
      name: "इजाबेला",
      charges: "510",
      date: "05-04-2024"
    },
    {
      id: 16,
      name: "सोफिया",
      charges: "690",
      date: "06-04-2024"
    },
    {
      id: 17,
      name: "बेंजामिन",
      charges: "580",
      date: "07-04-2024"
    },
    {
      id: 18,
      name: "मेसन",
      charges: "630",
      date: "08-04-2024"
    },
    {
      id: 19,
      name: "चार्लोट",
      charges: "490",
      date: "09-04-2024"
    },
    {
      id: 20,
      name: "हार्पर",
      charges: "570",
      date: "10-04-2024"
    }
  ]);

  const [farmerData, setFarmerData] = useState([
    {
      id: 1,
      name: "जॉन स्मिथ",
      verified: true,
      image: "./assets/images/person/1.jpg",
      rating: 4.3,
      charges: 180,
      review: 1200,
      description:
        "नमस्ते, मैं जॉन स्मिथ हूँ। मुझे कृषि का शौक है और मैं कई सालों से इस क्षेत्र में काम कर रहा हूँ। मैं फसल प्रबंधन और सतत कृषि प्रथाओं में विशेषज्ञ हूँ।",
    },
    {
      id: 2,
      name: "माइकल जॉनसन",
      verified: true,
      image: "./assets/images/person/2.jpg",
      rating: 4.7,
      charges: 200,
      review: 1500,
      description:
        "नमस्ते, मैं माइकल जॉनसन हूँ। मैं एक किसान परिवार से आता हूँ और मैं कृषि के विभिन्न पहलुओं में हाथों का अनुभव रखता हूँ। मैं उपभोक्ताओं को उत्कृष्ट उत्पाद प्रदान करने के लिए प्रतिबद्ध हूँ।",
    },
    {
      id: 3,
      name: "डेविड ब्राउन",
      verified: false,
      image: "./assets/images/person/3.jpg",
      rating: 4.1,
      charges: 160,
      review: 900,
      description:
        "मेरा नाम डेविड ब्राउन है। मैं एक युवा और उत्साही किसान हूँ जिसमें आधुनिक कृषि तकनीकों में एक गहरा रूचि है। मैं कृषि में सतत शिक्षा और सुधार के प्रति प्रतिबद्ध हूँ।",
    },
    {
      id: 4,
      name: "जेम्स विल्सन",
      verified: true,
      image: "./assets/images/person/4.jpg",
      rating: 4.5,
      charges: 220,
      review: 1800,
      description:
        "मैं जेम्स विल्सन हूँ, एक परिपक्व किसान जिसका ध्यान सतत कृषि प्रथाओं पर है। मैं पर्यावरणीय प्रबंधन के महत्व को मानता हूँ और कृषि के पारिस्थितिकी असर को कम से कम करने का प्रयास करता हूँ।",
    },
    {
      id: 5,
      name: "रॉबर्ट टेलर",
      verified: false,
      image: "./assets/images/person/5.jpg",
      rating: 4.2,
      charges: 190,
      review: 1100,
      description:
        "नमस्ते, मैं रॉबर्ट टेलर हूँ। मेरे पास बागवानी में मजबूत पृष्ठभूमि है और मैं फल और सब्जियों का उत्पादन करने में विशेषज्ञ हूँ। मैं समुदाय को ताजा और पौष्टिक उत्पाद प्रदान करने के लिए प्रतिबद्ध हूँ।",
    },
    {
      id: 6,
      name: "विलियम मार्टिनेज",
      verified: true,
      image: "./assets/images/person/6.jpg",
      rating: 4.6,
      charges
    
    : 210,
      review: 1600,
      description:
        "मैं विलियम मार्टिनेज हूँ, एक अनुभवी किसान जिसका ध्यान प्रेसिजन कृषि पर है। मैं प्रौद्योगिकी का उपयोग करके फसल उत्पादकता को अनुकूलित करने और सतत कृषि प्रथाओं को सुनिश्चित करने में सहायक हूँ।",
    },
    {
      id: 7,
      name: "डेनियल थॉमस",
      verified: true,
      image: "./assets/images/person/7.jpg",
      rating: 4.4,
      charges: 195,
      review: 1350,
      description:
        "नमस्ते, मैं डेनियल थॉमस हूँ। मेरा कृषि में विविध अनुभव है, जिसमें पशु पालन और कार्बनिक कृषि का विशेषज्ञ हूँ। मैं पशु कल्याण और पर्यावरणीय टिकाऊता के प्रति प्रेम हूँ।",
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
          <BreadCrumb props={"श्रम बोर्ड"}></BreadCrumb>

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
