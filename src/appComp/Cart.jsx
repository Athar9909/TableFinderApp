import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AddInCart,
  CheckoutItems,
  PaymentStart,
  deleteCartItem,
  getCartDetails,
} from "./httpServices/appApis";
import Loader from "./Loader";
import Swal from "sweetalert2";
import { t } from "i18next";

const Cart = () => {
  const [orderType, setOrderType] = useState("Take Away");
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [NewCart, setNewCart] = useState([]);
  let id = localStorage.getItem("tableId");
  const [total, setTotal] = useState([]);
  const [totalAddon, setTotalAddon] = useState([]);
  const [loader, setLoader] = useState(false);
  const [currentLangCode, setCurrentLangCode] = useState(
    localStorage.getItem("i18nextApp") || "en"
  );

  useEffect(() => {
    GetCart();
  }, []);
  let tableId = localStorage.getItem("tableId");

  const GetCart = async () => {
    const { data } = await getCartDetails(id);
    if (!data?.error) {
      let cus = data?.results?.cart?.cuisines;
      setCart(data?.results?.cart);
      setLoader(false);

      if (!cus?.length) {
        Swal.fire({
          title: "Your Cart is Empty!",
          text: "Click to Continue to Order!.",
          timer: 5000,
          confirmButtonText: "Go Home",
          confirmButtonColor: "#ff7a00",
        });
        navigate(`/${tableId}`);
      }
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

  console.log(orderType);

  const Checkout = async () => {
    const { data } = await PaymentStart({
      price: cart?.total,
    });
    if (!data?.error) {
      localStorage.setItem("paymentId", data?.results?.id);
      let Data = {
        tableId: id,
        cuisines: cart?.cuisines,
        type: orderType,
        total: cart?.total,
        id: data?.results?.id,
      };
      localStorage.setItem("checkOut", JSON.stringify(Data));

      navigate("/app/home/review", {
        state: Data,
      });
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
    // let data = NewCart?.map((item, index) => {
    //   if (ind === index) {
    //     return {
    //       ...item,
    //       quantity: item?.quantity - (item?.quantity > 1 ? 1 : 0),
    //     };
    //   } else {
    //     return item;
    //   }
    // });
    // setNewCart(data);
    // setTotal(
    //   data.reduce(function (a, b) {
    //     return a + b.cuisineId?.price * b.quantity;
    //   }, 0)
    // );
  };
  console.log(total);

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
      {cart?.cuisines?.length > 0 ? (
        <>
          {orderType === "Take Away" ? (
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
                    <div className="head_comman">{t("YourCart")}</div>
                  </div>
                  <div className="col-2" />
                </div>
                <div className="row cart_product">
                  <div className="col-12">
                    {cart?.cuisines?.map((itm, ind) => (
                      <div className="row Breakfast_single align-items-center">
                        <div className="col">
                          <div className="menu_card_data fs-4">
                            <h2>
                              {currentLangCode === "en"
                                ? itm?.cuisineId?.name
                                : itm?.cuisineId?.name_ar}
                            </h2>
                            <span>EGP {itm?.total}</span>
                          </div>
                        </div>
                        <div className="px-0 col-auto">
                          <div className="quantity_box" key={NewCart}>
                            <span
                              onClick={() =>
                                handleQuantityMinus(itm?.cuisineId?._id, 1)
                              }>
                              -
                            </span>
                            <button className="bg-white border rounded m-2">
                              {itm?.quantity}
                            </button>
                            {/* <input
                          onChange={(e) => handleQuantity(e.target.value)}
                          defaultValue={itm?.quantity}
                          type="text"
                        /> */}
                            <span
                              onClick={() =>
                                handleQuantityPlus(
                                  itm?.cuisineId?._id,
                                  itm?.price
                                )
                              }>
                              +
                            </span>
                          </div>
                        </div>

                        <div className="col-auto">
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
                            <a
                              className="add_product shadow"
                              onClick={() => {
                                navigate(
                                  `/app/home/add-product/${itm?.cuisineId?._id}`
                                );
                              }}>
                              <img
                                src={require("../assets/img/pencil-fill.png")}
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="menu_product position-relative">
                            <i
                              className="fa fa-trash"
                              onClick={() => {
                                removeItem(itm?.cuisineId?._id, itm?.quantity);
                              }}></i>
                          </div>
                        </div>
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
                      </div>
                    ))}
                  </div>
                </div>
                <div className="main_head my-3">{t("Summary")}</div>
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
                            <img
                              src={require("../assets/img/tag.png")}
                              alt=""
                            />{" "}
                            {t("Promo")}
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
                        <div className="summary_text">{t("SubTotal")}</div>
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
                        <div className="total_count">{t("total")}</div>
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
                        setOrderType("Dining");
                      }}
                      className="comman_btn shadow-none active text-decoration-none">
                      {t("Dining")}
                    </a>
                    <a
                      onClick={() => {
                        setOrderType("Take Away");
                      }}
                      className="comman_btn shadow-none text-decoration-none">
                      {t("Takeaway")}
                    </a>
                  </div>
                  <div className="col-12 pb-3">
                    <a
                      className="comman_btn text-decoration-none"
                      onClick={() => {
                        Checkout();
                      }}>
                      {t("Check")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="app_main">
              {loader && <div class="loading">Loading&#8230;</div>}
              <div className="checkout comman_space overflow-hidden">
                <div className="row top_bar py-3 align-items-center">
                  <div className="col-2">
                    <a className="back_btn">
                      <img src={require("../assets/img/back.png")} alt="" />
                    </a>
                  </div>
                  <div className="col text-center">
                    <div className="head_comman">{t("YourCart")}</div>
                  </div>
                  <div className="col-2" />
                </div>
                <div className="row show_status">
                  <div className="col-12">
                    <h2>{t("Dining")}</h2>
                  </div>
                </div>
                <div className="row cart_product">
                  <div className="col-12">
                    {cart?.cuisines?.map((itm, ind) => (
                      <div className="row Breakfast_single align-items-center">
                        <div className="col">
                          <div className="menu_card_data fs-4">
                            <h2>
                              {" "}
                              {currentLangCode === "en"
                                ? itm?.cuisineId?.name
                                : itm?.cuisineId?.name_ar}
                            </h2>
                            <span>EGP {itm?.total}</span>
                          </div>
                        </div>
                        <div className="px-0 col-auto">
                          <div className="quantity_box" key={NewCart}>
                            <span
                              onClick={() =>
                                handleQuantityMinus(itm?.cuisineId?._id, 1)
                              }>
                              -
                            </span>
                            <button className="bg-white border rounded m-2">
                              {itm?.quantity}
                            </button>
                            {/* <input
                          onChange={(e) => handleQuantity(e.target.value)}
                          defaultValue={itm?.quantity}
                          type="text"
                        /> */}
                            <span
                              onClick={() =>
                                handleQuantityPlus(
                                  itm?.cuisineId?._id,
                                  itm?.price
                                )
                              }>
                              +
                            </span>
                          </div>
                        </div>

                        <div className="col-auto">
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
                            <a
                              className="add_product shadow"
                              onClick={() => {
                                navigate(
                                  `/app/home/add-product/${itm?.cuisineId?._id}`
                                );
                              }}>
                              <img
                                src={require("../assets/img/pencil-fill.png")}
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="menu_product position-relative">
                            <i
                              className="fa fa-trash"
                              onClick={() => {
                                removeItem(itm?.cuisineId?._id, itm?.quantity);
                              }}></i>
                          </div>
                        </div>
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
                      </div>
                    ))}
                  </div>
                </div>
                <div className="main_head my-3">{t("Summary")}</div>

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
                            <img
                              src={require("../assets/img/tag.png")}
                              alt=""
                            />{" "}
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
                        <div className="summary_text">{t("SubTotal")}</div>
                      </div>
                      <div className="col-6">
                        <div className="summary_text text-end">
                          EGP {cart?.total}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row summary_total">
                  <div className="col-12">
                    <div className="row py-3">
                      <div className="col-6">
                        <div className="total_count">{t("total")}</div>
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
                      setOrderType("Dinning");
                    }}
                    className="comman_btn shadow-none  text-decoration-none">
                    {t("Dining")}
                  </a>
                  <a
                    onClick={() => {
                      setOrderType("Take Away");
                    }}
                    className="comman_btn shadow-none active text-decoration-none">
                    {t("Takeaway")}
                  </a>
                </div>

                <div className="row">
                  <div className="col-12 mb-4">
                    <a
                      className="comman_btn text-decoration-none"
                      onClick={() => {
                        Checkout();
                      }}>
                      {t("Check")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </div>
  );
};

export default Cart;
