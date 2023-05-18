import React, { useState, useEffect } from "react";

import "./Slider.scss";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide4 from "./Slide4/Slide4";

const SLIDE_COUNT = 5;

const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => {
        if (prev === SLIDE_COUNT - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [activeSlideIndex]);

  const createSlides = () => {
    switch (activeSlideIndex) {
      case 0:
        return <Slide1 />;
      case 1:
        return <Slide2 />;
      case 2:
        return <Slide4 />;
      case 3:
        return <Slide1 />;
      case 4:
        return <Slide2 />;

      default:
        return <Slide4 />;
    }
  };

  return (
    <div className="slider-container" style={{ marginTop: "10rem" }}>
      {createSlides()}
      <div className="slider-container__button-container">
        <button
          className={`slider-container__button ${
            activeSlideIndex === 0 && "active"
          }`}
          onClick={() => {
            setActiveSlideIndex(0);
          }}
        ></button>
        <button
          className={`slider-container__button ${
            activeSlideIndex === 1 && "active"
          }`}
          onClick={() => {
            setActiveSlideIndex(1);
          }}
        ></button>
        <button
          className={`slider-container__button ${
            activeSlideIndex === 2 && "active"
          }`}
          onClick={() => {
            setActiveSlideIndex(2);
          }}
        ></button>
        <button
          className={`slider-container__button ${
            activeSlideIndex === 3 && "active"
          }`}
          onClick={() => {
            setActiveSlideIndex(3);
          }}
        ></button>
        <button
          className={`slider-container__button ${
            activeSlideIndex === 4 && "active"
          }`}
          onClick={() => {
            setActiveSlideIndex(4);
          }}
        ></button>
      </div>
    </div>
  );
};

export default Slider;
