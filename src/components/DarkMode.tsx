import React, { useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";
const DarkMode = () => {
  const { theme } = useThemeContext();

  useEffect(() => {
    if (theme) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, [theme]);

  return null;
};

export default DarkMode;
