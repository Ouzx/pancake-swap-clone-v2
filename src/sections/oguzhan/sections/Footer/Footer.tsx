import "./Footer.scss";
import Logo from "./Components/Logo/Logo";
import CoinPrice from "./Components/CoinPrice/CoinPrice";
import ThemeSwitch from "../../../../components/ThemeSwitch/ThemeSwitch";
import { AiOutlineArrowRight } from "react-icons/ai";
import LanguageSelector from "../../../../components/LanguageSelector/LanguageSelector";
import SocialIcons from "./Components/SocialIcons/SocialIcons";

import { useQuery } from "@tanstack/react-query";
import { iFooter } from "../../../../types/oguz";
import { getFooter } from "../../../../api/oguz";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
const Footer = () => {
  const {
    isLoading,
    isError,
    data,
    error,
  }: {
    isLoading: boolean;
    isError: boolean;
    data: iFooter | undefined;
    error: Error | null;
  } = useQuery({
    queryKey: ["footer"],
    queryFn: getFooter,
  });

  const [showMeme, setShowMeme] = useState(false);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  if (data === undefined) {
    return <span>No Data</span>;
  }

  const handleMeme = () => {
    setShowMeme(!showMeme);
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
          <div className="meme-div" onClick={handleMeme}>
          <Button text="Buy CAKE">
            <AiOutlineArrowRight />
          </Button>
          </div>
        </div>

        <div className=" row">
          <div className="theme-selector">
            <ThemeSwitch />
          </div>
          <LanguageSelector />
        </div>

        <div className="seperator-component-d row ">
          <div className="links">
            {data?.footer.map((column, index) => {
              return (
                <div className="column" key={index}>
                  <h3>{column.title}</h3>
                  <ul>
                    {column.links.map((link, _index) => {
                      return (
                        <li key={_index}>
                          <a
                            href="#"
                            className={
                              index === 0 && _index === 0
                                ? "highlighted-link"
                                : ""
                            }
                          >
                            {link}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="row">
          <div className="social-media">
            <SocialIcons />
          </div>
        </div>

        <div className="seperator-component row"></div>
      </div>

      {showMeme && (
        <div className="meme">
          <RxCrossCircled className="meme-cross" size={42} onClick={handleMeme}/>
          <img src="/meme.png" alt="Overlay Image" />
        </div>
      )}
    </div>
  );
};

export default Footer;
