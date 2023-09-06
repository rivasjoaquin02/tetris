export const DIRECTION = {
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
} as const;

export type Move = keyof typeof DIRECTION;
