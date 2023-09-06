import Board from "./components/board/Board";
import Creator from "./components/creator/Creator";
import { MOVE } from "./constants";
import { useGame } from "./store/store";

function App() {
    const spawn = useGame((s) => s.spawn);
    const move = useGame((s) => s.move);
    const rotate = useGame((s) => s.rotate);

    return (
        <div className="app">
            <button type="button" onClick={spawn}>
                spawn tetronoe
            </button>
            <button type="button" onClick={() => move(MOVE.LEFT)}>
                👈
            </button>
            <button type="button" onClick={() => move(MOVE.DOWN)}>
                👇
            </button>
            <button type="button" onClick={() => move(MOVE.RIGHT)}>
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
