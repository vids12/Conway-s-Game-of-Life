import "./App.css";
import { useRef, useState } from "react";
import { Grid } from "./components/Grid";
import { gameOfLife, initialState, randomState } from "./utils";

function App() {
  const [grid, setGrid] = useState(() => initialState());
  const [startState, setStartState] = useState(false);
  const runningRef = useRef(startState);

  const startStimulation = () => {
    setStartState(!startState);
    if (!startState) {
      runningRef.current = true;
      setGrid(randomState(grid));
    } else runningRef.current = false;
  };

  const runStimulation = () => {
    if (!runningRef.current) return;
    else {
      setTimeout(() => {
        const stimulatedGrid = gameOfLife(grid);
        setGrid(stimulatedGrid);
      }, 500);
    }
  };
  runStimulation();
  return (
    <div className="main-page">
      <main>
        <header className="heading">
          <h1>Conway's Game of Life</h1>
        </header>
        <section className="play-area">
          <section className="buttons">
            <button onClick={startStimulation}>
              {startState ? "Stop" : "Start"}
            </button>
            <button
              onClick={() => setGrid(randomState(grid))}
              className="random-button"
              disabled={startState}
            >
              Random
            </button>
            <button
              onClick={() => setGrid(gameOfLife(grid))}
              disabled={startState}
            >
              Next
            </button>
          </section>

          <Grid grid={grid} />
        </section>
      </main>
    </div>
  );
}

export default App;
