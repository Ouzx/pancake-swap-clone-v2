import { ReactElement } from "react";
import { BsCashCoin, BsThreeDots } from "react-icons/bs";
import { RiExchangeDollarLine } from "react-icons/ri";
import { GiJeweledChalice } from "react-icons/gi";
import { FaShapes } from "react-icons/fa";
import { RxExit } from "react-icons/rx";

interface ButtonProps {
  id: number;
  span: {
    SVG: ReactElement;
    TEXT: string;
    DOT?: string;
  };
  links?: ReactElement;
}

const btns: ButtonProps[] = [
  {
    id: 1,
    span: {
      SVG: <RiExchangeDollarLine />,
      TEXT: "Trade",
    },
  },
  {
    id: 2,
    span: {
      SVG: <BsCashCoin />,
      TEXT: "Earn",
    },
    links: (
      <div className="mobile-nav-links-container">
        <a href="#" className="mobile-nav-links">
          Farms
        </a>
        <a href="#" className="mobile-nav-links">
          Pools
        </a>
        <a href="#" className="mobile-nav-links">
          Liquid Stacking
        </a>
      </div>
    ),
  },
  {
    id: 3,
    span: {
      SVG: <GiJeweledChalice />,
      TEXT: "Win",
      DOT: "WinDot",
    },
    links: (
      <div className="mobile-nav-links-container">
        <a href="#" className="mobile-nav-links">
          Trading Reward
          <div className="mobile-nav-links__live">Live</div>
        </a>
        <a href="#" className="mobile-nav-links">
          Trading Competition
        </a>
        <a href="#" className="mobile-nav-links">
          Prediction (BETA)
        </a>
        <a href="#" className="mobile-nav-links">
          Lottery
        </a>
        <a href="#" className="mobile-nav-links">
          Pottery (BETA)
          <div className="mobile-nav-links__potOpen">Pot Open</div>
        </a>
      </div>
    ),
  },
  {
    id: 4,
    span: {
      SVG: <FaShapes />,
      TEXT: "NFT",
    },
    links: (
      <div className="mobile-nav-links-container">
        <a href="#" className="mobile-nav-links">
          Overview
        </a>
        <a href="#" className="mobile-nav-links">
          Collections
        </a>
        <a href="#" className="mobile-nav-links">
          Activity
        </a>
      </div>
    ),
  },
  {
    id: 5,
    span: {
      SVG: <BsThreeDots />,
      TEXT: "",
      DOT: "MenuDot",
    },
    links: (
      <div className="mobile-nav-links-container">
        <a href="#" className="mobile-nav-links">
          Info
        </a>
        <a href="#" className="mobile-nav-links">
          IFO
        </a>
        <a href="#" className="mobile-nav-links">
          Affiliate Program
        </a>
        <a href="#" className="mobile-nav-links">
          Voting
        </a>
        <hr className="mobile-nav-links__hr" />
        <a href="#" className="mobile-nav-links">
          Leaderboard
        </a>
        <hr className="mobile-nav-links__hr" />
        <a href="#" className="mobile-nav-links">
          <div className="mobile-nav-links__svgDiv">
            Blog
            <RxExit />
          </div>
        </a>
        <a href="#" className="mobile-nav-links">
          <div className="mobile-nav-links__svgDiv">
            Docs
            <RxExit />
          </div>
        </a>
      </div>
    ),
  },
];
export default btns;
