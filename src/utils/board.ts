import { Board, Coord } from "../types";
import { Tetrominoe } from "../constants/Tetrominoe";
import { COLS, ROWS } from "../constants/Board";

export function createBoard(ROWS: number, COLS: number): Board {
    return Array.from({ length: ROWS }, () => Array(COLS).fill("black"));
}

export function getUpdatedBoard(tetrominoe: Tetrominoe): Board {
    const updatedBoard = createBoard(ROWS, COLS);
    const { coords, currentCoords, color } = tetrominoe;
    const coord = coords[currentCoords]!;

    for (const [x, y] of coord) updatedBoard[x]![y] = color;

    return updatedBoard;
}

function isCoordEscapingBoard(
    coord: Coord,
    boardRow: number,
    boardCol: number
): boolean {
    const [x, y] = coord;
    if (x < 0 || x >= boardRow) return true;
    if (y < 0 || y >= boardCol) return true;
    return false;
}

export function validate(tetrominoe: Tetrominoe): boolean {
    const { coords } = tetrominoe;
    const coord = coords[tetrominoe.currentCoords]!;

    for (const c of coord)
        if (isCoordEscapingBoard(c, ROWS, COLS)) return false;

    return true;
}
