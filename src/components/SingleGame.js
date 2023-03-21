import React, { useState } from "react";
import { formatResult } from "../utils/arrayFn";

const SingleGame = ({ match, finish, onEndGame }) => {
  const { match_id, teamHome, teamAway, finalResult, resultChanges } = match;
  const [result, setResult] = useState(finalResult);

  const startGameHandler = () => {
    setResult([0, 0]);
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
            <button onClick={() => {}}>UPDATE</button>
            <button onClick={() => onEndGame(match_id, result)}>FINISH</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleGame;
