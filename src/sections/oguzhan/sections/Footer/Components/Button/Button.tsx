import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, children }) => {
  return (
    <div className="button-container">
      {text}
      {children}
    </div>
  );
};

export default Button;
