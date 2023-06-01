import React from "react";
import "./Button.scss";
const Button = ({ text, style, children, onClick }) => {
  return (
    <button style={style} className="general-button" onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
