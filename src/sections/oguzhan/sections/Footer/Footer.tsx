import "./Footer.scss";
import Logo from "./Components/Logo/Logo";
import CoinPrice from "./Components/CoinPrice/CoinPrice";
import Button from "./Components/Button/Button";
import ThemeSwitch from "../../../../components/ThemeSwitch/ThemeSwitch";
import { AiOutlineArrowRight } from "react-icons/ai";
import LanguageSelector from "../../../../components/LanguageSelector/LanguageSelector";
import SocialIcons from "./Components/SocialIcons/SocialIcons";

import { useQuery } from "@tanstack/react-query";
import { iFooter } from "../../../../types/oguz";
import { getFooter } from "../../../../api/oguz";
const Footer = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["footer"],
    queryFn: getFooter,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="row">
          <Logo />
        </div>

        <div className="seperator-component-d row">
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

        <div className="seperator-component-d row ">
          <div className="links">
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

        <div className="row">
          <div className="social-media">
            <SocialIcons />
          </div>
        </div>

        <div className="seperator-component row"></div>
      </div>
    </div>
  );
};

export default Footer;
