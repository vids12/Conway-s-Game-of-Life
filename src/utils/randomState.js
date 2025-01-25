import { patterns } from "./patterns";

export const randomState = (grid) => {
  return grid.map((row, rowIndex) =>
    row.map((cell, colIndex) =>
      patterns.some(([pRow, pCol]) => rowIndex === pRow && colIndex === pCol)
        ? 1
        : cell
    )
  );
};
