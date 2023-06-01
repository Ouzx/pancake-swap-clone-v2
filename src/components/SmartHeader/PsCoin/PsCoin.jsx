import React from "react";
import "./PsCoin.scss";

import MiniLogo from "../../../assets/icons/MiniLogo";

const PsCoin = () => {
  return (
    <div className="ps-coin">
      <div className="ps-coin__logo">
        <MiniLogo />
      </div>
      <span>$3.683</span>
    </div>
  );
};

export default PsCoin;
