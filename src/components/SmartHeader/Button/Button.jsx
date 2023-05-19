import React from "react";
import "./Button.scss";
const Button = ({ text, style, children }) => {
  return (
    <button style={style} className="general-button">
      {text}
      {children}
    </button>
  );
};

export default Button;
