import React from "react";
import { TbWorld } from "react-icons/tb";
import List from "./List/NavbarLanList";
import "./NavbarLanguageSelector.scss";

const NavbarLanguageSelector = () => {
  return (
    <div className="navbar-langauge-selector">
      <div className="navbar-langauge-selector__button">
        <TbWorld size={24} />
      </div>
      <div className="navbar-langauge-selector__content">
        <List />
      </div>
    </div>
  );
};

export default NavbarLanguageSelector;
