import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckoutItems } from "./httpServices/appApis";
import Swal from "sweetalert2";
import { t } from "i18next";

const OrderConfirmed = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const [details, setDetails] = useState();
  const [currentLangCode, setCurrentLangCode] = useState(
    localStorage.getItem("i18nextApp") || "en"
  );
  console.log(details);

  useEffect(() => {
    checkOut();
  }, []);
  let dataOr = JSON.parse(localStorage.getItem("checkOut"))
    ? JSON.parse(localStorage.getItem("checkOut"))
    : {};

  const checkOut = async () => {
    const { data } = await CheckoutItems(dataOr);
    if (!data?.error) {
      setDetails(data?.results?.order);
    }
  };
  return (
    <div>
      <div className="app_main">
        <div className="orderconfirmed comman_space overflow-hidden">
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
              <div className="head_comman">{t("OrderCon")}</div>
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
              <h2>{t("PS")}</h2>
              <p>{t("descOrder")}</p>
            </div>
            <div className="col-12">
              <div className="row cart_product">
                <div className="col-12">
                  {details?.cuisines?.map((item, ind) => (
                    <div className="row Breakfast_single align-items-center position-relative">
                      <div className="col">
                        <div className="menu_card_data">
                          <h2>
                            {currentLangCode === "en"
                              ? item?.cuisineId?.name
                              : item?.cuisineId?.name_ar}
                          </h2>
                          <span>
                            EGP {item?.cuisineId?.price} X {item?.quantity}
                          </span>
                        </div>
                      </div>
                      <div className="col-auto ">
                        <div className="menu_product position-relative">
                          <img
                            className="mp_img"
                            src={
                              item?.cuisineId?.image
                                ? item?.cuisineId?.image
                                : require("../assets/img/prdt2.png")
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      {/* <div class="col-auto ps-0">
                          <a class="product_remove" href="javascript:;">
                             <img src="assets/img/close-line.png" alt="">
                          </a>
                       </div> */}
                    </div>
                  ))}
                </div>
              </div>
              <div className="row summary_part py-2">
                <div className="col-12">
                  <div className="row py-1">
                    <div className="col-6">
                      <div className="summary_text">{t("OrderId")}</div>
                    </div>
                    <div className="col-6">
                      <div className="summary_text text-end">
                        {details?.orderId}
                      </div>
                    </div>
                  </div>
                  <div className="row py-1">
                    <div className="col-6">
                      <div className="summary_text">{t("TableId")}</div>
                    </div>
                    <div className="col-6">
                      <div className="summary_text text-end">
                        {" "}
                        {details?.tableId?.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row summary_part py-2 mb-5">
                <div className="col-12 mb-4">
                  <div className="row py-1">
                    <div className="col-6">
                      <div className="summary_text">{t("Amount")}</div>
                    </div>
                    <div className="col-6">
                      <div className="summary_text text-end">
                        EGP {details?.total}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mb-3 mt-5 rate_theorder">
              <a
                className="comman_btn w-100 text-decoration-none"
                onClick={() => {
                  navigate("/app/home/rate-order", {
                    state: details,
                  });
                }}>
               {t("RTO")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
