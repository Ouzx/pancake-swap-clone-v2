import "./AnimatedCake.scss";

const AnimatedCake = () => {
  return (
    <div className="animated-cake-wrapper">
      <div className="left-cakes-div">
        <div className="left-cakes-wrapper">
          <img
            src="/ConnectWallet/left-top.webp"
            alt=""
            className="left-placeholder"
          />
          <img
            src="/ConnectWallet/left-middle.webp"
            alt=""
            className="left-middle-cake"
          />
          <img
            src="/ConnectWallet/left-top.webp"
            alt=""
            className="left-top-cake"
          />
          <img
            src="/ConnectWallet/left-bottom.webp"
            alt=""
            className="left-bottom-cake"
          />
        </div>
      </div>
      <div className="right-cakes-div">
        <div className="right-cakes-wrapper">
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
    </div>
  );
};

export default AnimatedCake;
