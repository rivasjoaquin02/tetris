import { MOVE, MoveKeys } from "../constants";
import { Tetrominoe } from "../store/tetrominoes";

type Coord = [number, number];

export function pickRandomTetrominoe(
    Tetrominoes: Array<Tetrominoe>
): Tetrominoe {
    const randIdx = Math.floor(Math.random() * 10) % Tetrominoes.length;
    return Tetrominoes[randIdx]!;
}

function localToGlobalCoord(localCoord: Coord, globalCoord: Coord): Coord {
    const [localX, localY] = localCoord;
    const [globalX, globalY] = globalCoord;
    return [localX + globalX, localY + globalY];
}

export function localToGlobalCoords(
    localCoords: Tetrominoe["coords"],
    globalPoint: Coord
): Tetrominoe["coords"] {
    const globalCoords: Tetrominoe["coords"] = [];

    for (const coords of localCoords) {
        const localCoords = coords.map((local) =>
            localToGlobalCoord(local, globalPoint)
        );
        globalCoords.push(localCoords);
    }

    return globalCoords;
}

function moveCoords(coord: Coord, direction: MoveKeys): Coord {
    const [x, y] = coord;

    if (direction === MOVE.DOWN) return [x + 1, y];
    if (direction === MOVE.LEFT) return [x, y - 1];
    if (direction === MOVE.RIGHT) return [x, y + 1];

    return [x, y];
}

export function moveTetronoe(
    direction: MoveKeys,
    coords: Tetrominoe["coords"]
): Tetrominoe["coords"] {
    const newCoords: Tetrominoe["coords"] = [];

    for (const coord of coords) {
        const movedCoords = coord.map((coord) => moveCoords(coord, direction));
        newCoords.push(movedCoords);
    }

    return newCoords;
}

export function rotateTetronoe(
    coord: Tetrominoe["coords"]
): Tetrominoe["coords"] {
    const newCoord = [...coord];

    return newCoord;
}
