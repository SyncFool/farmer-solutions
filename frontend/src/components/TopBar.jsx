import "../assets/css/TopBar.css"
import { FaEnvelope } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
export default function TopBar(){
    return(
        <>
         <div className="top-bar">
            <div className="icons">
              <FaEnvelope className="icon-header" />
            </div>
            <div style={{ marginRight: "50px" }} className="icons">
              <IoMdNotifications className="icon-header" />
            </div>
          </div>
        </>
    )
}