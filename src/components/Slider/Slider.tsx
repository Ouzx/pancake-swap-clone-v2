import React, { useState, useEffect } from "react";

import Slide1 from "./Slides/Slide1/Slide1";

const SLIDES = [<Slide1 />, <Slide1 />, <Slide1 />, <Slide1 />, <Slide1 />];

import "./Slider.scss";
const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => {
        if (prev === SLIDES.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [activeSlideIndex]);

  return (
    <div className="updated-slider-container">
      <div className="slide-container">{SLIDES[activeSlideIndex]}</div>
      <div className="slider-buttons-container">
        {SLIDES.map((_, index) => (
          <div
            key={"button" + index}
            className={`slider-button ${
              index === activeSlideIndex ? "active" : ""
            }`}
            onClick={() => setActiveSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
