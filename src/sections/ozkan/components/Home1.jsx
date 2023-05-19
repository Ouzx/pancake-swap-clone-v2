import React from "react";
import Hero from "./Hero/Hero";
import Slider from "./Swiper/Slider";

import "./Home1.scss";
import Gradient from "./Gradient/Gradient";

export const Home1 = () => {
  return (
    <div className="home1-container">
      <div className="home1-inner">
        <Slider />
        <Gradient />
        <Hero />
      </div>
    </div>
  );
};
