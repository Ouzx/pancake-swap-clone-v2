import React from "react";

import { TbWorld } from "react-icons/tb";
import { GoGear } from "react-icons/go";
import { AiFillCaretDown } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

import binanceImg from "./binance.png";
import Button from "../Button/Button";
import PsCoin from "../PsCoin/PsCoin";

import "./Navbar.scss";
import HeaderLogo from "./HeaderLogo";
import HeaderLogoMini from "./HeaderLogoMini";
import NavbarList from "./NavbarLists/NavbarList";
import NavbarLanguageSelector from "./LanguageSelector/NavbarLanguageSelector";

import { openSettings } from "../../Settings/Settings";
import { openConnectWallet1 } from "../../ConnectWallet/ConnectWalletSet";


function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="links">
          <div className="navbar-logo">
            <HeaderLogoMini width={32} />
            <HeaderLogo width={160} />
          </div>

          <nav>
            <span className="navSpan">
              Trade
              <div className="lists-inner">
                <NavbarList
                  barList={[
                    "Swap",
                    "Liquidity",
                    "Perpetual",
                    "Bridge",
                    "Limit(V2)",
                  ]} />
              </div>
            </span>
            <span className="navSpan">
              Earn
              <div className="lists-inner">
                <NavbarList barList={["Farms", "Pools", "Liquid Staking"]} />
              </div>
            </span>
            <span className="navSpan">
              Win
              <div className="lists-inner">
                <NavbarList
                  barList={[
                    "Trading Competition",
                    "Prediction (BETA)",
                    "Lottery",
                    "Pottery (BETA)",
                  ]} />
              </div>
            </span>
            <span className="navSpan">
              NFT
              <div className="lists-inner">
                <NavbarList barList={["Overview", "Collections", "Activity"]} />
              </div>
            </span>
            <span className="navSpan">
              <FiMoreHorizontal size={20} />
              <div className="lists-inner">
                <NavbarList
                  barList={[
                    "Info",
                    "IFO",
                    "Affiliate Program",
                    "Voting",
                    "Leaderboard",
                    "Blog",
                    "Docs",
                  ]} />
              </div>
            </span>
          </nav>
        </div>
        <div className="buttons">
          <div className="coin">
            <PsCoin />
          </div>
          
            {/* <TbWorld style={{ cursor: "pointer" }} size={24} /> */}
            <NavbarLanguageSelector />
          
          <span>
            <GoGear
              onClick={openSettings}
              style={{ cursor: "pointer"}}
              size={24} />
          </span>
          <div className="binance-button small">
            <Button text="" style={{ padding: "0.3rem 1rem" }}>
              <AiFillCaretDown size={18} />
            </Button>
            <img src={binanceImg} alt="binance" />
            <div className="lists-inner">
              <a href="#">
                Select a Network
              </a>
              <a href="#">
                <img src="/ConnectWalletAlt/56.png" alt="" />
                BNB Smart Chain
              </a>
              <a href="#">
                <img src="/ConnectWalletAlt/compass1.png" alt="" />
                Ethereum
              </a>
              <a href="#">
                <img src="/ConnectWalletAlt/apt.png" alt="" />
                Aptos
              </a>  
            </div>
          </div>

          <div className="binance-button medium">
            <Button
              text="BNB"
              style={{
                padding: "0.3rem 1rem",
                paddingLeft: "2.4rem",
                paddingRight: "1rem",
              }}
            >
              <AiFillCaretDown size={18} />
            </Button>
            <img src={binanceImg} alt="binance" />
            <div className="lists-inner">
              <a href="#">
                Select a Network
              </a>
              <a href="#">
                <img src="/ConnectWalletAlt/56.png" alt="" />
                BNB Smart Chain
              </a>
              <a href="#">
                <img src="/ConnectWalletAlt/compass1.png" alt="" />
                Ethereum
              </a>
              <a href="#">
                <img src="/ConnectWalletAlt/apt.png" alt="" />
                Aptos
              </a>  
            </div>
          </div>
          <div className="binance-button big">
            <Button
              text="BNB Smart Chain"
              style={{
                padding: "0.3rem 1rem",
                paddingLeft: "2.4rem",
                paddingRight: "1rem",
              }}
            >
              <AiFillCaretDown size={18} />
            </Button>
            <img src={binanceImg} alt="binance" />
            <div className="lists-inner">
              <a href="#">
                Select a Network
              </a>
              <a href="#">
                <img src="/ConnectWalletAlt/56.png" alt="" />
                BNB Smart Chain
              </a>
              <a href="#">
                <img src="/ConnectWalletAlt/compass1.png" alt="" />
                Ethereum
              </a>
              <a href="#">
                <img src="/ConnectWalletAlt/apt.png" alt="" />
                Aptos
              </a>  
            </div>
          </div>
          <div className="small" onClick={openConnectWallet1}>
            <Button 
              text="Connect" 
              style={{ padding: "0.3rem 1rem" }}
              
            ></Button>
          </div>
          <div className="medium" onClick={openConnectWallet1}>
            <Button text="Connect" 
              style={{ padding: "0.3rem 1rem" }}
              
              ></Button>
          </div>
          <div className="big" onClick={openConnectWallet1}>
            <Button
              text="Connect Wallet"
              style={{ padding: "0.3rem 1rem" }}
              
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
