import React from "react";
import {
  NavLink,
  BrowserRouter,
  Route,
  Routes,
  Router,
} from "react-router-dom";
import AuthProvider from 'react-auth-kit';

import ReactDOM from "react-dom/client";
import Login from "./components/pages/Login.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import AboutC1 from "./components/about/About-C1.jsx";
import Contact from "./components/contact/Contact.jsx";
import Home from "./components/pages/Home.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";
import Dashboard from "./components/dasboard/Dashboard.jsx";
import Wallet from "./components/wallet/Wallet.jsx";
import Deposit from "./components/wallet/Deposit.jsx";
import AddMoney from "./components/wallet/AddMoney.jsx";
import AboutUs from "./components/pages/About.jsx";

import CropManagement from "./components/crop-management/Crop.jsx";
import AddNewCrop from "./components/crop-management/AddNewCrop.jsx";

import HireDashboard from "./components/hire-board/HireDashboard.jsx";
import Purchase from "./components/purchase/Purchase.jsx";
import Transport from "./components/transport/Transport.jsx";
import Complain from "./components/complain/Complain.jsx";
import Setting from "./components/settings/Setting.jsx";
import Services from "./components/services/Services-C1.jsx";
import Withdrawal from "./components/wallet/Withdrawal.jsx";
import PaymentSection from "./components/wallet/Payment.jsx";
import Register from "./components/register/Register.jsx";
import TransactionHistory from "./components/wallet/Transactions.jsx";
// import './index.css'
import createStore from 'react-auth-kit/createStore';

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false
 })



ReactDOM.createRoot(document.getElementById("root")).render(

  <>
    <AuthProvider store={store} >
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/user-panel" element={<Dashboard />} />
          <Route exact path="/wallet" element={<Wallet />} />

          <Route exact path="/crop-management" element={<CropManagement />} />
          <Route exact path="/hire-board" element={<HireDashboard />} />
          <Route exact path="/purchase" element={<Purchase />} />
          <Route exact path="/book-transport" element={<Transport />} />
          <Route exact path="/complaint" element={<Complain />} />
          <Route exact path="/setting" element={<Setting />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/add-new-crop" element={<AddNewCrop />} />
          <Route exact path="/deposit" element={<Deposit />} />
          <Route exact path="/add-money" element={<AddMoney />} />
          <Route exact path="/withdrawal" element={<Withdrawal />} />
          <Route exact path="/payment" element={<PaymentSection />} />
          <Route exact path="/transactions" element={<TransactionHistory />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>
  
);
