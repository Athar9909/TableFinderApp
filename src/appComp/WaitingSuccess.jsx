import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JoinWaiting } from "./httpServices/appApis";
import Swal from "sweetalert2";
import classNames from "classnames";

const WaitingSuccess = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="app_main">
        <div className="addcard comman_space overflow-hidden">
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
              <div className="head_comman">Waitlist</div>
            </div>
            <div className="col-2" />
          </div>
          <div className="row orderconfirmed_main">
            <div className="col-12 pt-4 animate_part">
              <a id="play-video" className="video-play-button">
                <i className="fa-solid fa-check" />
              </a>
            </div>
            <div className="col-12 orderconfirmed_content text-center py-4">
              <h2>You are in WaitList</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingSuccess;
