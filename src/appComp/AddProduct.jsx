import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddInCart, getCousinesDetails } from "./httpServices/appApis";

const AddProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cousine, setCousine] = useState([]);

  let tableId = localStorage.getItem("tableId");

  useEffect(() => {
    GetCuisinesInfo();
  }, []);

  const GetCuisinesInfo = async () => {
    const { data } = await getCousinesDetails(id);
    if (!data?.error) {
      setCousine(data?.results?.cuisine);
    }
  };

  const addToCart = async () => {
    const { data } = await AddInCart({
      tableId: tableId,
      cuisineId: id,
      quantity: 1,
      price: 3.4,
    });
    if (!data.error) {
      navigate("/app/home/cart");
    }
  };

  return (
    <div className="app_main">
      <div className="add_product_screen overflow-hidden">
        <div className="row top_bar comman_space pt-3">
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
          <div className="col" />
          <div className="col-2" />
        </div>
        <div className="add_product_details">
          <div className="product_img">
            <img src={require("../assets/img/product_img.png")} alt="" />
          </div>
          <div className="product_name">
            <h2>{cousine?.name}</h2>
          </div>
        </div>

        <div className="add_product_filters comman_space">
          <div className="row filters_box">
            {cousine?.addOns?.map((itm, id) => (
              <div className="col-12 d-flex align-items-start justify-content-between pt-3 pb-2">
                <div className="filter_heading">
                  <h3>{itm?.name}</h3>
                  <span>Select 1</span>

                  <div className="col-12">
                    <div className="row filters_inner">
                      {itm?.options?.map((i, d) => (
                        <div className="col-12">
                          <div className="filters_radio_btns">
                            <input
                              type="radio"
                              id={i?._id}
                              name={itm?.name}
                              className="d-none"
                            />
                            <label htmlFor={i?._id}>{i?.name}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="required_tag">Required</div>
              </div>
            ))}
          </div>
          {/* <div className="row filters_box">
            <div className="col-12 d-flex align-items-start justify-content-between pt-3 pb-2">
              <div className="filter_heading">
                <h3>Select Side</h3>
                <span>Select 1</span>
              </div>
              <div className="required_tag">Required</div>
            </div>
            <div className="col-12">
              <div className="row filters_inner">
                <div className="col-12">
                  <div className="filters_radio_btns">
                    <input
                      type="radio"
                      id="radio2"
                      name="radio1"
                      className="d-none"
                    />
                    <label htmlFor="radio2">French Fries</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row filters_box">
            <div className="col-12 d-flex align-items-start justify-content-between pt-3 pb-2">
              <div className="filter_heading">
                <h3>Select Drink</h3>
                <span>Select 1</span>
              </div>
              <div className="required_tag">Required</div>
            </div>
            <div className="col-12">
              <div className="row filters_inner">
                <div className="col-12">
                  <div className="filters_radio_btns">
                    <input
                      type="radio"
                      id="cold1"
                      name="colddrink"
                      className="d-none"
                    />
                    <label htmlFor="cold1">Coke</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="filters_radio_btns">
                    <input
                      defaultChecked=""
                      type="radio"
                      id="cold2"
                      name="colddrink"
                      className="d-none"
                    />
                    <label htmlFor="cold2">Sprite</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="filters_radio_btns">
                    <input
                      type="radio"
                      id="cold3"
                      name="colddrink"
                      className="d-none"
                    />
                    <label htmlFor="cold3">Diet Coke</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="filters_radio_btns">
                    <input
                      type="radio"
                      id="cold4"
                      name="colddrink"
                      className="d-none"
                    />
                    <label htmlFor="cold4">Fanta Orange</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="filters_radio_btns">
                    <input
                      type="radio"
                      id="cold5"
                      name="colddrink"
                      className="d-none"
                    />
                    <label htmlFor="cold5">Deecaf Cofee</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="filters_radio_btns">
                    <input
                      type="radio"
                      id="cold6"
                      name="colddrink"
                      className="d-none"
                    />
                    <label htmlFor="cold6">Hot Tea</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row filters_box">
            <div className="col-12 d-flex align-items-start justify-content-between pt-3 pb-2">
              <div className="filter_heading">
                <h3>Remove From French Fries</h3>
                <span>Select upto 1</span>
              </div>
              <div className="required_tag Optional_tag">Optional</div>
            </div>
            <div className="col-12">
              <div className="row filters_inner">
                <div className="col-12">
                  <div className="filters_radio_btns">
                    <input
                      type="radio"
                      id="frice"
                      name="frice"
                      className="d-none"
                    />
                    <label htmlFor="frice">No Salt</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row filters_box">
            <div className="col-12 d-flex align-items-start justify-content-between pt-3 pb-2">
              <div className="filter_heading">
                <h3>Extra For French Fries</h3>
                <span>Select upto 1</span>
              </div>
              <div className="required_tag Optional_tag">Optional</div>
            </div>
            <div className="col-12">
              <div className="row filters_inner">
                <div className="col-12">
                  <div className="filters_radio_btns">
                    <input
                      type="radio"
                      id="salt"
                      name="salt"
                      className="d-none"
                    />
                    <label htmlFor="salt">Extra salt</label>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <a
          className="view_cart_btn row text-center text-decoration-none"
          onClick={() => {
            addToCart();
          }}>
          <div className="col-2">
            <div className="btn_icon">
              <img src={require("../assets/img/shopping-cart.png")} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="btn_text text-center">
              <span>View Cart</span>
              <h4>Table Finder</h4>
            </div>
          </div>
          <div className="col-2">
            <div className="btn_count_box text-center">1</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AddProduct;
