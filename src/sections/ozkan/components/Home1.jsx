import React from "react";
import Hero from "./Hero/Hero";

import "./Home1.scss";
import Gradient from "./Gradient/Gradient";

export const Home1 = ({ children }) => {
  return (
    <div className="home1-container">
      <div className="home1-inner">
        <Gradient />
        {children}
        <Hero />
      </div>
    </div>
  );
};
