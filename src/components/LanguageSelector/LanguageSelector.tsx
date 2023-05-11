import React from "react";
import { TbWorld } from "react-icons/tb";
import List from "./List/List";
import "./LanguageSelector.scss";

const LanguageSelector = () => {
  return (
    <div className="langauge-selector">
      <div className="langauge-selector__button">
        <TbWorld size={24} />
        EN
      </div>
      <div className="langauge-selector__content">
        <List />
      </div>
    </div>
  );
};

export default LanguageSelector;
