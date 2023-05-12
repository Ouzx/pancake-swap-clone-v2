import React from "react";
import BuyCake from "./components/BuyCake/BuyCake";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";

const Index = () => {
  return (
    <div style={{"width":"100%"}}>
      <BuyCake />
      <ConnectWallet />
    </div>
  );
};

export default Index;
