import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Sidebar = ({ slide, getBarClick, getBar }) => {
  const navigate = useNavigate();
  const [SlideState, setSlideState] = useState("");
  const width = window.innerWidth;
  const [sideBar, setSideBar] = useState(width < 768 ? false : true);

  useEffect(() => {
    setSlideState(slide);
  }, []);

  let token = localStorage.getItem("token-admin");
  // let AdminData = JSON.parse(localStorage.getItem("token-admin-data"));

  // console.log(AdminData);
  if (token === null) {
    Swal.fire({
      title: "PLease Login to Continue!",
      text: "Login Expired!",
      icon: "warning",
      confirmButtonText: "Login",
      confirmButtonColor: "#e25829",
    }).then((res) => {
      navigate("/admin/Login");
    });
  }
  // console.log(width);

  const Logout = () => {
    localStorage.removeItem("token-admin");
    navigate("/admin/Login");
    window.location.reload();
  };

  return (
    <div className="sider_bar">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              onClick={() => {
                navigate("/admin/dashboard");
              }}
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              <img src={require("../../assets/img/dashboard.png")} alt="" />{" "}
              Dashboard
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="siderbar_menus">
                <a>Restaurant</a>
                <a>Survey</a>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading2">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="true"
              aria-controls="collapse2">
              <img src={require("../../assets/img/branch.png")} alt="" /> Branch
              Management
            </button>
          </h2>
          <div
            id="collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="heading2"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="siderbar_menus">
                <a
                  onClick={() => {
                    navigate("/admin/dashboard/branch-management");
                  }}>
                  Branch Manager
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-expanded="true"
              aria-controls="collapse3">
              <img src={require("../../assets/img/booking.png")} alt="" />{" "}
              Booking
            </button>
          </h2>
          <div
            id="collapse3"
            className="accordion-collapse collapse"
            aria-labelledby="heading3"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="siderbar_menus">
                <a>Takeaway</a>
                <a>Dining</a>
                <a>Dining with Food</a>
                <a>Waiting List</a>
                <a>Category Management</a>
                <a>Cuisines Management</a>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading4">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="true"
              aria-controls="collapse4">
              <img src={require("../../assets/img/Table.png")} alt="" /> Table
              Management
            </button>
          </h2>
          <div
            id="collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="heading4"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="siderbar_menus">
                <a href="manual-table-management.html">
                  Manual Table Management
                </a>
                <a>Floor Plan Management</a>
                <a>Slots Management</a>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading5">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse5"
              aria-expanded="true"
              aria-controls="collapse5">
              <img src={require("../../assets/img/Discount.png")} alt="" />{" "}
              Discount
            </button>
          </h2>
          <div
            id="collapse5"
            className="accordion-collapse collapse"
            aria-labelledby="heading5"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="siderbar_menus">
                <a>Manage Discount</a>
                <a>Promo Code Management</a>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading7">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse7"
              aria-expanded="true"
              aria-controls="collapse7">
              <img src={require("../../assets/img/profilemy.png")} alt="" /> My
              Profile
            </button>
          </h2>
          <div
            id="collapse7"
            className="accordion-collapse collapse"
            aria-labelledby="heading7"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="siderbar_menus">
                <a>Setting</a>
                <a>About Us</a>
                <a>Privacy Policy</a>
                <a>Help Center</a>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading6">
            <a
              className="accordion-button collapsed arrow_remove"
              href="my-earning.html">
              <img src={require("../../assets/img/myearning.png")} alt="" /> My
              Earning
            </a>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading8">
            <a
              className="accordion-button collapsed arrow_remove"
              onClick={() => {
                localStorage.removeItem("token-admin");
                navigate("/admin/Login");
                window.location.reload();
              }}>
              <img src={require("../../assets/img/logout.png")} alt="" /> Logout
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
