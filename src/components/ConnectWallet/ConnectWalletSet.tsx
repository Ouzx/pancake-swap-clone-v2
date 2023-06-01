import React, { useState, useEffect, useRef } from 'react';

import "./ConnectWalletSet.scss";
import WalletImages from './WalletImages';
import { BiLinkExternal } from 'react-icons/bi';
import WalletSlider from './WalletSlider/WalletSlider';


export const openConnectWallet1 = () => {
  const wallet = document.querySelector(".connectWallet-container");
  wallet?.classList.add("connectWallet-active");
} ;

const ConnectWalletSet = () => {
  const [activeButton, setActiveButton] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const [more, setMore] = useState(false);

  // Toggle between "Connect Wallet" and "What's a Web3 Wallet?"
  const [web3, setWeb3] = useState(false);  
 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeSettings();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

   const closeSettings = () => {
    const wallet = document.querySelector(".connectWallet-container");
    wallet?.classList.remove("connectWallet-active");
    setMore(false);
  };

  return (
    <div className='connectWallet-container'
    onClick={(e) => {
      e.stopPropagation();
    }}
    >
      <div className='connectWallet-wrapper' ref={menuRef}>
        <div className='connectWallet-header'>
          <button onClick={() => setWeb3(false)}>
            Connect Wallet
          </button>
          <button onClick={() => setWeb3(true)}>
            What's a Web3 Wallet?
          </button>
        </div>
        {!web3 && <div className='connectWallet-main'>
          <div className='connectWallet-main-left'>
            <div  className='connectWallet-main-left-context'>
              <h4>Connect Wallet</h4>
              <div>Start by connecting with one of the wallets below. 
                Be sure to store your private keys or seed phrase securely. 
                Never share them with anyone.
              </div>
            </div>
            <div className='connectWallet-main-left-images'>
              <WalletImages WalletImg="/ConnectWalletAlt/metamask.png" WalletPhrase="Metamask" />
              <WalletImages WalletImg="/ConnectWalletAlt/binance.png" WalletPhrase="Binance Wallet" />
              <WalletImages WalletImg="/ConnectWalletAlt/coinbase.png" WalletPhrase="Coinbase Wallet" />
              <WalletImages WalletImg="/ConnectWalletAlt/trust.png" WalletPhrase="Trust Wallet" />
              <WalletImages WalletImg="/ConnectWalletAlt/walletconnect.png" WalletPhrase="WalletConnect" />
              {!more &&<div onClick={() => setMore(true)}>
              <WalletImages WalletImg="..." WalletPhrase="More"/>
              </div>}
              {more && <WalletImages WalletImg="/ConnectWalletAlt/opera.png" WalletPhrase="Opera Wallet" />}
              {more && <WalletImages WalletImg="/ConnectWalletAlt/brave.png" WalletPhrase="Brave Wallet" />}
              {more && <WalletImages WalletImg="/ConnectWalletAlt/mathwallet.png" WalletPhrase="MathWallet" />}
              {more && <WalletImages WalletImg="/ConnectWalletAlt/tokenpocket.png" WalletPhrase="TokenPOcket" />}
              {more && <WalletImages WalletImg="/ConnectWalletAlt/safepal.png" WalletPhrase="SafePal" />}
              {more && <WalletImages WalletImg="/ConnectWalletAlt/coin98.png" WalletPhrase="Coin98" />}
              {more && <WalletImages WalletImg="/ConnectWalletAlt/blocto.png" WalletPhrase="Blocto" />}
              {more && <WalletImages WalletImg="/ConnectWalletAlt/ledger.png" WalletPhrase="Ledger" />}

            </div>
          </div>
          <div className='connectWallet-main-right'>
            <h1>Haven’t got a wallet yet?</h1>
            <img src="/ConnectWalletAlt/wallet_intro.png" alt="wallet_intro" />
            <a href="#">
            Learn How to Connect
            <BiLinkExternal size={20}/>
            </a>
          </div>
        </div>}
        { web3 && 
        <div className='web3Wallet'>
          <div>
          <WalletSlider />
          </div>
          <a href="#">
            Learn How to Connect
            <BiLinkExternal size={20}/>
          </a>
        </div> }
      </div>
    </div>
  )
}

export default ConnectWalletSet;