import { getStartInSeconds } from "../../../../api/ahmet";
import Button from "../../../../components/Button/Button";
import Link from "../../../../components/link/Link";
import { iStartInSeconds } from "../../../../types/ahmet";
import AnimatedCake from "./AnimatedCake/AnimatedCake";
import "./ConnectWallet.scss";

import { useQuery } from "@tanstack/react-query";

const ConnectWallet = () => {
  const {
    isLoading,
    isError,
    data,
    error,
  }: {
    isLoading: boolean;
    isError: boolean;
    data: iStartInSeconds | undefined;
    error: unknown;
  } = useQuery({
    queryKey: ["startInSeconds"],
    queryFn: getStartInSeconds,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  if (data === undefined) {
    return <span>undefined</span>;
  }

  return (
    <section className="connect-wallet">
      <AnimatedCake />
      <div className="connect-div-text-wrapper">
        <h2 className="connect-div-header">{data?.header}</h2>
        <p className="connect-div-info">
        {data?.paragraph}
        </p>
        <p className="connect-div-info-strong">{data?.paragraphBold}</p>
        <div className="connect-button-link-wrapper">
          <Link title={data?.linkText} />
          <Button text={data?.buttonText} />
        </div>
      </div>
    </section>
  );
};

export default ConnectWallet;
