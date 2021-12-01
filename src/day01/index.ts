import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((val) => parseInt(val, 10));

const part1 = (rawInput: string) => {
  const values = parseInput(rawInput);

  const max = values.length - 1;

  let increases = 0;

  for (let i = 0; i < max; i++) {
    values[i + 1] > values[i] && increases++;
  }

  return increases;
};

const part2 = (rawInput: string) => {
  const values = parseInput(rawInput);

  const max = values.length - 2;

  let increases = 0;

  for (let i = 0; i < max; i++) {
    values[i + 3] > values[i] && increases++;
  }

  return increases;
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
