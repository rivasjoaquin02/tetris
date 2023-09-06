export const MOVE = {
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
} as const;

export type Move = typeof MOVE;
export type MoveKeys = keyof Move;
