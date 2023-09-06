import { Color } from "../types";

type Coord = [number, number];

export type Tetrominoe = {
    coords: Array<Array<Coord>>;
    currentCoords: number;
    color: Color;
};

export const TETROMINOES: Array<Tetrominoe> = [
    {
        coords: [
            [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
            ],
            [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3],
            ],
        ],
        currentCoords: 0,
        color: "aqua",
    },
    {
        coords: [
            [
                [0, 1],
                [1, 1],
                [2, 1],
                [2, 0],
            ],
            [
                [0, 0],
                [1, 0],
                [1, 1],
                [1, 2],
            ],
            [
                [0, 1],
                [0, 0],
                [1, 0],
                [2, 0],
            ],
            [
                [0, 0],
                [0, 1],
                [0, 2],
                [1, 2],
            ],
        ],
        currentCoords: 0,
        color: "blue",
    },
    {
        coords: [
            [
                [0, 0],
                [1, 0],
                [2, 0],
                [2, 1],
            ],
            [
                [1, 0],
                [0, 0],
                [0, 1],
                [0, 2],
            ],
            [
                [0, 0],
                [0, 1],
                [1, 1],
                [2, 1],
            ],
            [
                [0, 2],
                [1, 2],
                [1, 1],
                [1, 0],
            ],
        ],
        currentCoords: 0,
        color: "orange",
    },
    {
        coords: [
            [
                [0, 0],
                [0, 1],
                [1, 0],
                [1, 1],
            ],
        ],
        currentCoords: 0,
        color: "yellow",
    },
    {
        coords: [
            [
                [1, 0],
                [1, 1],
                [0, 1],
                [0, 2],
            ],
            [
                [0, 0],
                [1, 0],
                [1, 1],
                [2, 1],
            ],
            [
                [0, 2],
                [0, 1],
                [1, 1],
                [1, 0],
            ],
            [
                [0, 0],
                [1, 0],
                [1, 1],
                [2, 1],
            ],
        ],
        currentCoords: 0,
        color: "green",
    },
    {
        coords: [
            [
                [0, 0],
                [0, 1],
                [1, 1],
                [0, 2],
            ],
            [
                [0, 1],
                [1, 1],
                [2, 1],
                [1, 0],
            ],
            [
                [0, 1],
                [1, 0],
                [1, 1],
                [1, 2],
            ],
            [
                [0, 0],
                [1, 0],
                [2, 0],
                [1, 1],
            ],
        ],
        currentCoords: 0,
        color: "violet",
    },
    {
        coords: [
            [
                [0, 0],
                [0, 1],
                [1, 1],
                [1, 2],
            ],
            [
                [0, 1],
                [1, 1],
                [1, 0],
                [2, 0],
            ],
            [
                [0, 0],
                [0, 1],
                [1, 1],
                [1, 2],
            ],
            [
                [0, 1],
                [1, 1],
                [1, 0],
                [2, 0],
            ],
        ],
        currentCoords: 0,
        color: "red",
    },
];
