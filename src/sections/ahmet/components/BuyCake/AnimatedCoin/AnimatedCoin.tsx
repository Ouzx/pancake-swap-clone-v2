import "./AnimatedCoin.scss";

const AnimatedGraphic = () => {
  return (
    <div className="animated-coin-wrapper">
      <img src="/BuyCake/top-right.webp" alt="" className="cake-placeholder" />

      <img src="/BuyCake/top-right.webp" alt="" className="cake-top-right" />

      <img src="/BuyCake/bottom-right.webp" alt="" className="cake-bottom-right" />

      <img src="/BuyCake/coin.webp" alt="" className="cake-coin" />

      <img src="/BuyCake/top-left.webp" alt="" className="cake-top-left" />
    </div>
  );
};

export default AnimatedGraphic;
