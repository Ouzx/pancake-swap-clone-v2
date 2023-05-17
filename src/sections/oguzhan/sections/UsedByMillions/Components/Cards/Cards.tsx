import Card from "../Card/Card";
import "./Cards.scss";

import { People, Trade, Graph } from "../../../../../../assets/icons";
import { Card as iCard } from "../../../../../../types/oguz";

const Cards = ({ cards }: { cards: iCard[] }) => {
  return (
    <div className="usedByMillions__cards">
      <Card
        number={cards[0].number}
        adj={cards[0].adj}
        description={cards[0].description}
        color="#7645D9"
      >
        <People />
      </Card>
      <Card
        number={cards[1].number}
        adj={cards[1].adj}
        description={cards[1].description}
        color="#1FC7D4"
      >
        <Trade />
      </Card>
      <Card
        number={cards[2].number}
        adj={cards[2].adj}
        description={cards[2].description}
        color="#ED4B9E"
      >
        <Graph />
      </Card>
    </div>
  );
};

export default Cards;
