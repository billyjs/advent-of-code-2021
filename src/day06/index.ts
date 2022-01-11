import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput.split(",").map((value) => parseInt(value, 10));

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const sims = [sim(1, 80), sim(2, 80), sim(3, 80), sim(4, 80), sim(5, 80)];

  let count = 0;
  input.forEach((value) => (count += sims[value - 1]));

  return count;
};

const arr = Array(256).fill(null);
arr[0] = 1;
arr[1] = 2;
const sim = (value: number, days: number): number => {
  if (value >= days) {
    return 1;
  } else if (arr[days - value]) {
    return arr[days - value];
  } else {
    const calc = sim(6, days - value - 1) + sim(8, days - value - 1);
    arr[days - value] = calc;
    return calc;
  }
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const sims = [
    sim(1, 256),
    sim(2, 256),
    sim(3, 256),
    sim(4, 256),
    sim(5, 256),
  ];

  let count = 0;
  input.forEach((value) => (count += sims[value - 1]));

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
