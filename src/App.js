import { useState } from "react";
import { matches } from "./data/data";

import Games from "./components/Games";

function App() {
  const [liveGames, setLiveGames] = useState(matches);
  const [finishGames, setFinishGames] = useState([]);
  return (
    <div className="board">
      {liveGames.length !== 0 && <Games games={liveGames} finish={false} />}
      {finishGames.length !== 0 && <Games games={finishGames} finish={true} />}
    </div>
  );
}

export default App;
