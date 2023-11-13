import React from "react";

const Loader = () => {
  return (
    <div>
      <div id="background"></div>
      <div id="logocontainer">
        <div id="pelogo">
          <img width={65} src={require("../assets/img/logoNN.png")}></img>
        </div>
        <div
          class="loader"
          style={{
            left: "5px",
            top: "0",
            height: "5px",
            width: "0",
            animation: "slide1 1s linear forwards infinite",
          }}></div>
        <div
          class="loader"
          style={{
            right: "0",
            top: "5px",
            height: "0",
            width: "5px",
            animation: "slide2 1s linear forwards infinite",
            animationDelay: "0.5s",
          }}></div>
        <div
          class="loader"
          style={{
            right: "5px",
            bottom: "0",
            height: "5px",
            width: "0",
            animation: "slide3 1s linear forwards infinite",
          }}></div>
        <div
          class="loader"
          style={{
            left: "0",
            bottom: "5px",
            height: "0",
            width: "5px",
            animation: "slide4 1s linear forwards infinite",
            animationDelay: "0.5s",
          }}></div>
      </div>
    </div>
  );
};

export default Loader;
