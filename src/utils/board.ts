import { Board } from "../store/store";
import { Tetrominoe } from "../store/tetrominoes";

export function createBoard(ROWS: number, COLS: number): Board {
    return Array.from({ length: ROWS }, () => Array(COLS).fill("black"));
}

export function addTetrominoeToBoard(
    board: Board,
    tetrominoe: Tetrominoe
): Board {
    const newBoard = [...board];
    const { coords, currentCoords, color } = tetrominoe;
    const coord = coords[currentCoords]!;
    for (const [x, y] of coord) newBoard[x]![y] = color;

    return newBoard;
}
