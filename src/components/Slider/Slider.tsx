import React from "react";

import Slide1 from "./Slides/Slide1/Slide1";

import "./Slider.scss";
const Slider = () => {
  return (
    <div className="updated-slider-container">
      <div className="slide-container">
        <Slide1 />
      </div>
    </div>
  );
};

export default Slider;
