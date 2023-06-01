import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import "./WalletSlider.scss";
import WalletSlide1 from "./WalletSlide1";

const SLIDES = [
  <WalletSlide1 
    header="Your first step in the DeFi world"
    image="/ConnectWalletAlt/wallet_intro.png" 
    pharase="A Web3 Wallet allows you to send and receive crypto 
    assets like bitcoin, BNB, ETH, NFTs and much more."
  />, 
  <WalletSlide1 
    header="Login using a wallet connection"
    image="/ConnectWalletAlt/world_lock.png" 
    pharase="Instead of setting up new accounts 
    and passwords for every website, simply set up 
    your wallet in one go, and connect it to your favorite DApps."
  />, 
];


const WalletSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextSlide(-1),
    onSwipedRight: () => handleNextSlide(1),
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => {
        if (prev === SLIDES.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [activeSlideIndex]);

  const handleNextSlide = (direction: number) => {
    if (direction === 1) {
      setActiveSlideIndex((prev) => {
        if (prev === SLIDES.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    } else {
      setActiveSlideIndex((prev) => {
        if (prev === 0) {
          return SLIDES.length - 1;
        }
        return prev - 1;
      });
    }
  };

  return (
    <div className="wallet-updated-slider-container" style={{marginTop: "5em"}}>
      <div {...handlers} className="slide-container">
        {SLIDES[activeSlideIndex]}
      </div>
      <div className="wallet-slider-buttons-container">
        {SLIDES.map((_, index) => (
          <div
            key={"button" + index}
            className={`wallet-slider-button ${
              index === activeSlideIndex ? "active" : ""
            }`}
            onClick={() => setActiveSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WalletSlider;
