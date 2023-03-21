import { useState } from "react";
import { matches } from "./data/data";

import { formatResult } from "./utils/arrayFn";

function App() {
  const [liveGames, setLiveGames] = useState(matches);
  const [finishGames, setFinishGames] = useState([]);
  return (
    <div className="board">
      {/* live games */}
      <div className="results">
        {liveGames.map((game) => {
          return (
            <div className="singleMatch">
              <div className="teams">
                {game.teamHome} - {game.teamAway}
              </div>

              <div className="result">
                {game.finalResult.length !== 0 &&
                  formatResult(game.finalResult)}
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

      {/* finished games */}

      <div className="results">
        {finishGames.map((game) => {
          return (
            <div className="singleMatch">
              <div className="teams">
                {game.teamHome} - {game.teamAway}
              </div>

              <div className="result">
                {game.finalResult.length !== 0 &&
                  formatResult(game.finalResult)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
