import React from "react";
import { formatTime } from "../utils/TimeFormat";

const Results = ({ gameResult, size, goToMenu }) => {
  const clicks = gameResult.score + gameResult.fails;
  const total = ((gameResult.score / clicks) * 100).toFixed();
  return (
    <div className="d-flex justify-content-center">
      <div className="menu d-flex justify-content-center flex-column">
        <div className="game-name">
          <h2>Results</h2>
        </div>
        <div className="description">
          <p>
            Field Size: {size}x{size}
          </p>
          <p>You did it in {formatTime(gameResult.time)}</p>
          <p>Attempts: {clicks}</p>
          <p>Number of incorrect attempts: {gameResult.fails}</p>
          <p>Total Score: {total}%</p>
        </div>
        <button className="menu-btn mt-2" onClick={goToMenu}>
          Menu
        </button>
      </div>
    </div>
  );
};

export default Results;
