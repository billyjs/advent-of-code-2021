import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const values = input.split("\n").map((val) => parseInt(val, 10));

  const reducer = (
    count: number,
    value: number,
    index: number,
    array: number[],
  ) => {
    if (index === 0) return 0;
    const increase = value > array[index - 1];
    return count + Number(increase);
  };

  return values.reduce(reducer, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const values = input.split("\n").map((val) => parseInt(val, 10));

  let increases = 0;

  for (let i = 0; i < values.length - 2; i++) {
    const increase = values[i + 3] > values[i];
    increases += Number(increase);
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
