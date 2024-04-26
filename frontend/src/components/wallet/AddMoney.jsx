import { Link } from "react-router-dom";
import "../../assets/css/AddMoney.css";
export default function AddMoney() {
  return (
    <>
      <div className="payment-form-add-money">
        <div className="card-add-money-payment">
          <div className="payment-title-add-money">
            भुगतान करने के लिए क्यूआर कोड को स्कैन करें
          </div>
          <div className="qr-code-add-money">
            <img src="/assets/images/payment/Pay1.png" alt="" />
          </div>
          <div className="details-add-money">
            <p>
              {" "}
              चरण 1 :
              <br />
              QR कोड स्कैन करें या UPI आईडी कॉपी करें
            </p>
          </div>
          <span className="card p-2
          ">vivekmtr@paytm</span>
          <div className="details-add-money">
            <p>
              {" "}
              चरण 2 :
              <br />
              भुगतान के बाद रेफरेंस आईडी दर्ज करें
            </p>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">रेफरेंस आईडी</span>
            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
          
        
          <div className="d-flex justify-content-center mt-5">
          <Link to="/deposit" style={{textDecoration:'none'}}>
            <button className="btn btn-success rounded-pill w-100">जमा करें</button>
            </Link>
          </div>
        
        </div>
      </div>
    </>
  );
}
