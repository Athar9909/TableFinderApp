import React from "react";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="app_main">
        <div className="addcard comman_space overflow-hidden">
          <div className="row top_bar py-3 align-items-center">
            <div className="col-2">
              <a className="back_btn" >
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
              <div className="head_comman">Add Card</div>
            </div>
            <div className="col-2" />
          </div>
          <form className="row addcard_form pt-3">
            <div className="form-group col-12 mb-3">
              <label htmlFor="">Card Number</label>
              <input className="form-control" type="text" name="" id="" />
            </div>
            <div className="form-group col-12 mb-3">
              <label htmlFor="">Card Holder Name</label>
              <input className="form-control" type="text" name="" id="" />
            </div>
            <div className="form-group col-6 mb-3">
              <label htmlFor="">Exp. Date</label>
              <input className="form-control" type="text" name="" id="" />
            </div>
            <div className="form-group col-6 mb-4">
              <label htmlFor="">Security Code</label>
              <input className="form-control" type="text" name="" id="" />
            </div>
            <div className="form-group col-12 mb-3">
              <a
                className="comman_btn w-100 text-decoration-none"
                onClick={() => {
                  navigate("/app/home/order-Confirmed");
                }}>
                Add
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
