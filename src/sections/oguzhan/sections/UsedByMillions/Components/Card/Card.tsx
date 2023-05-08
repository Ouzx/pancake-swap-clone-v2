import React from "react";
import "./Card.scss";

interface Props {
  number: string;
  adj: string;
  description: string;
  color: string;
  children: React.ReactNode;
}

const Card = (props: Props) => {
  return (
    <div className="usedByMillions__card">
      <div className="icon" style={{ fill: props.color }}>
        {props.children}
      </div>
      <span className="number">{props.number}</span>
      <br />
      <span className="adj" style={{ color: props.color }}>
        {props.adj}
      </span>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Card;
