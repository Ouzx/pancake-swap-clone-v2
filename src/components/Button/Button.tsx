import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, children, className }) => {
  return (
    <div className={`button-container ${className} `}>
      {text}
      {children}
    </div>
  );
};

export default Button;
