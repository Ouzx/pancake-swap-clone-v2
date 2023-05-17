import React from "react";

import Oguzhan from "./sections/oguzhan/Index";
import Khaled from "./sections/khaled/Index";
import Ulas from "./sections/ulas/Index";
import Ozkan from "./sections/ozkan/Index";
import Ahmet from "./sections/ahmet/Index";

import "./App.scss";
import Link from "./components/link/Link";
import TradeAnything from "./sections/ulas/sections/Trade/TradeAnything"
import Earn from "./sections/ulas/sections/Earn/Earn";

function App() {
  return (
    <div className="App">
      <TradeAnything />
      <Earn />
    </div>
  );
}

export default App;
