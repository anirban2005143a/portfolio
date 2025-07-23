import React from "react";
import "./style.css"

export const Loader = () => {
  return (
    <div className=" w-screen h-[100dvh] flex justify-center items-center bg-[radial-gradient(circle_at_center,_#3a0057_0%,_#000014_40%,_#000000_80%)]  ">
      <div id="loader" className="containerLoader ">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>
    </div>
  );
};
