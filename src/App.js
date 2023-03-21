import { useState } from "react";
import { matches } from "./data/data";

import Games from "./components/Games";

function App() {
  const [liveGames, setLiveGames] = useState(matches);
  const [finishGames, setFinishGames] = useState([]);

  // end game - move finished game from live scoreboard to summaryscoreboard
  const endGameHandler = (id, result) => {
    setFinishGames((prevFinishGames) => {
      const endMatch = liveGames.find((el) => el.match_id === id);
      endMatch.finalResult = result;
      return [endMatch, ...prevFinishGames];
    });
    setLiveGames((prevliveGames) => {
      return prevliveGames.filter((el) => el.match_id !== id);
    });
  };
  //

  return (
    <div className="board">
      {liveGames.length !== 0 && (
        <Games
          games={liveGames}
          finish={false}
          endGameHandler={endGameHandler}
        />
      )}
      {finishGames.length !== 0 && <Games games={finishGames} finish={true} />}
    </div>
  );
}

export default App;
