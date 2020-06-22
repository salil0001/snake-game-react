import React from "react";
import './App.css';
import GameBoard from "./snake-game-board/GameBoard";
import GameContextProvider from './contexts/GameContextProvider';
import ScoreCard from './score-card/ScoreCard';
function App() {
  return (
    <GameContextProvider>
      <GameBoard />
      <ScoreCard />
    </GameContextProvider>

 )
}

export default App;
