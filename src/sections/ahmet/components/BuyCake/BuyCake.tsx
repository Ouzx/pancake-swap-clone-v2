import Button from "../../../../components/button/Button";
import Link from "../../../../components/link/Link";
import AnimatedGraphic from "./AnimatedCoin/AnimatedCoin";
import CakeStats from "./CakeStats/CakeStats";
import "./BuyCake.scss";



const BuyCake = () => {

  return (
    <section className="cake-section">
      <div className="cake-div-upper-wrapper">
        <div className="cake-div-text-wrapper">
          <h2 className="cake-div-header">
            <span className="cake-big">CAKE</span> makes our world go round.
          </h2>
          <p className="cake-div-info">
            CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win
            it, farm it, spend it, stake it... heck, you can even vote with it!
          </p>
          <div className="cake-button-link-wrapper">
            <Button text="Buy CAKE" />
            <Link title="Learn" />
          </div>
        </div>
        <div className="cake-div-graphic-wrapper">
          <AnimatedGraphic />
        </div>
      </div>
      <div className="cake-div-stats-wrapper">
        <CakeStats />
      </div>
    </section>
  );
};

export default BuyCake;
