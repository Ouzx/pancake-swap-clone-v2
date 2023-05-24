import "./AnimatedCake.scss";

const AnimatedCake = () => {
  return (
    // <div className="animated-cake-div">
      <div className="animated-cake-wrapper">
        {/* <img src="" alt="" style={{width: "256px", height: "256px"}}/> */}
        <div className="left-cakes-div">
          <img
            src="/ConnectWallet/left-top.webp"
            alt=""
            className="left-placeholder"
          />
          <img
            src="/ConnectWallet/left-top.webp"
            alt=""
            className="left-top-cake"
          />
          <img
            src="/ConnectWallet/left-middle.webp"
            alt=""
            className="left-middle-cake"
          />
          <img
            src="/ConnectWallet/left-bottom.webp"
            alt=""
            className="left-bottom-cake"
          />
        </div>
        <div className="right-cakes-div">
          <img
            src="/ConnectWallet/right-top.webp"
            alt=""
            className="right-placeholder"
          />
          <img
            src="/ConnectWallet/right-top.webp"
            alt=""
            className="right-top-cake"
          />
          <img
            src="/ConnectWallet/right-middle.webp"
            alt=""
            className="right-middle-cake"
          />
          <img
            src="/ConnectWallet/right-bottom.webp"
            alt=""
            className="right-bottom-cake"
          />
        </div>
      </div>
    // </div>
  );
};

export default AnimatedCake;
