import { Carousel } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="onboarding_pages">
        <div className="onboarding_left">
          <a className="logo_top" href="javascript:;">
            <img src={require("../../assets/img/loggo.png")} alt="" />
          </a>
          <div className="onboarding_slider owl-carousel">
            <Carousel autoplay>
              <div className="onboarding_slider_box text-center">
                <img src={require("../../assets/img/take_away.png")} alt="" />
                <h3>Takeaway</h3>
                <p className="mb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's .
                </p>
              </div>
              <div className="onboarding_slider_box text-center">
                <img src={require("../../assets/img/take_away.png")} alt="" />
                <h3>Takeaway</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's .
                </p>
              </div>
              <div className="onboarding_slider_box text-center">
                <img src={require("../../assets/img/take_away.png")} alt="" />
                <h3>Takeaway</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's .
                </p>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="onboarding_right">
          <div className="w-100">
            <div className="onboarding_heading">
              <h2>Welcome Back,</h2>
              <p>Please login to your account</p>
            </div>
            <form className="comman_form row" action="#">
              <div className="col-12 form-group position-relative">
                <label className="set_label" htmlFor="">
                  Phone Number
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="col-12 form-group position-relative mb-2">
                <label className="set_label" htmlFor="">
                  Password
                </label>
                <input type="text" className="form-control" placeholder="" />
                <img
                  className="show_pass"
                  src="assets/img/show_pass.png"
                  alt=""
                />
              </div>
              <div className="col-12 form-group text-end">
                <a
                  className="forgot_pass"
                  onClick={() => {
                    navigate("/admin/login/forgot-Password");
                  }}>
                  Forgot Password?
                </a>
              </div>
              <div className="col-12 form-group mt-4">
                <a className="comman_btn" href="dashboard.html">
                  Sign in
                </a>
              </div>
              <div className="col-12 form-group mt-4">
                <div className="register_now">
                  Don’t have an account yet? <a>Register Now</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
