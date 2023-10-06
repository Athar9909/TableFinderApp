import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutItems, getCartDetails } from "./httpServices/appApis";

const Cart = () => {
  const [orderType, setOrderType] = useState(true);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  let id = localStorage.getItem("tableId");

  useEffect(() => {
    GetCart();
  }, []);

  const GetCart = async () => {
    const { data } = await getCartDetails(id);
    if (!data?.error) {
      setCart(data?.results?.cart);
    }
  };

  const Checkout = async () => {
    let Data = {
      tableId: id,
      cuisines: cart?.cuisines,
      type: orderType ? "Take Away" : "Dining",
      total: 3.4,
    };
    navigate("/app/home/payment-method", {
      state: Data,
    });
  };

  return (
    <div>
      {orderType ? (
        <div className="app_main">
          <div className="cart_screen comman_space overflow-hidden">
            <div className="row top_bar pb-3 align-items-center">
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
                <div className="head_comman">Your Cart</div>
              </div>
              <div className="col-2" />
            </div>
            <div className="row cart_product">
              <div className="col-12">
                {cart?.cuisines?.map((itm, ind) => (
                  <div className="row Breakfast_single align-items-center">
                    <div className="col">
                      <div className="menu_card_data">
                        <h2>{itm?.cuisineId?.name}</h2>
                        <span>EGP {itm?.cuisineId?.price}</span>
                      </div>
                    </div>
                    <div className="px-0 col-auto">
                      <div className="quantity_box">
                        <span>-</span>
                        <input defaultValue={itm?.quantity} type="text" />
                        <span>+</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="menu_product position-relative">
                        <img
                          className="mp_img"
                          src={require("../assets/img/prdt1.png")}
                          alt=""
                        />
                        <a className="add_product shadow">
                          <img
                            src={require("../assets/img/pencil-fill.png")}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="main_head my-3">Summary</div>
            <div className="row promo_codepart">
              <div className="col-12 ">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        <img src={require("../assets/img/tag.png")} alt="" />{" "}
                        Promo Code
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <form action="">
                          <div className="form-group position-relative">
                            <input
                              type="text"
                              className="form-control shadow-none"
                              placeholder="Enter Promo Code"
                            />
                            <button className="apply_btn">Apply</button>
                          </div>
                        </form>
                      </div>
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
                    <div className="summary_text">Fees &amp; Estimated Tax</div>
                  </div>
                  <div className="col-6">
                    <div className="summary_text text-end">EGP 3.99</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row summary_total">
              <div className="col-12 pb-3">
                <div className="row py-3">
                  <div className="col-6">
                    <div className="total_count">Total</div>
                  </div>
                  <div className="col-6">
                    <div className="total_count text-end">
                      {" "}
                      EGP {cart?.total}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-5 d-flex align-items-center twooptions_btns justify-content-center">
                <a
                  onClick={() => {
                    setOrderType(!orderType);
                  }}
                  className="comman_btn shadow-none active text-decoration-none">
                  Dine In
                </a>
                <a
                  onClick={() => {
                    setOrderType(true);
                  }}
                  className="comman_btn shadow-none text-decoration-none">
                  Take Away
                </a>
              </div>
              <div className="col-12 pb-3">
                <a
                  className="comman_btn text-decoration-none"
                  onClick={() => {
                    Checkout();
                  }}>
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="app_main">
          <div className="checkout comman_space overflow-hidden">
            <div className="row top_bar py-3 align-items-center">
              <div className="col-2">
                <a className="back_btn">
                  <img src={require("../assets/img/back.png")} alt="" />
                </a>
              </div>
              <div className="col text-center">
                <div className="head_comman">Order Details</div>
              </div>
              <div className="col-2" />
            </div>
            <div className="row show_status">
              <div className="col-12">
                <h2>Dine In</h2>
              </div>
            </div>
            <div className="row cart_product">
              <div className="col-12">
                {cart?.cuisines?.map((itm, ind) => (
                  <div className="row Breakfast_single align-items-center">
                    <div className="col">
                      <div className="menu_card_data">
                        <h2>{itm?.cuisineId?.name}</h2>
                        <span>{itm?.cuisineId?.price}</span>
                      </div>
                    </div>
                    <div className="px-0 col-auto">
                      <div className="quantity_box">
                        <span>-</span>
                        <input defaultValue={itm?.quantity} type="text" />
                        <span>+</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="menu_product position-relative">
                        <img
                          className="mp_img"
                          src={require("../assets/img/prdt1.png")}
                          alt=""
                        />
                        <a className="add_product shadow">
                          <img
                            src={require("../assets/img/pencil-fill.png")}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="main_head my-3">Summary</div>
            <div className="row promo_codepart">
              <div className="col-12 ">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        <img src={require("../assets/img/tag.png")} alt="" />{" "}
                        Promo Code
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <form action="">
                          <div className="form-group position-relative">
                            <input
                              type="text"
                              className="form-control shadow-none"
                              placeholder="Enter Promo Code"
                            />
                            <button className="apply_btn">Apply</button>
                          </div>
                        </form>
                      </div>
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
                    <div className="summary_text">Fees &amp; Estimated Tax</div>
                  </div>
                  <div className="col-6">
                    <div className="summary_text text-end">EGP 3.99</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row summary_total">
              <div className="col-12">
                <div className="row py-3">
                  <div className="col-6">
                    <div className="total_count">Total</div>
                  </div>
                  <div className="col-6">
                    <div className="total_count text-end">
                      EGP {cart?.total}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-5 d-flex align-items-center twooptions_btns justify-content-center">
              <a
                onClick={() => {
                  setOrderType(!orderType);
                }}
                className="comman_btn shadow-none  text-decoration-none">
                Dine In
              </a>
              <a
                onClick={() => {
                  setOrderType(true);
                }}
                className="comman_btn shadow-none active text-decoration-none">
                Take Away
              </a>
            </div>

            <div className="row">
              <div className="col-12 mb-4">
                <a
                  className="comman_btn text-decoration-none"
                  onClick={() => {
                    Checkout();
                  }}>
                  Place Order
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
