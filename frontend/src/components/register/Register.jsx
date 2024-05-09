import "../../assets/css/Register.css";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Navbar from "../Navbar.jsx";
import { NavLink } from "react-router-dom";
import { MdOutlineNotStarted } from "react-icons/md";
import { useState } from "react";
const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit=async ()=>{
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await fetch("http://127.0.0.1:3000/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="login-page">
          <div className="login-container">
            <div className="login-right">
              <input
                type="text"
                className="input"
                placeholder="उपयोगकर्ता नाम"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                type="email"
                className="input"
                placeholder="ईमेल"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                className="input"
                placeholder="पासवर्ड"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />{" "}
              <button type="submit" className="cssbuttons-io-button">
                {" "}
                खाता खोलें <MdOutlineNotStarted className="icon" />{" "}
              </button>
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
      </form>
      <Footer />
    </>
  );
};
export default Register;
