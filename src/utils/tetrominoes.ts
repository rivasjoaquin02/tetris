import { DIRECTION, Move } from "../constants/Movement";
import { TETROMINOES, Tetrominoe } from "../constants/Tetrominoe";
import { Coord, Coords } from "../types";

type ValidateFn = (tetrominoe: Tetrominoe) => boolean;

function localToGlobalCoord(localCoord: Coord, globalCoord: Coord): Coord {
    const [localX, localY] = localCoord;
    const [globalX, globalY] = globalCoord;
    return [localX + globalX, localY + globalY];
}

function getGlobalCoords(localCoords: Coords, globalPoint: Coord): Coords {
    const globalCoords: Coords = [];

    for (const coords of localCoords) {
        const localCoords = coords.map((local) =>
            localToGlobalCoord(local, globalPoint)
        );
        globalCoords.push(localCoords);
    }

    return globalCoords;
}

function moveCoord(coord: Coord, direction: Move): Coord {
    const [x, y] = coord;

    if (direction === DIRECTION.DOWN) return [x + 1, y];
    if (direction === DIRECTION.LEFT) return [x, y - 1];
    if (direction === DIRECTION.RIGHT) return [x, y + 1];

    return [x, y];
}

function getRandomTetrominoeInPos(
    point: Coord,
    validate: ValidateFn
): Tetrominoe | undefined {
    const randIdx = Math.floor(Math.random() * 10) % TETROMINOES.length;

    const tetrominoe = TETROMINOES[randIdx]!;
    tetrominoe.coords = getGlobalCoords(tetrominoe.coords, point);

    if (!validate(tetrominoe)) return;

    return tetrominoe;
}

function getMovedTetrominoe(
    tetrominoe: Tetrominoe,
    direction: Move,
    validate: ValidateFn
): Tetrominoe | undefined {
    const movedTetrominoe: Tetrominoe = { ...tetrominoe, coords: [] };

    for (const coord of tetrominoe.coords) {
        const movedCoords = coord.map((coord) => moveCoord(coord, direction));
        movedTetrominoe.coords.push(movedCoords);
    }

    if (!validate(movedTetrominoe)) return;

    return movedTetrominoe;
}

function getRotatedTetrominoe(
    tetrominoe: Tetrominoe,
    validate: ValidateFn
): Tetrominoe | undefined {
    const increasedCurrentCoords =
        (tetrominoe.currentCoords + 1) % tetrominoe.coords.length;

    const rotatedTetrominoe: Tetrominoe = {
        ...tetrominoe,
        currentCoords: increasedCurrentCoords,
    };

    if (!validate(rotatedTetrominoe)) return;

    return rotatedTetrominoe;
}

export { getRandomTetrominoeInPos, getMovedTetrominoe, getRotatedTetrominoe };
