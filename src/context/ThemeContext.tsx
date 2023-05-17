import React, { useState, useEffect, useContext } from "react";

const ThemeContext = React.createContext({
  theme: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    const theme = sessionStorage.getItem("theme");
    if (theme) {
      setTheme(theme === "true");
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("theme", theme.toString());
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
