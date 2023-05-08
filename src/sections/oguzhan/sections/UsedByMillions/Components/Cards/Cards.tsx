import Card from "../Card/Card";
import "./Cards.scss";

import { People, Trade, Graph } from "../../../../../../assets/icons";

const Cards = () => {
  return (
    <div className="usedByMillions__cards">
      <Card
        number="1.5 million"
        adj="users"
        description="in the last 30 days"
        color="#7645D9"
      >
        <People />
      </Card>
      <Card
        number="20 million"
        adj="trades"
        description="made in the last 30 days"
        color="#1FC7D4"
      >
        <Trade />
      </Card>
      <Card
        number="$2.2 billion"
        adj="staked"
        description="total value locked"
        color="#ED4B9E"
      >
        <Graph />
      </Card>
    </div>
  );
};

export default Cards;
