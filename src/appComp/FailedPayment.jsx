import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FailedPayment = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let details = location?.state;
  let tableId = localStorage.getItem("tableId");
  console.log(details);
  return (
    <div>
      <div className="app_main">
        <div className="orderconfirmed comman_space overflow-hidden">
          <div className="row top_bar py-3 align-items-center">
            <div className="col-2">
              <a className="back_btn">
                <img
                  onClick={() => {
                    navigate(`/${tableId}`);
                  }}
                  src={require("../assets/img/back.png")}
                  alt=""
                />
              </a>
            </div>
            <div className="col text-center">
              <div className="head_comman">Payment Failed</div>
            </div>
            <div className="col-2" />
          </div>
          <div className="row orderconfirmed_main">
            <div className="col-12 pt-4 animate_part">
              <a id="play-video" className="video-play-button">
                <i class="fa-solid fa-circle-exclamation fa-3x"></i>
              </a>
            </div>
            <div className="col-12 orderconfirmed_content text-center py-4">
              <h2>Your Transaction Has Been Failed!</h2>
              <p>Please Try Again</p>
            </div>

            <div className="col-12 mb-3 rate_theorder">
              <a
                className="comman_btn w-100 text-decoration-none"
                onClick={() => {
                  navigate("/app/home/cart");
                }}>
                Go to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailedPayment;
