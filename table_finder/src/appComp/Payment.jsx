import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="app_main">
        <div className="payment_method comman_space overflow-hidden">
          <div className="row top_bar py-3 align-items-center">
            <div className="col-2">
              <a className="back_btn">
                <img
                  onClick={() => {
                    navigate(-1);
                  }}
                  src={require("../assets/img/back.png")}
                  alt=""
                />
              </a>
            </div>
            <div className="col text-center">
              <div className="head_comman">Payment Method</div>
            </div>
            <div className="col-2" />
          </div>
          <div className="row mx-0 py-3">
            <div className="col-12 mb-3">
              <div className="card_radio">
                <input type="radio" className="d-none" id="card1" name="card" />
                <label className="row align-items-center" htmlFor="card1">
                  <div className="col-2 text-center pe-0 card_img">
                    <img src={require("../assets/img/visa.png")} alt="" />
                  </div>
                  <div className="col card_name">Visa Card</div>
                  <div className="col-3"></div>
                </label>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="card_radio">
                <input
                  type="radio"
                  defaultChecked=""
                  className="d-none"
                  id="card2"
                  name="card"
                />
                <label className="row align-items-center" htmlFor="card2">
                  <div className="col-2 text-center pe-0 card_img">
                    <img src={require("../assets/img/paypal.png")} alt="" />
                  </div>
                  <div className="col card_name">Paypal</div>
                  <div className="col-3"></div>
                </label>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="card_radio">
                <input type="radio" className="d-none" id="card3" name="card" />
                <label className="row align-items-center" htmlFor="card3">
                  <div className="col-2 text-center pe-0 card_img">
                    <img src={require("../assets/img/google_pay.png")} alt="" />
                  </div>
                  <div className="col card_name">Google Pay</div>
                  <div className="col-3"></div>
                </label>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="card_radio">
                <input type="radio" className="d-none" id="card6" name="card" />
                <label className="row align-items-center" htmlFor="card6">
                  <div className="col-2 text-center pe-0 card_img">
                    <img src={require("../assets/img/apple.png")} alt="" />
                  </div>
                  <div className="col card_name">Apple</div>
                  <div className="col-3"></div>
                </label>
              </div>
            </div>

            <div className="col-12 mt-3">
              <a
                className="comann_small text-decoration-none"
                onClick={() => {
                  navigate("/app/home/payment-method/Add-card");
                }}>
                Add Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
