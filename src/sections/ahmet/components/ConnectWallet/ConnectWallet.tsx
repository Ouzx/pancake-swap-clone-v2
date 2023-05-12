import Button from "../../../../components/button/Button";
import Link from "../../../../components/link/Link";
import AnimatedCake from "./AnimatedCake/AnimatedCake";
import "./ConnectWallet.scss"

const ConnectWallet = () => {
  return (
    <section className="connect-wallet">
      <AnimatedCake />
      <div className="connect-div-text-wrapper">
        <h2 className="connect-div-header">Start in seconds.</h2>
        <p className="connect-div-info">
          Connect your crypto wallet to start using the app in seconds.
        </p>
        <p className="connect-div-info-strong">No registration needed.</p>
        <div className="connect-button-link-wrapper">
          <Link title="Learn how to start" />
          <Button title="Connect Wallet" />
        </div>
      </div>
    </section>
  );
};

export default ConnectWallet;
