import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        Learn.Build.<span>Type.</span>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="game">Game</Link>
        </li>
        <li>
          <Link to="highScores">High Scores</Link>
        </li>
        <li>
          <Link to="gameOver">Game Over</Link>
        </li>
      </ul>
    </div>
  );
}
