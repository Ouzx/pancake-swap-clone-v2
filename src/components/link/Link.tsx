import React from "react";
import { BiLinkExternal } from "react-icons/bi";

import "./Link.scss";

interface LinkProps {
  title: string;
}

const Link: React.FC<LinkProps> = ({ title }) => {
  return (
    <a href="#" className="link">
      {title}
      <BiLinkExternal />
    </a>
  );
};

export default Link;
