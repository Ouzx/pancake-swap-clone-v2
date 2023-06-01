import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import Slide1 from "./Slides/Slide1/Slide1";
import Slide2 from "./Slides/Slide2/Slide2";
import SlideOzk from "./Slides/SlideOzk/SlideOzk";

const SLIDES = [<Slide1 />, <Slide2 />, <SlideOzk />, <Slide1 />, <Slide2 />];

import "./Slider.scss";

const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(2);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextSlide(-1),
    onSwipedRight: () => handleNextSlide(1),
    trackMouse: true,
  });

  useEffect(() => {
    return;
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

  const handleNextSlide = (direction: number) => {
    if (direction === 1) {
      setActiveSlideIndex((prev) => {
        if (prev === SLIDES.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    } else {
      setActiveSlideIndex((prev) => {
        if (prev === 0) {
          return SLIDES.length - 1;
        }
        return prev - 1;
      });
    }
  };

  return (
    <div className="updated-slider-container">
      <div {...handlers} className="slide-container">
        {SLIDES[activeSlideIndex]}
      </div>
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
