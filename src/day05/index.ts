import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput
    .split("\n")
    .map((line) =>
      line
        .split("-")
        .map((coord) => coord.split(",").map((value) => parseInt(value, 10))),
    );

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  /**
   * (0, y)
   * ^
   * |
   * |
   * (0,0)----> (x, 0)
   */

  /**
   * [
   *  [(x0, y0), (x0, y1), ...]
   *  [(x1, y0), (x1, y1), ...]
   *  ...
   * ]
   */

  const map: number[][] = [];
  for (let i = 0; i < 1000; i++) {
    map.push(Array(1000).fill(0));
  }

  // x is the same
  const vertical = input.filter((value) => value[0][0] === value[1][0]);

  // console.log(vertical.length, vertical[0]);

  vertical.forEach((line) => {
    const x = line[0][0];
    const y0 = line[0][1];
    const y1 = line[1][1];

    const [min, max] = y0 < y1 ? [y0, y1] : [y1, y0];

    for (let i = min; i <= max; i++) {
      map[x][i]++;
    }
  });

  // y is the same
  const horizontal = input.filter((value) => value[0][1] === value[1][1]);

  // console.log(horizontal.length, horizontal[0]);

  horizontal.forEach((line) => {
    const y = line[0][1];
    const x0 = line[0][0];
    const x1 = line[1][0];

    const [min, max] = x0 < x1 ? [x0, x1] : [x1, x0];

    for (let i = min; i <= max; i++) {
      map[i][y]++;
    }
  });

  let count = 0;
  map.forEach((line) =>
    line.forEach((value) => {
      if (value >= 2) {
        count++;
      }
    }),
  );

  return count;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  /**
   * (0, y)
   * ^
   * |
   * |
   * (0,0)----> (x, 0)
   */

  /**
   * [
   *  [(x0, y0), (x0, y1), ...]
   *  [(x1, y0), (x1, y1), ...]
   *  ...
   * ]
   */

  const map: number[][] = [];
  for (let i = 0; i < 1000; i++) {
    map.push(Array(1000).fill(0));
  }

  // x is the same
  const vertical = input.filter((value) => value[0][0] === value[1][0]);

  // console.log(vertical.length, vertical[0]);

  vertical.forEach((line) => {
    const x = line[0][0];
    const y0 = line[0][1];
    const y1 = line[1][1];

    const [min, max] = y0 < y1 ? [y0, y1] : [y1, y0];

    for (let i = min; i <= max; i++) {
      map[x][i]++;
    }
  });

  // y is the same
  const horizontal = input.filter((value) => value[0][1] === value[1][1]);

  // console.log(horizontal.length, horizontal[0]);

  horizontal.forEach((line) => {
    const y = line[0][1];
    const x0 = line[0][0];
    const x1 = line[1][0];

    const [min, max] = x0 < x1 ? [x0, x1] : [x1, x0];

    for (let i = min; i <= max; i++) {
      map[i][y]++;
    }
  });

  // z and y equal distance
  const diagonalForward = input.filter(
    (value) => value[0][0] - value[1][0] === value[0][1] - value[1][1],
  );

  // console.log(diagonalForward.length, diagonalForward[0]);

  diagonalForward.forEach((line) => {
    const x0 = line[0][0];
    const x1 = line[1][0];
    const y0 = line[0][1];
    const y1 = line[1][1];

    const [minX, maxX] = x0 < x1 ? [x0, x1] : [x1, x0];
    const [minY, maxY] = y0 < y1 ? [y0, y1] : [y1, y0];
    const length = maxX - minX;

    for (let i = 0; i <= length; i++) {
      map[minX + i][minY + i]++;
    }
  });

  const diagonalBackwards = input.filter(
    (value) => value[1][0] - value[0][0] === value[0][1] - value[1][1],
  );

  // console.log(diagonalBackwards.length, diagonalBackwards[0]);

  diagonalBackwards.forEach((line) => {
    const x0 = line[0][0];
    const x1 = line[1][0];
    const y0 = line[0][1];
    const y1 = line[1][1];

    const [minX, maxX] = x0 < x1 ? [x0, x1] : [x1, x0];
    const [minY, maxY] = y0 < y1 ? [y0, y1] : [y1, y0];
    const length = maxX - minX;

    for (let i = 0; i <= length; i++) {
      map[minX + i][maxY - i]++;
    }
  });

  let count = 0;
  map.forEach((line) =>
    line.forEach((value) => {
      if (value >= 2) {
        count++;
      }
    }),
  );

  return count;
};

run({
  part1: {
    tests: [
      // { input: ``, expected: "" },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // { input: ``, expected: "" },
    ],
    solution: part2,
  },
  trimTestInputs: true,
});
