import React from "react";
import "./UsedByMillions.scss";
import Cards from "./Components/Cards/Cards";

import { PurpleBunny, UsedByMillionsSeperator } from "../../../../assets/icons";
import { useQuery } from "@tanstack/react-query";
import { getUsedByMillions } from "../../../../api/oguz";
import { iUsedByMillions } from "../../../../types/oguz";
const UsedByMillions = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["footer"],
    queryFn: getUsedByMillions,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  return (
    <div className="usedByMillions">
      <div className="icon">
        <PurpleBunny />
      </div>
      <h2>
        Used By Millions.
        <br />
        Trusted with billions.
      </h2>
      <p>
        PancakeSwap has the most users of any decentralized platform, ever. And
        those users are now entrusting the platform with over $2.2 billion in
        funds.
      </p>

      <p style={{ fontWeight: "bold" }}>Will you join them?</p>

      <Cards />
      <div className="seperator">
        <UsedByMillionsSeperator />
      </div>
    </div>
  );
};

export default UsedByMillions;
