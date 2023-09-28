import React from "react";
import { useNavigate } from "react-router-dom";

const RateOrder = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="app_main">
        <div className="rating_screen comman_space overflow-hidden">
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
              <div className="head_comman">Rating</div>
            </div>
            <div className="col-2" />
          </div>
          <div className="row rating_screen_inner">
            <div className="col-12">
              <div className="rating_top">
                <h2>
                  <img src="assets/img/money.png" alt="" />
                  Your Payable Amount
                </h2>
                <strong>EGP 25.35</strong>
              </div>
            </div>
          </div>
          <div className="row rating_screen_main">
            <div className="col-12 mb-5">
              <div className="rate_your_exprience">
                <h2>Rate Your Experience?</h2>
                <div className="ratewith_smile">
                  <a>
                    <img src={require("../assets/img/angry.png")} alt="" />
                    Angry
                  </a>
                  <a>
                    <img src={require("../assets/img/bad-mood.png")} alt="" />
                    Bad
                  </a>
                  <a>
                    <img src={require("../assets/img/smiling.png")} alt="" />
                    Good
                  </a>
                  <a className="active">
                    <img src={require("../assets/img/emoji.png")} alt="" />
                    Excellent
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="rate_user_pic">
                <img src={require("../assets/img/user.png")} alt="" />
              </div>
              <div className="rate_point">Very Good</div>
              <div className="do_rate">
                <a>
                  <i className="fa fa-star" />
                </a>
                <a>
                  <i className="fa-solid fa-star" />
                </a>
                <a>
                  <i className="fa-solid fa-star" />
                </a>
                <a>
                  <i className="fa-solid fa-star" />
                </a>
                <a>
                  <i className="fa-light fa-star" />
                </a>
              </div>
              <div className="review_box">
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  defaultValue={"Say something about your experiance"}
                />
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <a
                className="comman_btn w-100 text-decoration-none"
                onClick={() => {
                  navigate("/app/home");
                }}>
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateOrder;
