import React from "react";

import Oguzhan from "./sections/oguzhan/Index";
import Khaled from "./sections/khaled/Index";
import Ulas from "./sections/ulas/Index";
import Ozkan from "./sections/ozkan/Index";
import Ahmet from "./sections/ahmet/Index";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Ozkan />
      <Oguzhan />
      <Ulas />
      <Khaled />
      <Ahmet />
    </div>
  );
}

export default App;
