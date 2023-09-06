import { useMemo, useState } from "react";
import { createBoard } from "../../utils/board";
import { Color } from "../../types";

import "./creator.css";

const LIMIT = 4;

type Coord = [number, number];

function CreatorCell({
    color,
    onClick,
}: {
    color: Color;
    onClick: () => void;
}) {
    const style = { background: color };
    return (
        <button
            type="button"
            className="creator__cell"
            style={style}
            onClick={onClick}
        ></button>
    );
}

function Creator() {
    const [coords, setCoords] = useState<Array<Coord>>([]);

    const handleToggleCell = (row: number, col: number) => {
        if (coords.length === LIMIT) return;

        const newCoords = coords.filter(([x, y]) => x !== row || y !== col);
        newCoords.push([row, col]);
        setCoords(newCoords);
    };

    const board = useMemo(() => {
        const board = createBoard(4, 4);
        for (const [x, y] of coords) board[x]![y] = "green";
        return board;
    }, [coords]);

    return (
        <div className="creator">
            {board.map((row, rowIdx) => (
                <div className="creator__row" key={rowIdx}>
                    {row.map((cellColor, cellIdx) => (
                        <CreatorCell
                            key={cellIdx}
                            color={cellColor}
                            onClick={() => handleToggleCell(rowIdx, cellIdx)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Creator;
