import React, { Component } from "react";
import "./GameBoard.css";
import SnakeFood from "../snake-food/snakeFood";
import { SnakeContext } from "../contexts/GameContextProvider";

export default class GameBoardMainLogic extends Component {
  state = {
    snake: [],
    recordFoodPostionTop: null,
    recordFoodPostionLeft: null,
    startGameButtomVisible: false,
  };
  static contextType = SnakeContext;

  componentDidMount() {
    document.body.addEventListener("keyup", this.getKeyCode);
    let newSnake = [];
    for (let i = 0; i < 5; i++)
      newSnake.push(
        <div
          className="small-pixel-block"
          key={`${0}px${3 * i}px`}
          style={{ top: "0%", left: `${3 * i}%` }}
        />
      );
    this.setState({
      snake: newSnake,
    });
  }
  componentWillUnmount() {
    document.body.removeEventListener("keyup", this.getKeyCode);
  }

  alertFunction = (message) => {
    window.alert(`${message}. Your score is ${this.context.score}`);
    window.location.reload();
  };
  async crawlSnake() {
    this.setState({
      startGameButtomVisible: !this.state.startGameButtomVisible,
    });
    let snakeLength = 1,
      increaseSnakeLength = false;
    for (let i = 0; ; i++) {
      if (increaseSnakeLength) snakeLength++;
      if (snakeLength === this.state.snake.length) {
        this.makeSnakeLarger();
        increaseSnakeLength = false;
        snakeLength = 1;
      }
      if (
        this.context.arrowKeyPressedLatest === null ||
        this.context.arrowKeyPressedLatest === "ArrowRight"
      ) {
        let newSnakePosition = this.state.snake;

        let oldLeftPosition = parseInt(
          newSnakePosition[
            newSnakePosition.length - 1
          ].props.style.left.substring(
            0,
            newSnakePosition[newSnakePosition.length - 1].props.style.left
              .length - 1
          )
        );

        let oldTopPosition = parseInt(
          newSnakePosition[
            newSnakePosition.length - 1
          ].props.style.top.substring(
            0,
            newSnakePosition[newSnakePosition.length - 1].props.style.top
              .length - 1
          )
        );

        for (let j = 0; j < newSnakePosition.length - 1; j++) {
          newSnakePosition[j] = newSnakePosition[j + 1];
        }

        newSnakePosition[newSnakePosition.length - 1] = (
          <div
            className="small-pixel-block"
            key={`${oldTopPosition}px${oldLeftPosition + 3}px`}
            style={{
              top: `${oldTopPosition}%`,
              left: `${oldLeftPosition + 3}%`,
            }}
          />
        );

        if (oldLeftPosition + 3 > 99) this.alertFunction("Game Over");

        this.setState({
          snake: newSnakePosition,
        });
      } else if (this.context.arrowKeyPressedLatest === "ArrowDown") {
        let newSnakePosition = this.state.snake;

        let oldLeftPosition = parseInt(
          newSnakePosition[
            newSnakePosition.length - 1
          ].props.style.left.substring(
            0,
            newSnakePosition[newSnakePosition.length - 1].props.style.left
              .length - 1
          )
        );

        let oldTopPosition = parseInt(
          newSnakePosition[
            newSnakePosition.length - 1
          ].props.style.top.substring(
            0,
            newSnakePosition[newSnakePosition.length - 1].props.style.top
              .length - 1
          )
        );

        ////////COPYING PREVIOUS POINTS
        for (let j = 0; j < newSnakePosition.length - 1; j++) {
          newSnakePosition[j] = newSnakePosition[j + 1];
        }

        newSnakePosition[newSnakePosition.length - 1] = (
          <div
            className="small-pixel-block"
            key={`${oldTopPosition}px${oldLeftPosition + 3}px`}
            style={{
              top: `${oldTopPosition + 3}%`,
              left: `${oldLeftPosition}%`,
            }}
          />
        );

        if (oldTopPosition + 3 > 99) this.alertFunction("Game Over");

        this.setState({
          snake: newSnakePosition,
        });
      } else if (this.context.arrowKeyPressedLatest === "ArrowUp") {
        let newSnakePosition = this.state.snake;

        let oldLeftPosition = parseInt(
          newSnakePosition[
            newSnakePosition.length - 1
          ].props.style.left.substring(
            0,
            newSnakePosition[newSnakePosition.length - 1].props.style.left
              .length - 1
          )
        );

        let oldTopPosition = parseInt(
          newSnakePosition[
            newSnakePosition.length - 1
          ].props.style.top.substring(
            0,
            newSnakePosition[newSnakePosition.length - 1].props.style.top
              .length - 1
          )
        );

        ////////COPYING PREVIOUS POINTS
        for (let j = 0; j < newSnakePosition.length - 1; j++) {
          newSnakePosition[j] = newSnakePosition[j + 1];
        }

        newSnakePosition[newSnakePosition.length - 1] = (
          <div
            className="small-pixel-block"
            key={`${oldTopPosition}px${oldLeftPosition + 3}px`}
            style={{
              top: `${oldTopPosition - 3}%`,
              left: `${oldLeftPosition}%`,
            }}
          />
        );

        if (oldTopPosition < 0) this.alertFunction("Game Over");

        this.setState({
          snake: newSnakePosition,
        });
      } else if (this.context.arrowKeyPressedLatest === "ArrowLeft") {
        let newSnakePosition = this.state.snake;

        let oldLeftPosition = parseInt(
          newSnakePosition[
            newSnakePosition.length - 1
          ].props.style.left.substring(
            0,
            newSnakePosition[newSnakePosition.length - 1].props.style.left
              .length - 1
          )
        );

        let oldTopPosition = parseInt(
          newSnakePosition[
            newSnakePosition.length - 1
          ].props.style.top.substring(
            0,
            newSnakePosition[newSnakePosition.length - 1].props.style.top
              .length - 1
          )
        );

        ////////COPYING PREVIOUS POINTS
        for (let j = 0; j < newSnakePosition.length - 1; j++) {
          newSnakePosition[j] = newSnakePosition[j + 1];
        }

        newSnakePosition[newSnakePosition.length - 1] = (
          <div
            className="small-pixel-block"
            key={`${oldTopPosition}px${oldLeftPosition + 3}px`}
            style={{
              top: `${oldTopPosition}%`,
              left: `${oldLeftPosition - 3}%`,
            }}
          />
        );

        if (oldLeftPosition - 3 < 0) this.alertFunction("Game Over");

        this.setState({
          snake: newSnakePosition,
        });
      }
      /////////////Check if snake bite himself.//////////////
      let snakeHeadDomKey = this.state.snake[this.state.snake.length - 1].key;
      if (
        this.state.snake
          .slice(0, this.state.snake.length - 1)
          .some((key) => key.key === snakeHeadDomKey)
      )
        this.alertFunction("Snake Bited Himself");

      /////////////Snake eat the food/////////
      if (this.isSnakeHadMeal(this.state.snake[this.state.snake.length - 1])) {
        this.setState({
          recordFoodPostionTop: this.context.foodTopPosition,
          recordFoodPostionLeft: this.context.foodLeftPosition,
        });
        this.context.changeRandomPosition();
        this.context.updateScore();

        increaseSnakeLength = true;
      }

      await new Promise((res) => {
        setTimeout(function () {
          res("Success!");
        }, 100);
      });
    }
  }
  makeSnakeLarger = () => {
    let newSnake = this.state.snake;
    newSnake.splice(
      0,
      0,
      <div
        className="small-pixel-block"
        key={`${this.state.recordFoodPostionTop}px${this.state.recordFoodPostionLeft}px`}
        style={{
          top: `${this.state.recordFoodPostionTop}%`,
          left: `${this.state.recordFoodPostionLeft}%`,
        }}
      />
    );

    this.setState({
      snake: newSnake,
    });
  };
  isSnakeHadMeal = (snakeHead) => {
    let topPosition = snakeHead.props.style.top;
    let leftPosition = snakeHead.props.style.left;
    if (
      this.context.foodTopPosition === topPosition &&
      this.context.foodLeftPosition === leftPosition
    )
      return true;
    else return false;
  };

  render() {
    return (
      <div
        className="game-board-main-wrapper"
        style={!this.state.startGameButtomVisible ? { background: "#888" } : {}}
      >
        {this.state.snake.map((snakeLayer) => snakeLayer)}
        <SnakeFood />
        <button
          autoFocus
          hidden={this.state.startGameButtomVisible}
          className="start-game"
          onClick={() => this.crawlSnake()}
        >
          Start Game
        </button>
      </div>
    );
  }
}
