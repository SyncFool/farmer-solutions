import "../../assets/css/Sidebar.css";
import { IoReorderFourOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      {/* <div classNameName="sidebar-container">
        <div classNameName="brand-logo-img">
          <img src="./assets/images/logo2.png" width="70%" alt="" />
          <div classNameName="sidebar-icon">
            <IoReorderFourOutline />
          </div>
        </div>
        <div classNameName="item-component-top">
          <div classNameName="item-component">
            <div classNameName="item-icon">
              <FaHome />
            </div>
            <div classNameName="item-title">Dashboard</div>
            <div classNameName="item-arrow">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div classNameName="item-component-top">
          <div classNameName="item-component">
            <div classNameName="item-icon">
              <FaHome />
            </div>
            <div classNameName="item-title">Crop Management</div>
            <div classNameName="item-arrow">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div classNameName="item-component-top">
          <div classNameName="item-component">
            <div classNameName="item-icon">
              <FaHome />
            </div>
            <div classNameName="item-title">Hire Board</div>
            <div classNameName="item-arrow">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div> */}
      {/* <button classNameName="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  Toggle static offcanvas
</button>

<div classNameName="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div classNameName="offcanvas-header">
    <h5 classNameName="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div classNameName="offcanvas-body">
    <div>
      I will not close if you click outside of me.
    </div>
  </div>
</div> */}


<div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <svg className="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </>
  );
};

export default Sidebar;
