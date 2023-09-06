import { useEffect, useRef } from "react";
import { useGame } from "./store/store";

import Board from "./components/board/Board";
// import Creator from "./components/creator/Creator";

function App() {
    const spawn = useGame((s) => s.spawn);
    const moveDown = useGame((s) => s.moveDown);
    const moveLeft = useGame((s) => s.moveLeft);
    const moveRight = useGame((s) => s.moveRight);
    const rotate = useGame((s) => s.rotate);

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
            {/* <Creator /> */}
        </div>
    );
}

export default App;
