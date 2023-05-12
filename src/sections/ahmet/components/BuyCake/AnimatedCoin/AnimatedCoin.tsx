import "./AnimatedCoin.scss";

const AnimatedGraphic = () => {
  return (
    <div className="animated-coin-wrapper">
      <img src="/BuyCake/top-right.webp" alt="" className="cake-top-right" />

      <img src="/BuyCake/top-left.webp" alt="" className="cake-top-left" />

      <img src="/BuyCake/bottom-right.webp" alt="" className="cake-bottom-right" />

      <img src="/BuyCake/coin.webp" alt="" className="cake-coin" />
    </div>
  );
};

export default AnimatedGraphic;
