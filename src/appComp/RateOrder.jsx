import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Rate } from "antd";
import { AddRatings } from "./httpServices/appApis";
import Swal from "sweetalert2";
const RateOrder = () => {
  const navigate = useNavigate();
  let id = localStorage.getItem("tableId");
  let location = useLocation();
  let details = location?.state;
  const [star, setStar] = useState("");
  const [desc, setDesc] = useState("");

  const customIcons = {
    1: <img src={require("../assets/img/angry.png")} alt="" />,
    2: <img src={require("../assets/img/bad-mood.png")} alt="" />,
    3: <img src={require("../assets/img/smiling.png")} alt="" />,
    4: <img src={require("../assets/img/emoji.png")} alt="" />,
  };

  const AddRating = async () => {
    const { data } = await AddRatings({
      tableId: id,
      type: "Good",
      rating: star,
      description: desc ? desc : "Good",
    });
    if (!data.error) {
      Swal.fire({
        title: "Thanks You!",
        text: "Your Feedback will help us improving our services.",
        icon: "sucess",
        timer: 2000,
        cancelButtonText: "Okay",
      }).then((res) => {
        navigate(`/${id}`);
      });
    }
  };

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
                  Your Order Amount
                </h2>
                <strong>EGP {details?.total}</strong>
              </div>
            </div>
          </div>  
          <div className="row rating_screen_main">
            <div className="col-12 mb-5">
              <div className="rate_your_exprience">
                <h2>Rate Your Experience?</h2>

                <div className=" text-center">
                  <Rate
                    defaultValue={3}
                    character={({ index }) => customIcons[index + 1]}
                  />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="rate_user_pic">
                <img src={require("../assets/img/user.png")} alt="" />
              </div>
              <div className="rate_point">Very Good</div>
              <div className="do_rate">
                <Rate onChange={(value) => setStar(value)} />
              </div>
              <div className="review_box">
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  onChange={(e) => setDesc(e.target.value)}
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
                  AddRating();
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
