import { useQuery } from "@tanstack/react-query";
import { iCake } from "../../../../../types/ahmet";
import StatSection from "../StatSection/StatSection";
import { getCake } from "../../../../../api/ahmet";
import "./CakeStats.scss";

const CakeStats = () => {
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
    <div className="cake-stats-div">
      {data.blocks.map((el, index) =><StatSection key={index} entry={el.entry} data={el.data} />)}
    </div>
  );
};

export default CakeStats;
