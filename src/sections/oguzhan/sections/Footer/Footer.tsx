import React from "react";
import "./Footer.scss";
import Logo from "./Components/Logo/Logo";
import CoinPrice from "./Components/CoinPrice/CoinPrice";
import Button from "./Components/Button/Button";
import ThemeSwitch from "../../../../components/ThemeSwitch/ThemeSwitch";
import { AiOutlineArrowRight } from "react-icons/ai";
import LanguageSelector from "../../../../components/LanguageSelector/LanguageSelector";

const Footer = () => {
  return (
    <div className="footer-container">
      <Logo />
      <div className="seperator-component row">
        <div className="space-filler">
          <CoinPrice />
        </div>
        <Button text="Buy CAKE">
          <AiOutlineArrowRight />
        </Button>
      </div>
      <div className=" row">
        <div className="theme-selector">
          <ThemeSwitch />
        </div>
        <LanguageSelector />
      </div>

      <div className="seperator-component row links">
        <div className="column">
          <h3>ABOUT</h3>
          <ul>
            <li>
              <a href="#" className="highlighted-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#">Brand</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Litepaper</a>
            </li>
            <li>
              <a href="#">Terms Of Service</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>ABOUT</h3>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Brand</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Litepaper</a>
            </li>
            <li>
              <a href="#">Terms Of Service</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>ABOUT</h3>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Brand</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Litepaper</a>
            </li>
            <li>
              <a href="#">Terms Of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
