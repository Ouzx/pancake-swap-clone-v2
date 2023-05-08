import React from "react";

import "./Button.scss";

interface LinkProps {
  title: string;
  children?: React.ReactNode
}

const Button: React.FC<LinkProps> = ({ title, children }) => {
  return (
    <button className="button">
        {title}
        {children}
    </button>
  );
};

export default Button;
