import TopBar from "../TopBar.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import DFooter from "../DFooter.jsx";
import BreadCrumb from "../BreadCrumb.jsx";

export default function AddNewCrop() {
  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
          <TopBar />
          {/* Bread Crum */}
          <BreadCrumb props={"नई फसल जोड़ें"}></BreadCrumb>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div classNameName="crop-details-area-edit-add card">
              <div className="card" style={{ width: "30rem" }}>
                <div
                  className="m-auto  d-flex flex-column p-3 "
                  style={{ width: "90%", height: "7rem" }}
                >
                  <label for="formFile" className="form-label">
                    फसल तस्वीर अपलोड करें
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        फसल का नाम
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </h5>
                  <p className="card-text">
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        फसल विवरण
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">
                        उत्पादित फसल
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="टन में"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </li>
                  <li className="list-group-item"><div className="input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">
                      कीमत
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="प्रति टन "
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div></li>
                  <li className="list-group-item"><div className="input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">
                      स्टॉक में
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="टन में"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div></li>
                </ul>
                <div className="card-body d-flex justify-content-center ">
                 <button className="btn btn-outline-success rounded-pill">जमा करें</button>
                </div>
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
