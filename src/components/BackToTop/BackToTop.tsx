import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import "./BackToTop.scss";

const PAGE_OFFSET = 100;

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > PAGE_OFFSET) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <AiOutlineArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
