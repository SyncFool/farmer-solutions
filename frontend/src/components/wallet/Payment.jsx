import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../assets/css/Payment.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import TopBar from "../TopBar.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import DFooter from "../DFooter.jsx";
import BreadCrumb from "../BreadCrumb.jsx";


const PaymentSection = () => {
  // State variables to store form data
  const [receiverName, setReceiverName] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  // Function to handle form submission
  const handlePayment = (e) => {
    e.preventDefault();
    // Perform payment logic here
    console.log('भुगतान सबमिट किया गया:', {
      receiverName,
      amount,
      paymentMethod,
    });
    // You can add your payment logic here
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
      <BreadCrumb props={"भुगतान सेक्शन"}></BreadCrumb>
    <div className="payment-container">
      <div className="payment-form">
        <h2 className="text-center">भुगतान सेक्शन</h2>
        <Form onSubmit={handlePayment}>
          <Form.Group className="mb-3" controlId="receiverName">
            <Form.Label>प्राप्तकर्ता का नाम</Form.Label>
            <Form.Control
              type="text"
              placeholder="प्राप्तकर्ता का नाम दर्ज करें"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>राशि</Form.Label>
            <Form.Control
              type="text"
              placeholder="राशि दर्ज करें"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="paymentMethod">
            <Form.Label>भुगतान विधि</Form.Label>
            <Form.Control
              as="select"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">भुगतान विधि चुनें</option>
              <option value="wallet">वॉलेट</option>
              <option value="bank">बैंक खाता</option>
            </Form.Control>
          </Form.Group>
          <Link to="/wallet">
            <Button variant="outline-success" className='w-100 rounded-pill' type="submit">
              भुगतान करें
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

export default PaymentSection;
