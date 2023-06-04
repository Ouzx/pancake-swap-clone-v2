import Button from "../../../../components/Button/Button";
import Link from "../../../../components/link/Link";
import AnimatedGraphic from "./AnimatedCoin/AnimatedCoin";
import CakeStats from "./CakeStats/CakeStats";
import "./BuyCake.scss";
import { iCake } from "../../../../types/ahmet";
import { useQuery } from "@tanstack/react-query";
import { getCake } from "../../../../api/ahmet";

const BuyCake = () => {
  const {
    isLoading,
    isError,
    data,
    error,
  }: {
    isLoading: boolean;
    isError: boolean;
    data: iCake | undefined;
    error: unknown;
  } = useQuery({
    queryKey: ["cake"],
    queryFn: getCake,
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
    <section className="cake-section">
      <div className="cake-div-upper-wrapper">
        <div className="cake-div-text-wrapper">
          <h2 className="cake-div-header">
            <span className="cake-big">{data.headerFirstWord}</span>{data.headerText}
          </h2>
          <p className="cake-div-info">
            {data.paragraphText}
          </p>
          <div className="cake-button-link-wrapper">
            <Button text={data.buttonText} />
            <Link title={data.linkText} />
          </div>
        </div>
        <div className="cake-div-graphic-wrapper">
          <AnimatedGraphic />
        </div>
      </div>
        <CakeStats />
    </section>
  );
};

export default BuyCake;
