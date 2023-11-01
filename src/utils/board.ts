import { Board, Coord } from "../types";
import { Tetrominoe } from "../constants/Tetrominoe";
import { GRID, Grid } from "../constants/Board";

export function createBoard(GRID: Grid): Board {
    return Array.from({ length: GRID.ROWS }, () =>
        Array(GRID.COLS).fill("black")
    );
}

export function getUpdatedBoard(tetrominoe: Tetrominoe): Board {
    const updatedBoard = createBoard(GRID);
    const { coords, currentCoords, color } = tetrominoe;
    const coord = coords[currentCoords]!;

    for (const [x, y] of coord) updatedBoard[x]![y] = color;

    return updatedBoard;
}

function isCoordEscapingBoard(coord: Coord, GRID: Grid): boolean {
    const [x, y] = coord;
    if (x < 0 || x >= GRID.ROWS) return true;
    if (y < 0 || y >= GRID.COLS) return true;
    return false;
}

export function validate(tetrominoe: Tetrominoe): boolean {
    const { coords } = tetrominoe;
    const currentCoords = coords[tetrominoe.currentCoords]!;

    for (const coord of currentCoords)
        if (isCoordEscapingBoard(coord, GRID)) return false;

    return true;
}
