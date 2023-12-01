import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { JoinWaiting, getWaitingStatus } from "./httpServices/appApis";
import { Col, Row, Statistic } from "antd";
import Button from "rsuite/Button";
import { t } from "i18next";
const { Countdown } = Statistic;
const WaitingSuccess = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [loader, setLoader] = useState(false);
  const deadline = Date.now() + 1000 * 60 * 60;
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    GetStatus();
  }, []);

  const GetStatus = async () => {
    const { data } = await getWaitingStatus(id);
    if (!data?.error) {
      let cus = data?.results?.waiting;
      setDetails(cus);
      setLoader(false);
      if (cus?.status === "Allocated") {
        navigate(`/${cus?.tableId?._id}`);
      }
    }
    setTimeout(() => {
      setLoader(false);
    }, [2000]);
  };

  const timeString12hr = (time) => {
    let timeIn = new Date("1970-01-01T" + time + "Z").toLocaleTimeString(
      "en-US",
      {
        timeZone: "UTC",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      }
    );
    return timeIn;
  };

  const onFinish = () => {
    console.log("finished!");
    setStatus(false);
  };

  return (
    <div>
      <div className="app_main">
        <div className="addcard comman_space overflow-hidden">
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
              <div className="head_comman">{t("Wait")}</div>
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
              <h2>{t("descWait")}</h2>
            </div>

            <div className="col-12 orderconfirmed_content text-center py-4">
              {details?.time ? (
                <div>
                  <label>{t("descWait2")}</label>
                  <p>
                    {t("descWait3")} {timeString12hr(details?.time)}
                  </p>
                  <Button
                    loading={loader}
                    appearance="primary"
                    className="comman_btn mt-3"
                    onClick={() => {
                      setLoader(true);
                      GetStatus();
                    }}>
                    {t("CheckWait")}
                  </Button>
                </div>
              ) : (
                <div>
                  <p>
                    {details?.status === "Unavailable"
                      ? t("descWait4")
                      : t("descWait5")}
                  </p>

                  <Button
                    loading={loader}
                    appearance="primary"
                    className="comman_btn mt-3"
                    onClick={() => {
                      setLoader(true);
                      GetStatus();
                    }}>
                    {t("CheckWait")}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingSuccess;
