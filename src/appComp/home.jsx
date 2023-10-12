import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { getCousines, getTableInfo } from "./httpServices/appApis";

const Home = () => {
  const navigate = useNavigate();
  let image = require("../assets/img/bg_img.jpg");
  const [table, setTable] = useState([]);
  const [cate, setCate] = useState([]);
  const [cateId, setCateId] = useState();
  const [cousine, setCousine] = useState([]);
  const [info, setInfo] = useState(false);
  useEffect(() => {
    GetTableInfo();
    GetCuisines();
  }, []);
  const { id } = useParams();
  localStorage.setItem("tableId", id);
  useEffect(() => {
    GetCuisines();
  }, [cateId]);

  const GetTableInfo = async () => {
    const { data } = await getTableInfo({
      tableId: id,
    });
    if (!data?.error) {
      setTable(data?.results?.table);
      setCate(data?.results?.categories);
      GetCuisines(data?.results?.categories[0]?._id);
    }
  };

  const GetCuisines = async (cId) => {
    const { data } = await getCousines({
      tableId: id,
      categoryId: cateId?.length >= 2 ? cateId : cId,
    });
    if (!data?.error) {
      setCousine(data?.results?.cuisines);
    }
  };

  return (
    <div>
      <div className="app_main">
        <div className="app_menus_top">
          <img
            className="bg_imgg"
            src={
              table?.restaurantId?.cover_image
                ? table?.restaurantId?.cover_image
                : require("../assets/img/bg_img.jpg")
            }
            alt=""></img>
          <span
            className=""
            onClick={() => {
              navigate("/app/home/cart");
            }}>
            <a className="information_btn cart_logo shadow">
              <i
                style={{
                  color: "#e25829",
                }}
                class="fa-solid fa-cart-shopping"></i>
            </a>
          </span>
          <div className="app_menus_logo shadow">
            <img
            style={{
              width:"100%",
              borderRadius:"50%",
              height:"80%"
            }}
              src={
                table?.restaurantId?.restaurant_logo
                  ? table?.restaurantId?.restaurant_logo
                  : require("../assets/img/logo.png")
              }
              alt=""
            />
          </div>
        </div>

        <div className="menus_top_details comman_space pt-3 pb-3">
          <div className="row align-items-center">
            <div className="col">
              <div className="top_details_inner">
                <h2>{table?.restaurantId?.restaurant_name}</h2>
                <div className="middle_box d-flex align-items-center">
                  <div className="rating_box">
                    <span>4.5</span> <i className="fa-solid fa-star" />{" "}
                    <span>5000+ Ratings</span>
                  </div>
                </div>
                <div className="opennow_box mt-2">
                  <a>Open Now.</a>{" "}
                  <span>
                    {table?.restaurantId?.restaurant_address?.slice(0, 70)}...
                  </span>
                </div>
              </div>

              {info && (
                <div className="opennow_box mt-2">
                  <a>Info:</a>{" "}
                  <span>{table?.restaurantId?.restaurant_description}</span>
                </div>
              )}
            </div>
            <div className="col-auto">
              <a
                className="information_btn shadow"
                onClick={() => {
                  setInfo(!info);
                }}>
                <img src={require("../assets/img/infobtn.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="app_slider comman_space">
          <Carousel autoplay>
            <div>
              <div
                className="app_slidee"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}>
                <h3>
                  Get EGP0 Delivery fee on your <br />
                  first order over EGP10
                </h3>
                <a>Learn More</a>
              </div>
            </div>

            <div>
              <div
                className="app_slidee"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}>
                <h3>
                  Get EGP0 Delivery fee on your <br />
                  first order over EGP10
                </h3>
                <a>Learn More</a>
              </div>
            </div>
            <div>
              <div
                className="app_slidee"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}>
                <h3>
                  Get EGP0 Delivery fee on your <br />
                  first order over EGP10
                </h3>
                <a>Learn More</a>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="Breakfast_menu comman_space mt-3 p-0">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {(cate || [])?.map((item, ind) => (
              <li className="nav-item" role="presentation">
                <button
                  className={
                    item?._id === cateId ? "nav-link active" : "nav-link "
                  }
                  type="button"
                  role="tab"
                  aria-selected="true"
                  onClick={() => setCateId(item?._id)}>
                  {item?.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active">
              <div className="Breakfast_menu_card">
                {cousine?.map((itm, ind) => (
                  <div className="row Breakfast_single align-items-center">
                    <div className="col">
                      <div
                        className="menu_card_data"
                        onClick={() => {
                          navigate(`/app/home/add-product/${itm?._id}`);
                        }}>
                        <h2>{itm?.name}®</h2>
                        <span>{itm?.price} EGP</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div
                        className="menu_product position-relative"
                        onClick={() => {
                          navigate(`/app/home/add-product/${itm?._id}`);
                        }}>
                        <img className="mp_img" src={itm?.image} alt="" />
                        <a className="add_product shadow">
                          <img src={require("../assets/img/plus.png")} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
