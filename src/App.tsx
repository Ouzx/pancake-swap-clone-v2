import React from "react";

import Oguzhan from "./sections/oguzhan/Index";
import Khaled from "./sections/khaled/Index";
import Ulas from "./sections/ulas/Index";
import Ozkan from "./sections/ozkan/Index";
import Ahmet from "./sections/ahmet/Index";

import "./App.scss";
import BackToTop from "./components/BackToTop/BackToTop";
import DarkMode from "./components/DarkMode";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Oguzhan />
        <BackToTop />
        <DarkMode />
      </div>
    </ThemeProvider>
  );
}

export default App;
