import React, { useState } from "react";
import "../../assets/css/Wallet.css";
import Sidebar from "../sidebar/Sidebar";
import BreadCrumb from "../BreadCrumb";
import TopBar from "../TopBar";
import DFooter from "../DFooter";
import WithdrawalChart from "./WithdrawalChart";
import { Link } from "react-router-dom";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Payment', amount: 100, date: '2024-04-25' },
    { id: 2, type: 'Deposit', amount: 200, date: '2024-04-20' },
    { id: 3, type: 'Withdrawal', amount: 50, date: '2024-04-15' },
  ]);

  return (
    <>
      <Sidebar />
      <div className="fullbox">
        <div className="right-area">
          <TopBar />
          <BreadCrumb props={"खाता विवरण"} />

          <div className="table-responsive">
            <h2>Transaction History</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <DFooter />
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
