import "../../assets/css/Setting.css";
import TopBar from "../TopBar";
import DFooter from "../DFooter";
import BreadCrumb from "../BreadCrumb";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function Setting() {
  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
          <TopBar />
          {/* Bread Crum */}
          <BreadCrumb props={"सेटिंग"}></BreadCrumb>
          <form>
            <div className="form-data-setting">
              <div className="mb-3 mx-3 col-3">
                <label for="nameInput" className="form-label">
                  नाम
                </label>
                <input type="text" className="form-control" id="nameInput" />
              </div>
              <div className="mb-3 mx-3 col-3">
                <label for="nameInput" className="form-label">
                लिंग
                </label>
                <input type="text" className="form-control" id="nameInput" />
              </div>
              <div className="mb-3 mx-3 col-3">
                <label for="nameInput" className="form-label">
                पिता का नाम
                </label>
                <input type="text" className="form-control" id="nameInput" />
              </div>
              <div className="mb-3 mx-3 col-3">
                <label for="nameInput" className="form-label">
                जन्म की तारीख 
                </label>
                <input type="date" className="form-control" id="nameInput" />
              </div>


              <div className="mb-3 mx-3 col-3">
                <label for="nameInput" className="form-label">
                फ़ोन नंबर
                </label>
                <input type="number" className="form-control" id="nameInput" />
              </div>
              <div className="mb-3 mx-3 col-3">
                <label for="nameInput" className="form-label">
                ईमेल
                </label>
                <input type="email" className="form-control" id="nameInput" />
              </div>
              <div className="mb-3 mx-3 col-3">
                <label for="nameInput" className="form-label">
                पासवर्ड
                </label>
                <input type="password" className="form-control" id="nameInput" />
              </div>

              <div className="mb-3 mx-3 col-3">
                <label for="nameInput" className="form-label">
                बैंक खाता संख्या
                </label>
                <input type="text" className="form-control" id="nameInput" />
              </div>

              <div className="mb-3 mx-3 col-3">
                <label for="nameInput" className="form-label">
                आईएफएससी कोड
                </label>
                <input type="text" className="form-control" id="nameInput" />
              </div>

              <div className="mb-3 mx-3 col-3">
                <label for="nameInput" className="form-label">
                पता
                </label>
                <textarea type="text" className="form-control" id="nameInput" />
              </div>

              


            </div>

            <button type="submit" className="btn btn-primary mx-3 center">
              Submit
            </button>
          </form>
          <DFooter></DFooter>
        </div>
      </div>
    </>
  );
}
