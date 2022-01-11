import run from "aocrunner";

const parseInput = (rawInput: string): [number[], number[][]] => {
  const lines = rawInput.split("\n");
  const draw =
    lines
      .shift()
      ?.split(",")
      .map((str) => parseInt(str, 10)) ?? [];
  const boards = [];

  while (lines.length > 0) {
    const board = [];
    lines.shift();
    for (let i = 0; i < LEN; i++) {
      board.push(
        ...(lines
          .shift()
          ?.split(" ")
          .map((str) => parseInt(str, 10)) ?? []),
      );
    }
    boards.push(board);
  }

  return [draw, boards];
};

const LEN = 5;

const checkBingo = (b: boolean[]) => {
  return (
    (b[0] && b[1] && b[2] && b[3] && b[4]) ||
    (b[5] && b[6] && b[7] && b[8] && b[9]) ||
    (b[10] && b[11] && b[12] && b[13] && b[14]) ||
    (b[15] && b[16] && b[17] && b[18] && b[19]) ||
    (b[20] && b[21] && b[22] && b[23] && b[24]) ||
    (b[0] && b[5] && b[10] && b[15] && b[20]) ||
    (b[1] && b[6] && b[11] && b[16] && b[21]) ||
    (b[2] && b[7] && b[12] && b[17] && b[22]) ||
    (b[3] && b[8] && b[13] && b[18] && b[23]) ||
    (b[4] && b[9] && b[14] && b[19] && b[24])
  );
};

const part1 = (rawInput: string) => {
  const [drawList, boards] = parseInput(rawInput);

  const checks: boolean[][] = [];
  for (let i = 0; i < boards.length; i++) {
    checks.push(Array(LEN * LEN).fill(false));
  }

  const hits = Array(boards.length).fill(0);

  try {
    drawList.forEach((draw) => {
      boards.forEach((board, boardIndex) => {
        const foundIndex = board.indexOf(draw);
        if (foundIndex >= 0) {
          checks[boardIndex][foundIndex] = true;
          hits[boardIndex]++;
          if (hits[boardIndex] >= 5 && checkBingo(checks[boardIndex])) {
            throw [boardIndex, draw];
          }
        }
      });
    });
  } catch (e) {
    const [boardIndex, draw] = e as number[];

    const sum = boards[boardIndex].reduce(
      (previous, current, index) =>
        checks[boardIndex][index] ? previous : previous + current,
      0,
    );

    return sum * draw;
  }
};

const part2 = (rawInput: string) => {
  const [drawList, boards] = parseInput(rawInput);

  const checks: boolean[][] = [];
  for (let i = 0; i < boards.length; i++) {
    checks.push(Array(LEN * LEN).fill(false));
  }

  const hits: number[] = Array(boards.length).fill(0);

  let max = 0;
  let maxIndex = 0;

  boards.forEach((board, boardIndex) => {
    for (let i = 0; i < drawList.length; i++) {
      const draw = drawList[i];
      const foundIndex = board.indexOf(draw);
      if (foundIndex >= 0) {
        checks[boardIndex][foundIndex] = true;
        hits[boardIndex]++;
        if (hits[boardIndex] >= 5 && checkBingo(checks[boardIndex])) {
          if (i > max) {
            max = i;
            maxIndex = boardIndex;
          }
          break;
        }
      }
    }
  });

  const sum = boards[maxIndex].reduce(
    (previous, current, index) =>
      checks[maxIndex][index] ? previous : previous + current,
    0,
  );

  return sum * drawList[max];
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
