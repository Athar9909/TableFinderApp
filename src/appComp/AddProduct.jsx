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
            <img
              src={
                cousine?.image
                  // ? cousine?.image
                  // : require("../assets/img/product_img.png")
              }
              alt=""
            />
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
                  <span>Select Option</span>

                  <div className="col-12">
                    <div className="row  filters_inner">
                      {itm?.options?.map((i, d) => (
                        <div className="row ">
                          <div className="col-8">
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
                          <div className="col-4  justify-content-end">
                            <div className="mt-2">
                              <strong className="required_tag bg-light mt-1">
                                Egp-{i?.price}
                              </strong>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* <div className="required_tag">Required</div> */}
              </div>
            ))}
          </div>
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
