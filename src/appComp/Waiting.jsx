import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { JoinWaiting } from "./httpServices/appApis";
import Swal from "sweetalert2";
import classNames from "classnames";

const Waiting = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



 

  const onSubmit = async (data) => {
    const res = await JoinWaiting({
      email: data?.email,
      name: data?.name,
      phone_number: data?.number,
      country_code: "966",
      branchId: id,
      number_of_people: data?.noPeople,
    });
    console.log(res);
    if (!res?.data.error) {
      Swal.fire({
        title: res?.data?.message,
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
      navigate(`/waitList/success/${res?.data?.results.waiting?._id}`);
    }
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
              <div className="head_comman">Join Waitlist</div>
            </div>
            <div className="col-2" />
          </div>
          <form
            className="row addcard_form pt-3"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group col-12 mb-3">
              <label htmlFor="">Customer Name</label>
              <input
                className={classNames("form-control", {
                  "is-invalid": errors.name,
                })}
                {...register("name", { required: true })}
                name="name"
                type="text"
              />
              {errors.name && (
                <small className="errorText">{errors.name?.message}</small>
              )}
            </div>

            <div className="form-group col-12 mb-3">
              <label htmlFor="">Email</label>
              <input
                className={classNames("form-control", {
                  "is-invalid": errors.email,
                })}
                {...register("email", { required: true })}
                name="email"
                type="email"
              />
              {errors.email && (
                <small className="errorText">{errors.email?.message}</small>
              )}
            </div>
            <div className="form-group col-6 mb-3">
              <label htmlFor="">Contact Number</label>
              <input
                className={classNames("form-control", {
                  "is-invalid": errors.number,
                })}
                {...register("number", { required: true })}
                name="number"
                type="number"
              />
              {errors.number && (
                <small className="errorText">{errors.number?.message}</small>
              )}
            </div>
            <div className="form-group col-6 mb-4">
              <label htmlFor="">No. of People</label>
              <input
                className={classNames("form-control", {
                  "is-invalid": errors.noPeople,
                })}
                {...register("noPeople", { required: true })}
                name="noPeople"
                type="number"
              />
              {errors.noPeople && (
                <small className="errorText">{errors.noPeople?.message}</small>
              )}
            </div>
            <div className="form-group col-12 mb-3">
              <button
                type="submit"
                className="comman_btn w-100 text-decoration-none">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Waiting;
