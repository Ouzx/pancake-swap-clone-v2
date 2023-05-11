import React from "react";
import "./UsedByMillions.scss";
import Cards from "./Components/Cards/Cards";

import { PurpleBunny, UsedByMillionsSeperator } from "../../../../assets/icons";

import { useQuery } from "@tanstack/react-query";
import { getUsedByMillions } from "../../../../api/oguz";
import { iUsedByMillions } from "../../../../types/oguz";

const UsedByMillions = () => {
  const {
    isLoading,
    isError,
    data,
    error,
  }: {
    isLoading: boolean;
    isError: boolean;
    data: iUsedByMillions | undefined;
    error: unknown;
  } = useQuery({
    queryKey: ["usedByMillions"],
    queryFn: getUsedByMillions,
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
    <div className="usedByMillions">
      <div className="icon">
        <PurpleBunny />
      </div>
      <h2>
        {data?.title.split(".")[0]}
        <br />
        {data?.title.split(". ")[1]}
      </h2>
      <p>{data?.description}</p>

      <p style={{ fontWeight: "bold" }}>{data?.question}</p>

      <Cards cards={data.cards} />
      <div className="seperator">
        <UsedByMillionsSeperator />
      </div>
    </div>
  );
};

export default UsedByMillions;
