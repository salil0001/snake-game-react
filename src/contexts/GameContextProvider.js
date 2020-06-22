import React, { createContext, Component } from "react";

export const SnakeContext = createContext();

export default class GameContextProvider extends Component {
  state = {
    score: 0,
    arrowKeyPressedLatest: null,
    foodTopPosition: "9%",
    foodLeftPosition: "9%",
  };

  componentDidMount() {
    document.body.addEventListener("keyup", this.getKeyCode);
  }
  componentWillUnmount() {
    document.body.removeEventListener("keyup", this.getKeyCode);
  }

  updateScore = () => {
    this.setState({ score: this.state.score + 5 });
  };
  changeRandomPosition = () => {
    this.setState({
      foodTopPosition: this.randomMultiple3(),
      foodLeftPosition: this.randomMultiple3(),
    });
  };
  randomMultiple3 = () => {
    return `${Math.round((Math.random() * (1 - 100) + 100) / 10) * 3 * 3}%`;
  };

  getKeyCode = (event) => {
    const newKeyPress = event.code;
    if (
      newKeyPress === "ArrowLeft" &&
      this.state.arrowKeyPressedLatest === "ArrowRight"
    ) {
      this.setState({
        arrowKeyPressedLatest: "ArrowRight",
      });
    } else if (
      newKeyPress === "ArrowUp" &&
      this.state.arrowKeyPressedLatest === "ArrowDown"
    ) {
      this.setState({
        arrowKeyPressedLatest: "ArrowDown",
      });
    } else if (
      newKeyPress === "ArrowRight" &&
      this.state.arrowKeyPressedLatest === "ArrowLeft"
    ) {
      this.setState({
        arrowKeyPressedLatest: "ArrowLeft",
      });
    } else if (
      newKeyPress === "ArrowDown" &&
      this.state.arrowKeyPressedLatest === "ArrowUp"
    ) {
      this.setState({
        arrowKeyPressedLatest: "ArrowUp",
      });
    } else if (
      newKeyPress === "ArrowLeft" &&
      this.state.arrowKeyPressedLatest === null
    ) {
      this.setState({
        arrowKeyPressedLatest: "ArrowRight",
      });
    } else {
      this.setState({
        arrowKeyPressedLatest: newKeyPress,
      });
    }
  };

  render() {
    return (
      <SnakeContext.Provider
        value={{
          ...this.state,
          updateScore: this.updateScore,
          getKeyCode: this.getKeyCode,
          changeRandomPosition:this.changeRandomPosition
        }}
      >
        {this.props.children}
      </SnakeContext.Provider>
    );
  }
}
