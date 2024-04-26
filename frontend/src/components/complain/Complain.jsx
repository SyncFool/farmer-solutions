import TopBar from "../TopBar.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import DFooter from "../DFooter.jsx";
import BreadCrumb from "../BreadCrumb.jsx";
import "../../assets/css/Complain.css";

export default function Complain() {
  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
          <TopBar />
          {/* Bread Crum */}
          <BreadCrumb props={"शिकायत एवं सुझाव"}></BreadCrumb>

          {/* Complain and suggestion area */}
          <div className="complain-suggestion-area">
            <div className="left-complain-suggestion card px-4 py-4 col-6">
              <select
                class="form-select mx-2 "
                style={{ margin: "auto", width: "36.8vw" }}
              >
                <option selected className="">
                  शिकायत
                </option>
                <option value="2">सुझाव</option>
              </select>
              <div class="mb-3 mt-3 mx-2">
                <label for="mobile-number" class="form-label">
                  मोबाइल नंबर
                </label>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    id="mobile-number"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
              </div>
              <div class="mb-3 mt-2 mx-2">
                <label for="email" class="form-label">
                  ईमेल
                </label>
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
              </div>
              <div class="mb-3 mt-2 mx-2">
                <label for="suggestions" class="form-label">
                  सुझाव/ शिकायत
                </label>
                <div class="input-group" style={{ height: "25vh" }}>
                  <textarea
                    style={{ height: "25vh" }}
                    type="text"
                    class="form-control h-10"
                    id="suggestions"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
              </div>

              <button
                className="btn btn-outline-primary"
                style={{ width: "37vw", margin: "auto" }}
              >
                {" "}
                जमा करना
              </button>
            </div>
            <div className="right-complain-suggestion col-6">
              <p className="text-center complaint-suggestions-punchline">
              आपकी आलोचना हमारी प्रेरणा है,  <br /> और आपके सुझाव हमारे विकास का मार्गदर्शन करते हैं।
              </p>
              <img
                src="./assets/images/Complain.png"
                alt=""
                style={{ width: "38vw" }}
              />
            </div>
          </div>

          {/* footer Area */}
          <DFooter></DFooter>
        </div>
      </div>
    </>
  );
}
