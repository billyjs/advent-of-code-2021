import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput.split(",").map((value) => parseInt(value, 10));

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let lastFuel = calc(input, 0);

  for (let i = 1; i < 1000; i++) {
    const fuel = calc(input, i);
    if (lastFuel < fuel) {
      return lastFuel;
    } else {
      lastFuel = fuel;
    }
  }
};

const calc = (input: number[], target: number) => {
  let count = 0;
  input.forEach((value) => {
    count += Math.abs(value - target);
  });
  return count;
};

const calc2 = (input: number[], target: number) => {
  let count = 0;
  input.forEach((value) => {
    const diff = Math.abs(value - target);
    count += (diff * (diff + 1)) / 2;
  });
  return count;
};

/**
 * 5
 * -> 1 + 2 + 3 + 4 + 5
 * 5(5 + 1) / 2
 */

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let lastFuel = calc2(input, 0);

  for (let i = 1; i < 1000; i++) {
    const fuel = calc2(input, i);
    if (lastFuel < fuel) {
      return lastFuel;
    } else {
      lastFuel = fuel;
    }
  }
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
