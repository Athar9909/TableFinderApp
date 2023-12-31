import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Rate } from "antd";
import { AddRatings } from "./httpServices/appApis";
import Swal from "sweetalert2";
import smile from "../assets/img/smile2.svg";
import smile2 from "../assets/img/smile3.svg";
import happy from "../assets/img/emoj1.svg";
import unHappy from "../assets/img/unHappy.svg";
import { t } from "i18next";

const RateOrder = () => {
  const navigate = useNavigate();
  let id = localStorage.getItem("tableId");
  let location = useLocation();
  let details = location?.state;
  const [star, setStar] = useState("");
  const [desc, setDesc] = useState("");

  const [currentLangCode, setCurrentLangCode] = useState(
    localStorage.getItem("i18nextApp") || "en"
  );

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
              <div className="head_comman">{t("rating")}</div>
            </div>
            <div className="col-2" />
          </div>
          <div className="row rating_screen_inner">
            <div className="col-12">
              <div className="rating_top">
                <h2>
                  <img src="assets/img/money.png" alt="" />
                  {t("Order")} {t("Amount")}
                </h2>
                <strong>EGP {details?.total}</strong>
              </div>
            </div>
          </div>
          <div className="row rating_screen_main">
            <div className="col-12 mb-5">
              <div className="rate_your_exprience">
                <h2>{t("RYE")}</h2>

                <div className=" text-center">
                  {star === 1 ? (
                    <img width={40} src={unHappy} alt="" />
                  ) : (
                    <img
                      className="reactionsIcon mx-1"
                      width={45}
                      src={unHappy}
                      alt=""
                    />
                  )}
                  {star === 2 ? (
                    <img width={40} src={happy} alt="" />
                  ) : (
                    <img
                      className="reactionsIcon mx-1"
                      width={45}
                      src={happy}
                      alt=""
                    />
                  )}
                  {star === 3 ? (
                    <img width={40} src={smile2} alt="" />
                  ) : (
                    <img
                      className="reactionsIcon mx-1"
                      width={45}
                      src={smile2}
                      alt=""
                    />
                  )}
                  {star === 4 || star === 5 ? (
                    <img width={40} src={smile} alt="" />
                  ) : (
                    <img
                      className="reactionsIcon mx-1"
                      width={45}
                      src={smile}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="rate_user_pic">
                <img src={require("../assets/img/user.png")} alt="" />
              </div>

              <div className=" text-center">
                {(star === 1 && <div className="rate_point">{t("Bad")}</div>) ||
                  (star === 2 && (
                    <div className="rate_point">{t("Average")}</div>
                  )) ||
                  (star === 3 && (
                    <div className="rate_point">{t("Good")}</div>
                  )) ||
                  (star === 4 && (
                    <div className="rate_point">{t("Great")}</div>
                  )) ||
                  (star === 5 && (
                    <div className="rate_point">{t("Awesome")}</div>
                  ))}
              </div>

              <div className="do_rate">
                <Rate onChange={(value) => setStar(value)} />
              </div>
              {console.log(star)}
              <div className="">
                <textarea
                  className="form-control bg-white"
                  name=""
                  id=""
                  onChange={(e) => setDesc(e.target.value)}
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
                {t("submit")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateOrder;
