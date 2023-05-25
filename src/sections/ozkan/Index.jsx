import React from "react";
import { Home1 } from "./components/Home1";
import SmartHeader from "../../components/SmartHeader/SmartHeader";

const Index = ({ children }) => {
  return (
    <div>
      <SmartHeader />
      <Home1>{children}</Home1>
    </div>
  );
};

export default Index;
