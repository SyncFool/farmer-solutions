import "../../assets/css/Register.css";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Navbar from "../Navbar.jsx";
import {NavLink} from "react-router-dom"
import { MdOutlineNotStarted } from "react-icons/md";
const Register = () => {
  return (
    <>
      <Header />
      <Navbar />

      <div className="login-page">
        <div className="login-container">
         
          <div className="login-right">
            <input type="text" className="input" placeholder="उपयोगकर्ता नाम" />
            <input type="email" className="input" placeholder="ईमेल" />
            <input type="password" className="input" placeholder="पासवर्ड" />
            <NavLink
              to="/login"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              {" "}
              <button className="cssbuttons-io-button">
                {" "}
                खाता खोलें <MdOutlineNotStarted className="icon" />{" "}
              </button>
            </NavLink>
          </div>
          <div className="login-left">
            <img
              src="./assets/images/transparent-logo2.png"
              alt=""
              height="90px"
            />
            {/* <p>
              "सफलता हासिल करने के लिए तैयार हैं? लॉग इन करें और आइए फार्मर
              सॉल्यूशंस के साथ मिलकर आगे बढ़ें!"
            </p> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Register;
