import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../assets/css/Withdrawal.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import TopBar from "../TopBar.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import DFooter from "../DFooter.jsx";
import BreadCrumb from "../BreadCrumb.jsx";


const WithdrawalSection = () => {
  // State variables to store form data
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [phonePeNumber, setPhonePeNumber] = useState('');

  // Function to handle form submission
  const handleWithdrawal = (e) => {
    e.preventDefault();
    // Perform withdrawal logic here
    console.log('निकास सबमिट किया गया:', {
      accountHolderName,
      accountNumber,
      ifscCode,
      phonePeNumber,
    });
    // You can add your withdrawal logic here
  };

  return (
    <>
    <div className="full-box">
    <Sidebar />
    {/* Right Area Opened */}
    <div className="right-area">
      {/* Header */}
      <TopBar />
      {/* Bread Crum */}
      <BreadCrumb props={"निकास सेक्शन"}></BreadCrumb>
    <div className="withdrawal-container">
      <div className="withdrawal-form">
        <h2 className="text-center">निकास सेक्शन</h2>
        <Form onSubmit={handleWithdrawal}>
          <Form.Group className="mb-3" controlId="accountHolderName">
            <Form.Label>खाता धारक का नाम</Form.Label>
            <Form.Control
              type="text"
              placeholder="खाता धारक का नाम दर्ज करें"
              value={accountHolderName}
              onChange={(e) => setAccountHolderName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="accountNumber">
            <Form.Label>खाता नंबर</Form.Label>
            <Form.Control
              type="text"
              placeholder="खाता नंबर दर्ज करें"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ifscCode">
            <Form.Label>IFSC कोड</Form.Label>
            <Form.Control
              type="text"
              placeholder="IFSC कोड दर्ज करें"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phonePeNumber">
            <Form.Label>फोनपे नंबर</Form.Label>
            <Form.Control
              type="text"
              placeholder="फोनपे नंबर दर्ज करें"
              value={phonePeNumber}
              onChange={(e) => setPhonePeNumber(e.target.value)}
            />
          </Form.Group>
          <Link  to="/wallet">
          <Button variant="outline-success" className='w-100 rounded-pill' type="submit">
            निकास
          </Button>
          </Link>
        </Form>
      </div>
    </div>
     {/* footer Area */}
     <DFooter></DFooter>
        </div>
      </div>
    </>
  );
};

export default WithdrawalSection;
