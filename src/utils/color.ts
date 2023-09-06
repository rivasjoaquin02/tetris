export const COLORS = [
    "black",
    "aqua",
    "blue",
    "orange",
    "yellow",
    "green",
    "violet",
    "red",
];

export function mapColor(n: number): string {
    const idx = Math.abs(n) % COLORS.length;
    return COLORS[idx]!;
}
