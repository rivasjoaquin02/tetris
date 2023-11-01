import { create } from "zustand";

// Board
import { Board } from "../types";
import { createBoard, getUpdatedBoard, validate } from "../utils/board";
import { GRID, START_POSITION } from "../constants/Board";

// Tetrominoe
import {
    getRandomTetrominoeInPos,
    getMovedTetrominoe,
    getRotatedTetrominoe,
} from "../utils/tetrominoes";
import { Tetrominoe } from "../constants/Tetrominoe";

// Movement
import { DIRECTION, Move } from "../constants/Movement";

type GameState = {
    board: Board;
    currentTetrominoe: Tetrominoe | undefined;
};

type GameActions = {
    spawn: () => void;
    rotate: () => void;
    move: (direction: Move) => void;
    moveDown: () => void;
    moveLeft: () => void;
    moveRight: () => void;
};

type GameStore = GameState & GameActions;

export const useGameStore = create<GameStore>((set, get) => ({
    board: createBoard(GRID),
    currentTetrominoe: undefined,

    spawn: () => {
        const currentTetrominoe = get().currentTetrominoe;
        if (currentTetrominoe) return;

        const tetrominoe = getRandomTetrominoeInPos(START_POSITION, validate);

        if (!tetrominoe) return;

        const newBoard = getUpdatedBoard(tetrominoe);

        set({
            board: newBoard,
            currentTetrominoe: tetrominoe,
        });
    },
    rotate: () => {
        const currentTetrominoe = get().currentTetrominoe;
        if (!currentTetrominoe) return;

        const rotatedTetrominoe = getRotatedTetrominoe(
            currentTetrominoe,
            validate
        );

        if (!rotatedTetrominoe) return;

        const newBoard = getUpdatedBoard(rotatedTetrominoe);

        set({
            board: newBoard,
            currentTetrominoe: rotatedTetrominoe,
        });
    },
    move: (direction: Move) => {
        const currentTetrominoe = get().currentTetrominoe;
        if (!currentTetrominoe) return;

        const movedTetrominoe = getMovedTetrominoe(
            currentTetrominoe,
            direction,
            validate
        );

        if (!movedTetrominoe) return;

        const newBoard = getUpdatedBoard(movedTetrominoe);

        set({
            board: newBoard,
            currentTetrominoe: movedTetrominoe,
        });
    },
    moveDown: () => {
        get().move(DIRECTION.DOWN);
    },
    moveLeft: () => {
        get().move(DIRECTION.LEFT);
    },
    moveRight: () => {
        get().move(DIRECTION.RIGHT);
    },
}));
