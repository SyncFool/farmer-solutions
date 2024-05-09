import { useState } from "react";
import "../../assets/css/Login.css";
import { MdOutlineNotStarted } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const Login = () => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch("http://127.0.0.1:3000/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        setError("अमान्य उपयोगकर्ता नाम या पासवर्ड");
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (signIn({ auth: { token: data.token, type: "Bearer" } })) {
        navigate("/user-panel");
      } else {
        setError("अमान्य उपयोगकर्ता नाम या पासवर्ड");
      }
    } catch (error) {
      setError("अमान्य उपयोगकर्ता नाम या पासवर्ड");
    }
  };

  return (
    <>
    {error && (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>{error} </strong> | कृपया पुन: प्रयास करें!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          )}
      <form onSubmit={handleSubmit}>
        <div className="login-page">
          
          <div className="login-container">
            <div className="login-left">
              <img src="./assets/images/transparent-logo2.png" alt="" height="90px" />
              <p>"सफलता हासिल करने के लिए तैयार हैं? लॉग इन करें और आइए फार्मर सॉल्यूशंस के साथ मिलकर आगे बढ़ें!"</p>
            </div>
            <div className="login-right">
              <input
                type="text"
                className="input"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="उपयोगकर्ता नाम"
              />
              <input
                type="password"
                className="input"
                placeholder="पासवर्ड"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="cssbuttons-io-button">
                {" "}
                लॉग इन करें <MdOutlineNotStarted className="icon" />{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
