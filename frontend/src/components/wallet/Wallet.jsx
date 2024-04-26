import React, { useState } from "react"; // Import React
import "../../assets/css/Wallet.css"; // Import CSS file
import Sidebar from "../sidebar/Sidebar";
import BreadCrumb from "../BreadCrumb";
import TopBar from "../TopBar";
import DFooter from "../DFooter";
import WithdrawalChart from "./WithdrawalChart";
import { Link } from "react-router-dom";

export default function Wallet() {
  const RecentTransactionsComponent = ({ props }) => {
    const RecentTransactions = ({ props }) => {
      return (
        <>
          <tr>
            <th scope="row">{props.id}</th>
            <td>{props.trnxId}</td>
            <td>Rs {props.amount}</td>
            {props.status ? (
              <td style={{ color: "#185016" }}>Success</td>
            ) : (
              <td style={{ color: "#dc3545" }}>Failed</td>
            )}
            <td>{props.date}</td>
          </tr>
        </>
      );
    };
    return (
      <>
        {recentTransactionData.map((item) => {
          return <RecentTransactions props={item} key={item.id} />;
        })}
      </>
    );
  };

  const [recentTransactionData, SetRecentTransactionData] = useState([
    {
      id: 1,
      trnxId: "UTR001235456",
      amount: 500,
      status: true,
      date: "10 Apr 2024",
    },
    {
      id: 2,
      trnxId: "UTR001235457",
      amount: 600,
      status: false,
      date: "15 Apr 2024",
    },
    {
      id: 3,
      trnxId: "UTR001235458",
      amount: 700,
      status: true,
      date: "20 Apr 2024",
    },
    {
      id: 4,
      trnxId: "UTR001235459",
      amount: 800,
      status: true,
      date: "5 Apr 2024",
    },
    {
      id: 5,
      trnxId: "UTR001235460",
      amount: 900,
      status: false,
      date: "8 Apr 2024",
    },
    {
      id: 6,
      trnxId: "UTR001235461",
      amount: 1000,
      status: true,
      date: "12 Apr 2024",
    },
    {
      id: 7,
      trnxId: "UTR001235462",
      amount: 1100,
      status: false,
      date: "25 Apr 2024",
    },
    {
      id: 8,
      trnxId: "UTR001235463",
      amount: 1200,
      status: true,
      date: "18 Apr 2024",
    },
    {
      id: 9,
      trnxId: "UTR001235464",
      amount: 1300,
      status: false,
      date: "22 Apr 2024",
    },
    {
      id: 10,
      trnxId: "UTR001235465",
      amount: 1400,
      status: true,
      date: "27 Apr 2024",
    },
    {
      id: 11,
      trnxId: "UTR001235466",
      amount: 1500,
      status: false,
      date: "3 Apr 2024",
    },
    {
      id: 12,
      trnxId: "UTR001235467",
      amount: 1600,
      status: true,
      date: "6 Apr 2024",
    },
    {
      id: 13,
      trnxId: "UTR001235468",
      amount: 1700,
      status: false,
      date: "11 Apr 2024",
    },
    {
      id: 14,
      trnxId: "UTR001235469",
      amount: 1800,
      status: true,
      date: "14 Apr 2024",
    },
    {
      id: 15,
      trnxId: "UTR001235470",
      amount: 1900,
      status: false,
      date: "17 Apr 2024",
    },
    {
      id: 16,
      trnxId: "UTR001235471",
      amount: 2000,
      status: true,
      date: "21 Apr 2024",
    },
    {
      id: 17,
      trnxId: "UTR001235472",
      amount: 2100,
      status: false,
      date: "24 Apr 2024",
    },
    {
      id: 18,
      trnxId: "UTR001235473",
      amount: 2200,
      status: true,
      date: "28 Apr 2024",
    },
    {
      id: 19,
      trnxId: "UTR001235474",
      amount: 2300,
      status: false,
      date: "1 Apr 2024",
    },
    {
      id: 20,
      trnxId: "UTR001235475",
      amount: 2400,
      status: true,
      date: "4 Apr 2024",
    },
  ]);

  return (
    <>
      <Sidebar />
      <div className="fullbox">
        <div className="right-area">
          {/* TopBar */}
          <TopBar />
          {/* Top Bar Close  */}
          {/* BreadCrumb */}
          <BreadCrumb props={"खाता विवरण"} />
          {/* Bread Crumb Close  */}

          {/* Options */}
          <div className="cards-wallet card">
            <Link style={{ textDecoration: "none" }} to="/deposit">
              <div className="card wallet-item col-3">
                <img src="./assets/images/deposit.png" alt="" />

                <p>पैसा जमा करें</p>
              </div>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/withdrawal">
              <div className="card wallet-item col-3">
                {" "}
                <img src="./assets/images/withdrawal.png" alt="" />
                <p>पैसे की निकासी</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/payment">
            <div className="card wallet-item col-3">
              {" "}
              <img src="./assets/images/payment.png" alt="" />
              <p>भुगतान करो</p>
            </div>
            </Link>
            <div className="card wallet-item col-3">
              {" "}
              <img src="./assets/images/transactions.png" alt="" />
              <p>लेन-देन की जाँच</p>
            </div>
          </div>

          {/* Chart */}
          <div className="section-deposit-history">
            <div className="transaction-chart col-6">
              <WithdrawalChart></WithdrawalChart>
            </div>

            {/* Chart Close */}

            {/* Recent Transactions */}
            <div className="recent-tansactions col-6">
              <div className="rheader">
                <p>हाल ही के लेनदेन</p>
              </div>
              <div className="rsearch">
                <div className="input-group mb-3">
                  <div className="input-group-text">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="आईडी के आधार पर खोजें"
                    className="form-control"
                    aria-label="Text input with checkbox"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-text">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="स्थिति के आधार पर खोजें"
                    className="form-control"
                    aria-label="Text input with checkbox"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-text">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                  <input
                    type="date"
                    className="form-control"
                    aria-label="Text input with checkbox"
                  />
                </div>
                {/* <button className="btn btn-primary">Search</button> */}
              </div>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">लेनदेन आईडी</th>
                    <th scope="col">राशि</th>
                    <th scope="col">स्थिति</th>
                    <th scope="col">दिनांक समय</th>
                  </tr>
                </thead>
                <tbody>
                  <RecentTransactionsComponent props={recentTransactionData} />
                </tbody>
              </table>
            </div>
          </div>
          {/* Recent Transactions Close */}
          {/* Options Close */}
          {/* Footer */}
          <DFooter />
          {/* Footer Close */}
        </div>
      </div>
    </>
  );
}
