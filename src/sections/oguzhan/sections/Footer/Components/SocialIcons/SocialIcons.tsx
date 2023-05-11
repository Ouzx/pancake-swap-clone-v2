import React from "react";
import { TfiTwitterAlt } from "react-icons/tfi";
import {
  BsTelegram,
  BsInstagram,
  BsGithub,
  BsDiscord,
  BsYoutube,
} from "react-icons/bs";
import { SiReddit } from "react-icons/si";

import "./SocialIcons.scss";

const ICON_SIZE = 20;
const SocialIcons = () => {
  return (
    <div className="social-icons">
      <TfiTwitterAlt size={ICON_SIZE} />
      <BsTelegram size={ICON_SIZE} />
      <SiReddit size={ICON_SIZE} />
      <BsInstagram size={ICON_SIZE} />
      <BsGithub size={ICON_SIZE} />
      <BsDiscord size={ICON_SIZE} />
      <BsYoutube size={ICON_SIZE} />
    </div>
  );
};

export default SocialIcons;
