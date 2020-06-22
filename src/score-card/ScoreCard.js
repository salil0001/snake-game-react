import React from "react";
import "./ScoreCard.css";
import { SnakeContext } from "../contexts/GameContextProvider";

export default function () {
  return (
    <SnakeContext.Consumer>
      {(context) => {
        const { score } = context;
        return (
          <div className="score-position">
            {" "}
            <div>Score :{score}</div>
          </div>
        );
      }}
    </SnakeContext.Consumer>
  );
}
