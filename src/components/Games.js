import React from "react";

import { formatResult } from "../utils/arrayFn";

export const Games = ({ games, status }) => {
  return (
    <div className="results">
      {games.map((game) => {
        return (
          <div className="singleMatch">
            <div className="teams">
              {game.teamHome} - {game.teamAway}
            </div>

            <div className="result">
              {game.finalResult.length !== 0 && formatResult(game.finalResult)}
            </div>

            <div className="action">
              <button onClick={() => {}}>START</button>
              <button onClick={() => {}}>UPDATE</button>
              <button onClick={() => {}}>FINISH</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Games;
