import React, { useState } from "react";
import { formatResult } from "../utils/arrayFn";

const SingleGame = ({ match, finish, onEndGame = null }) => {
  const { match_id, teamHome, teamAway, finalResult, resultChanges } = match;
  const [result, setResult] = useState(finalResult);

  const startGameHandler = () => {
    setResult([0, 0]);
  };

  const updateGameHandler = () => {
    const updateScore = resultChanges.shift();
    if (updateScore) {
      setResult((prevResult) => {
        return prevResult.map((el, i) => el + updateScore[i]);
      });
    }
  };

  return (
    <div className="singleMatch">
      <div className="teams">
        {teamHome} - {teamAway}
      </div>

      <div className="result">
        {result.length !== 0 && formatResult(result)}
      </div>

      <div className="action">
        {!finish && result.length === 0 && (
          <button onClick={() => startGameHandler(match_id)}>START</button>
        )}
        {!finish && result.length !== 0 && (
          <>
            <button
              onClick={() => updateGameHandler(match_id)}
              disabled={resultChanges.length === 0}
            >
              UPDATE
            </button>

            <button onClick={() => onEndGame(match_id, result)}>FINISH</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleGame;
