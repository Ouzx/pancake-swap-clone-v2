import React, { FC } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

import "./Slide2.scss";

interface Slide2Props {}

const Slide2: FC<Slide2Props> = ({}) => {
  return (
    <div className="ahmet-card-container">
      <div className="ahmet-card-inside">
        <img className="ahmet-pancake" src="/AhmetCard/ethXpancakeswap.png" alt="" />
        <div className="pancake-protectors">Join Pancake Protectors</div>
        <div className="ahmet-text">
          <span className="ahmet-clickable">Details</span>
          <span> | </span>
          <span className="ahmet-clickable"> Play Now
          <AiOutlineArrowRight /></span>
        </div>
      </div>
      <div>
        <img className="ahmet-bunny" src="/AhmetCard/pancakeProtectorBunny.png" alt="" />
      </div>
    </div>
  );
};

export default Slide2;
