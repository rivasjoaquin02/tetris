import { useEffect, useRef } from "react";
import { useGameStore } from "./store/store";

import Board from "./components/board/Board";

function App() {
    const spawn = useGameStore((state) => state.spawn);
    const moveDown = useGameStore((state) => state.moveDown);
    const moveLeft = useGameStore((state) => state.moveLeft);
    const moveRight = useGameStore((state) => state.moveRight);
    const rotate = useGameStore((state) => state.rotate);

    const intervalId = useRef<number>();

    useEffect(() => {
        intervalId.current = setInterval(() => {
            moveDown();
        }, 1000);

        return () => clearInterval(intervalId.current);
    }, []);

    return (
        <div className="app">
            <button type="button" onClick={spawn}>
                spawn
            </button>
            <button type="button" onClick={moveLeft}>
                👈
            </button>
            <button type="button" onClick={moveDown}>
                👇
            </button>
            <button type="button" onClick={moveRight}>
                👉
            </button>
            <button type="button" onClick={rotate}>
                🔄️
            </button>

            <Board />
        </div>
    );
}

export default App;
