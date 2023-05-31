import React, { FC } from "react";

import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

import Button from "../../../Button/Button";
import { MicroLogo } from "../../../../assets/icons";

import "./Slide1.scss";

interface Slide1Props {}

const Slide1: FC<Slide1Props> = ({}) => {
  return (
    <div className="slide-1">
      <div>
        <img src="/OguzCard/farmV3MigrationMobileBunny.png" alt="" />
        <img src="/OguzCard/v3LaunchBgMobile.png" alt="" />
      </div>

      <div className="slide-content">
        <div className="text">
          <div className="title-section">
            <MicroLogo />
            <p className="title">PCS v3 Migration</p>
          </div>
          <p className="description">
            Migrate to continue farming CAKE rewards and earning trading fees.
          </p>
        </div>
        <div className="buttons">
          <Button text="Proceed" className="button-style">
            <AiOutlineArrowRight size={20} />
          </Button>
          <Button text="Guide" className="button-style-outline">
            <BiLinkExternal size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
