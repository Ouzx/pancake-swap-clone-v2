import React from "react";
import "./PsCoin.scss";

import MiniLogo from "../../../assets/icons/MiniLogo";

const PsCoin = () => {
  return (
    <div className="ps-coin">
      <img className="ps-coin__logo" src={MiniLogo} alt="" />
      <span>$3.683</span>
    </div>
  );
};

export default PsCoin;
