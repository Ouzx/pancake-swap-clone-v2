import React from "react";
import "./Slide4.scss";

const Slide4 = () => {
  return (
    <div className="slide-4-container">
      <div className="slide-4-wrapper">
        <div className="silde-4-wrapper-front">
          <div className="slide-4-logo">
            <img
              src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FethXpancakeswap.f3f98ca7.png&w=256&q=75"
              alt="logo"
            />
          </div>
          <div className="slide-4-text">gm eth teams</div>
          <button className="slide-4-button">
            <div className="content">👋 Get in Touch</div>
            <svg
              viewBox="0 0 24 24"
              color="invertedContrast"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              class="button-icon"
            >
              <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
            </svg>
          </button>
        </div>
        <div className="slide-4-wrapper-back">
          <span className="slide-thrash">
            <span className="slide-thrash-2">
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271100%27%20height=%27250%27/%3e"
                className="slide-thrash-3"
              />
            </span>
            <img
              alt="ethImage"
              src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FETHBunny.813b9fdd.png&w=3840&q=75"
              decoding="async"
              data-nimg="intrinsic"
              srcset="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FETHBunny.813b9fdd.png&w=1200&q=75 1x, https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FETHBunny.813b9fdd.png&w=3840&q=75 2x"
              className="slide-thrash-4"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
