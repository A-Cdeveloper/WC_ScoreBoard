import React from "react";

import SingleGame from "./SingleGame";

export const Games = ({ games, finish }) => {
  return (
    <div className="results">
      {games.map((game) => {
        return <SingleGame key={game.match_id} match={game} finish={finish} />;
      })}
    </div>
  );
};

export default Games;
