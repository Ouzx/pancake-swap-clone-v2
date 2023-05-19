import React from "react";
import "./Gradient.scss";

// import { Gradient1 } from '../../../../assets/images/Ozkan';
// import { Gradient2 } from '../../../../assets/images/Ozkan';

const Gradient = () => {
  return (
    <div className="gradient-outer">
      <div className="gradient-inner">
        <svg
          viewBox="0 0 1660 339"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"></path>
          <defs>
            <linearGradient
              id="paint0_linear_dark"
              x1="830"
              y1="83.5"
              x2="830"
              y2="338.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#08060B" stop-opacity="0.2"></stop>
              <stop
                offset="0.545554"
                stop-color="#08060B"
                stop-opacity="0.5"
              ></stop>
              <stop offset="1" stop-color="#08060B"></stop>
            </linearGradient>
          </defs>
        </svg>
        {/* <img src= {Gradient1} alt="gradient" /> */}
        {/* <img src= {Gradient2} alt="gradient" /> */}
      </div>
    </div>
  );
};

export default Gradient;
