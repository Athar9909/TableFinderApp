import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AddInCart,
  CheckoutItems,
  PaymentStart,
  deleteCartItem,
  getCartDetails,
} from "./httpServices/appApis";

const Review = () => {
  const [orderType, setOrderType] = useState("Take Away");
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [NewCart, setNewCart] = useState([]);
  let id = localStorage.getItem("tableId");
  const [total, setTotal] = useState([]);
  const [totalAddon, setTotalAddon] = useState([]);
  const [loader, setLoader] = useState(false);
  let location = useLocation();
  useEffect(() => {
    GetCart();
  }, []);
  let tableId = localStorage.getItem("tableId");
  let Data = location?.state;
  const GetCart = async () => {
    const { data } = await getCartDetails(id);
    if (!data?.error) {
      let cus = data?.results?.cart?.cuisines;
      setCart(data?.results?.cart);
      setLoader(false);
    }
  };

  console.log(totalAddon, "adddon");

  const removeItem = async (cId, qty) => {
    setLoader(true);
    const { data } = await deleteCartItem({
      tableId: id,
      cuisineId: cId,
      quantity: qty,
    });
    if (!data?.error) {
      GetCart();
    }
    setTimeout(() => {
      setLoader(false);
    }, [4000]);
  };

  const Checkout = async () => {
    const { data } = await PaymentStart({
      price: Data?.total,
    });
    if (!data?.error) {
      localStorage.setItem("paymentId", data?.results?.id);
      // let Data = {
      //   tableId: id,
      //   cuisines: cart?.cuisines,
      //   type: Data?.type ,
      //   total: cart?.total,
      //   id: data?.results?.id,
      // };
      // localStorage.setItem("checkOut", JSON.stringify(Data));
      window.location.href = data?.results?.url;
      // navigate();
    }
  };

  const handleQuantityMinus = async (cId, qty) => {
    setLoader(true);
    let AddON = [];
    cart?.cuisines?.addOns?.map((itm, id) => {
      if (itm?.optionId) {
        AddON.push({ addOnId: itm?._id, option: itm?.optionId });
      }
    });
    const { data } = await deleteCartItem({
      tableId: tableId,
      cuisineId: cId,
      quantity: qty,
    });
    if (!data.error) {
      GetCart();
    }
    setTimeout(() => {
      setLoader(false);
    }, [4000]);
  };

  const handleQuantityPlus = async (cId, price) => {
    setLoader(true);
    let AddON = [];
    cart?.cuisines?.addOns?.map((itm, id) => {
      if (itm?.optionId) {
        AddON.push({ addOnId: itm?._id, option: itm?.optionId });
      }
    });
    const { data } = await AddInCart({
      tableId: tableId,
      cuisineId: cId,
      quantity: 1,
      price: price,
      addOns: AddON,
    });
    if (!data.error) {
      GetCart();
    }
    setTimeout(() => {
      setLoader(false);
    }, [4000]);
  };

  return (
    <div>
      <>
        <div className="app_main">
          {loader && <div class="loading">Loading&#8230;</div>}
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
                <div className="head_comman">Review Order</div>
              </div>
              <div className="col-2" />
            </div>
            <div className="col-12 mb-1 d-flex align-items-center  justify-content-center">
              <a className="comman_btn bg-white shadow-none active text-decoration-none text-dark border">
                {Data?.type}
              </a>
            </div>
            <div className="row cart_product">
              <div className="col-12">
                {Data?.cuisines?.map((itm, ind) => (
                  <div className="row Breakfast_single align-items-center">
                    <div className="col-3">
                      <div className="menu_product position-relative">
                        <img
                          className="mp_img"
                          src={
                            itm?.cuisineId?.image
                              ? itm?.cuisineId?.image
                              : require("../assets/img/prdt1.png")
                          }
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="col-6 px-3 mt-1">
                      <div className="">
                        <span>{itm?.cuisineId?.name}</span>
                        <div className="col-12">
                          <span className="d-flex">
                            {itm?.addOns?.map((itm) => (
                              <h5
                                style={{
                                  fontSize: "10px",
                                }}>
                                {itm?.addOnId?.name + "-" + itm?.option?.name},
                              </h5>
                            ))}
                          </span>
                        </div>
                        <small className="">QTY-{itm?.quantity}</small>
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="">
                        <span>EGP-{itm?.total}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="main_head my-3">Order Summary</div>

            <div className="row summary_part py-2">
              <div className="col-12">
                <div className="row py-1">
                  <div className="col-6">
                    <div className="summary_text">Subtotal</div>
                  </div>
                  <div className="col-6">
                    <div className="summary_text text-end">
                      EGP {cart?.total}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-12">
                    <div className="row py-1">
                      <div className="col-6">
                        <div className="summary_text">Add Ons Total</div>
                      </div>
                      <div className="col-6">
                        <div className="summary_text text-end">EGP {cart?.total}</div>
                      </div>
                    </div>
                  </div> */}
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
      </>
    </div>
  );
};

export default Review;
