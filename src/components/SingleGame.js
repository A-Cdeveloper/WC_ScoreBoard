import React, { useState } from "react";
import { formatResult } from "../utils/arrayFn";

const SingleGame = ({ match, finish }) => {
  const { match_id, teamHome, teamAway, finalResult, resultChanges } = match;
  return (
    <div className="singleMatch">
      <div className="teams">
        {teamHome} - {teamAway}
      </div>

      <div className="result">
        {finalResult.length !== 0 && formatResult(finalResult)}
      </div>
      {!finish && (
        <div className="action">
          <button onClick={() => {}}>START</button>
          <button onClick={() => {}}>UPDATE</button>
          <button onClick={() => {}}>FINISH</button>
        </div>
      )}
    </div>
  );
};

export default SingleGame;
