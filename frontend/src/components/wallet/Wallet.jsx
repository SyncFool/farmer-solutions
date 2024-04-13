import React from "react"; // Import React
import "../../assets/css/Wallet.css"; // Import CSS file
import Sidebar from "../sidebar/Sidebar";
import BreadCrumb from "../BreadCrumb";
import TopBar from "../TopBar";
import DFooter from "../DFooter";
import WithdrawalChart from "./WithdrawalChart";

export default function Wallet() {
  // Correct the function syntax
  return (
    <>
      <Sidebar />
      <div className="fullbox">
        <div className="right-area">
          {/* TopBar */}
          <TopBar />
          {/* Top Bar Close  */}
          {/* BreadCrumb */}
          <BreadCrumb props={"Wallet"} />
          {/* Bread Crumb Close  */}

          {/* Options */}
          <div className="cards-wallet card">
            <div className="card wallet-item col-3">
              <img src="./assets/images/deposit.png" alt="" />
              <p>Deposit</p>
            </div>
            <div className="card wallet-item col-3">
              {" "}
              <img src="./assets/images/withdrawal.png" alt="" />
              <p>Withdrawal</p>
            </div>
            <div className="card wallet-item col-3">
              {" "}
              <img src="./assets/images/payment.png" alt="" />
              <p>Payment</p>
            </div>
            <div className="card wallet-item col-3">
              {" "}
              <img src="./assets/images/transactions.png" alt="" />
              <p>Transactions</p>
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
                <p>Recent Transactions</p>
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
                    placeholder="Search by Id"
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
                    placeholder="Search by Status"
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
                    <th scope="col">Transaction Id</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date & Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>UTR001235456</td>
                    <td>Rs 200</td>
                    <td>Success</td>
                    <td>24 Apr 2024</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>UTR001235456</td>
                    <td>Rs 200</td>
                    <td>Success</td>
                    <td>24 Apr 2024</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>UTR001235456</td>
                    <td>Rs 200</td>
                    <td>Success</td>
                    <td>24 Apr 2024</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>UTR001235456</td>
                    <td>Rs 200</td>
                    <td>Success</td>
                    <td>24 Apr 2024</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>UTR001235456</td>
                    <td>Rs 200</td>
                    <td>Success</td>
                    <td>24 Apr 2024</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>UTR001235456</td>
                    <td>Rs 200</td>
                    <td>Success</td>
                    <td>24 Apr 2024</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>UTR001235456</td>
                    <td>Rs 200</td>
                    <td>Success</td>
                    <td>24 Apr 2024</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>UTR001235456</td>
                    <td>Rs 200</td>
                    <td>Success</td>
                    <td>24 Apr 2024</td>
                  </tr>
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
