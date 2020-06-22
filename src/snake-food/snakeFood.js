import React from "react";
import "./snake-food.css";
import { SnakeContext } from "../contexts/GameContextProvider";
export default function SnakeFood() {
  return (
    <SnakeContext.Consumer>
      {(context) => {
        return (
          <div
            className="snake-food"
            style={{
              top: `${context.foodTopPosition}`,
              left: `${context.foodLeftPosition}`,
            }}
          />
        );
      }}
    </SnakeContext.Consumer>
  );
}
