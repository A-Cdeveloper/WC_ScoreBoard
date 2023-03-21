import React from "react";

import SingleGame from "./SingleGame";

export const Games = ({ games, finish, endGameHandler }) => {
  return (
    <div className="results">
      {games.map((game) => {
        return (
          <SingleGame
            key={game.match_id}
            match={game}
            finish={finish}
            onEndGame={endGameHandler}
          />
        );
      })}
    </div>
  );
};

export default Games;
