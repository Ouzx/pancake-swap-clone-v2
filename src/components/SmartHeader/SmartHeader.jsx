import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import "./SmartHeader.scss";

let prevScrollPosition = window.pageYOffset;
const SmartHeader = () => {
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    // Add scroll event listener to window
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    // If scrolling down and header is visible, hide it
    if (currentScrollPosition > prevScrollPosition) {
      setHeaderVisible(false);
    }
    // If scrolling up and header is hidden, show it
    else if (currentScrollPosition < prevScrollPosition) {
      setHeaderVisible(true);
    }

    prevScrollPosition = currentScrollPosition;
  };

  return (
    <header className={`header ${headerVisible ? "" : "hidden"}`}>
      <HeaderTopBar />
      <Navbar />
    </header>
  );
};

export default SmartHeader;
