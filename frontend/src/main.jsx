import React from "react";
import {
  NavLink,
  BrowserRouter,
  Route,
  Routes,
  Router,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Login from "./components/pages/Login.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import AboutC1 from "./components/about/About-C1.jsx";
import Contact from "./components/contact/Contact.jsx";
import Home from "./components/pages/Home.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";
import Dashboard from "./components/dasboard/Dashboard.jsx";
import Wallet from "./components/wallet/Wallet.jsx";
import CropManagement from "./components/crop-management/Crop.jsx";
// import './index.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/services" element={<Home />} />
    <Route exact path="/contact-us" element={<ContactUs />} />
      <Route exact path="/user-panel" element={<Dashboard />} />
      <Route exact path="/wallet" element={<Wallet />} />
      <Route exact path="/transactions" element={<Sidebar />} />
      <Route exact path="/crop-management" element={<CropManagement />} />
      <Route exact path="/hire-board" element={<Sidebar />} />
      <Route exact path="/purchase-seed" element={<Sidebar />} />
      <Route exact path="/book-transport" element={<Sidebar />} />
      <Route exact path="/complaint" element={<Sidebar />} />
      <Route exact path="/setting" element={<Sidebar />} />
      
    </Routes>
  </BrowserRouter>;
  </>
);
