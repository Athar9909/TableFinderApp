import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmed = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let details = location?.state;

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
                    navigate(-1);
                  }}
                  src={require("../assets/img/back.png")}
                  alt=""
                />
              </a>
            </div>
            <div className="col text-center">
              <div className="head_comman">Order Confirmation</div>
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
              <h2>Payment Succesfully</h2>
              <p>
                Total Amount is Successfull, Please help us with our product
                reviews.
              </p>
            </div>
            <div className="col-12">
              <div className="row cart_product">
                <div className="col-12">
                  {details?.cuisines?.map((item, ind) => (
                    <div className="row Breakfast_single align-items-center position-relative">
                      <div className="col">
                        <div className="menu_card_data">
                          <h2>{item?.cuisineId?.name}</h2>
                          <span>EGP {item?.cuisineId?.price}</span>
                        </div>
                      </div>
                      <div className="col-auto ">
                        <div className="menu_product position-relative">
                          <img
                            className="mp_img"
                            src={require("../assets/img/prdt2.png")}
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
                      <div className="summary_text">Order Id</div>
                    </div>
                    <div className="col-6">
                      <div className="summary_text text-end">
                        {details?.orderId}
                      </div>
                    </div>
                  </div>
                  <div className="row py-1">
                    <div className="col-6">
                      <div className="summary_text">Table Id</div>
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
              <div className="row summary_part py-2">
                <div className="col-12">
                  <div className="row py-1">
                    <div className="col-6">
                      <div className="summary_text">Subtotal</div>
                    </div>
                    <div className="col-6">
                      <div className="summary_text text-end">EGP 11.15</div>
                    </div>
                  </div>
                  <div className="row py-1">
                    <div className="col-6">
                      <div className="summary_text">
                        Fees &amp; Estimated Tax
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="summary_text text-end">EGP 3.99</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 rating_screen_inner rate_screen_new m-0 mb-5">
              <div className="rating_top py-0">
                <h2>
                  <img src="assets/img/money.png" alt="" />
                  Your Payable Amount
                </h2>
                <strong>EGP {details?.total}</strong>
              </div>
            </div>

            <div className="col-12 mb-3 rate_theorder">
              <a
                className="comman_btn w-100 text-decoration-none"
                onClick={() => {
                  navigate("/app/home/rate-order", {
                    state: details,
                  });
                }}>
                Rate The Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;