import React, { Suspense, useEffect, useState } from "react";
import { Carousel } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { getCousines, getTableInfo } from "./httpServices/appApis";
import Loader from "./Loader";
import i18next, { t } from "i18next";

const Home = () => {
  const navigate = useNavigate();
  let image = require("../assets/img/bg_img.jpg");
  const [table, setTable] = useState([]);
  const [cate, setCate] = useState([]);
  const [cateId, setCateId] = useState();
  const [cousine, setCousine] = useState([]);
  const [info, setInfo] = useState(false);
  const [currentLangCode, setCurrentLangCode] = useState(
    localStorage.getItem("i18nextApp") || "en"
  );

  useEffect(() => {
    if (currentLangCode === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [currentLangCode]);

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
            src={table?.restaurantId?.cover_image}
            alt=""></img>

          <span
            className=""
            onClick={() => {
              navigate("/app/home/cart");
            }}>
            <a className="information_btn cart_logo shadow ">
              <i
                style={{
                  color: "#e25829",
                }}
                class="fa-solid fa-cart-shopping"></i>
            </a>
          </span>

          <span
            className=""
            onClick={() => {
              i18next.changeLanguage(currentLangCode === "en" ? "ar" : "en");
              setCurrentLangCode(currentLangCode === "en" ? "ar" : "en");
              localStorage.setItem(
                "i18nextApp",
                currentLangCode === "en" ? "ar" : "en"
              );
              // ChangeLang(currentLangCode === "en" ? "Arabic" : "English");
              window.location.reload(false);
            }}>
            <a className="information_btn cart_logo shadow mt-2">
              <img
                className="mx-2"
                width={35}
                src={
                  currentLangCode === "en"
                    ? require("../assets/img/Arabic.png")
                    : require("../assets/img/usa.png")
                }
                alt=""
              />
            </a>
          </span>

          <div className="app_menus_logo shadow">
            <img
              style={{
                width: "100%",
                borderRadius: "50%",
                height: "80%",
              }}
              src={table?.restaurantId?.restaurant_logo}
              alt=""
            />
          </div>
        </div>

        <div className="menus_top_details comman_space pt-3 pb-3">
          <div className="row align-items-center">
            <div className="col">
              <div className="top_details_inner">
                <h2>
                  {currentLangCode === "en"
                    ? table?.restaurantId?.restaurant_name
                    : table?.restaurantId?.restaurant_name_ar}
                </h2>
                <div className="middle_box d-flex align-items-center">
                  <div className="rating_box">
                    <span>4.5</span> <i className="fa-solid fa-star" />{" "}
                    <span>5000+ {t("rating")}</span>
                  </div>
                </div>
                <div className="opennow_box mt-2">
                  <a>{t("open")}</a>{" "}
                  <span>
                    {currentLangCode === "en"
                      ? table?.restaurantId?.restaurant_address?.slice(0, 70)
                      : table?.restaurantId?.restaurant_address_ar?.slice(
                          0,
                          70
                        )}
                    ...
                  </span>
                </div>
              </div>

              {info && (
                <div className="opennow_box mt-2">
                  <a>Info:</a>{" "}
                  <span>
                    {currentLangCode === "en"
                      ? table?.restaurantId?.restaurant_description
                      : table?.restaurantId?.restaurant_description_ar}
                  </span>
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
            {table?.restaurantId?.banners?.map((item, ind) => (
              <div>
                <div
                  className="app_slidee"
                  style={{
                    backgroundImage: `url(${item ? item : image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}></div>
              </div>
            ))}
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
                  {currentLangCode === "en" ? item?.name : item?.name_ar}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content shadow" id="myTabContent">
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
                        <h2>
                          {" "}
                          {currentLangCode === "en"
                            ? itm?.name
                            : itm?.name_ar}
                          ®
                        </h2>
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

          <div className="tab-content text-center p-2 py-3" id="myTabContent">
            <div className="tab-pane fade show active">
              <div className="Breakfast_menu_card">
                <div>
                  <h3
                    style={{
                      fontSize: "15px",
                    }}>
                    {t("Powered")}
                    <img
                      className=""
                      style={{
                        borderRadius: "50%",
                      }}
                      width={20}
                      src={require("../assets/img/logoNN.png")}></img>{" "}
                    {t("TF")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
