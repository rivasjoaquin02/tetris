import { useGame } from "../../store/store";
import { Color } from "../../types";

import "./board.css";

function BoardCell({ color }: { color: Color }) {
    const style = { background: color };
    return <div className="board__cell" style={style}></div>;
}

function BoardRow({ cells }: { cells: Array<string> }) {
    return (
        <div className="board__row">
            {cells.map((cellColor, cellIdx) => (
                <BoardCell key={cellIdx} color={cellColor} />
            ))}
        </div>
    );
}

function Board() {
    const { board } = useGame((s) => s.state);

    return (
        <div className="board">
            {board.map((row, rowIdx) => (
                <BoardRow key={rowIdx} cells={row} />
            ))}
        </div>
    );
}

export default Board;
