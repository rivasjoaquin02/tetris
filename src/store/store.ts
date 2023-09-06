import { create } from "zustand";

import { Color } from "../types";
import { MoveKeys } from "../constants";
import { TETROMINOES, Tetrominoe } from "./tetrominoes";
import { createBoard, addTetrominoeToBoard } from "../utils/board";
import {
    pickRandomTetrominoe,
    localToGlobalCoords,
    moveTetronoe,
} from "../utils/tetrominoes";

const COLS = 10;
const ROWS = 20;
const SPAWN_IDX: [number, number] = [0, 4];

export type Board = Array<Array<Color>>;

export const useGame = create<{
    board: Board;
    currentTetrominoe: Tetrominoe | undefined;
    spawn: () => void;
    move: (direction: MoveKeys) => void;
    rotate: () => void;
}>((set, get) => ({
    board: createBoard(ROWS, COLS),
    currentTetrominoe: undefined,
    spawn: () => {
        if (get().currentTetrominoe) return;

        const tetrominoe = pickRandomTetrominoe(TETROMINOES);
        tetrominoe.coords = localToGlobalCoords(tetrominoe.coords, SPAWN_IDX);

        const newBoard = addTetrominoeToBoard(get().board, tetrominoe);

        set({
            board: newBoard,
            currentTetrominoe: tetrominoe,
        });
    },
    move: (direction: MoveKeys) => {
        const currentTetrominoe = get().currentTetrominoe;
        if (!currentTetrominoe) return;

        const movedTetrominoe = { ...currentTetrominoe };
        movedTetrominoe.coords = moveTetronoe(
            direction,
            movedTetrominoe.coords
        );

        const newBoard = addTetrominoeToBoard(
            createBoard(ROWS, COLS),
            movedTetrominoe
        );
        set({
            board: newBoard,
            currentTetrominoe: movedTetrominoe,
        });
    },
    rotate: () => {
        const currentTetrominoe = get().currentTetrominoe;
        if (!currentTetrominoe) return;

        const rotatedTetrominoe = { ...currentTetrominoe };
        rotatedTetrominoe.currentCoords =
            (rotatedTetrominoe.currentCoords + 1) %
            rotatedTetrominoe.coords.length;

        const newBoard = addTetrominoeToBoard(
            createBoard(ROWS, COLS),
            rotatedTetrominoe
        );
        set({
            board: newBoard,
            currentTetrominoe: rotatedTetrominoe,
        });
    },
}));
