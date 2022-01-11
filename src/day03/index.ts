import run from "aocrunner";

const BITS = 12;

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((line) => parseInt(line, 2));

const gammaReducer = (
  previous: number,
  current: boolean,
  index: number,
): number => {
  const bit = 1 << (BITS - index - 1);
  return current ? previous : previous + bit;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const mc = [];

  for (let i = BITS - 1; i > 0; i--) {
    mc.push(mostCommon(input, i));
  }

  const gamma = mc.reduce(gammaReducer, 0);

  const mask = (1 << 12) - 1;

  const epsilon = mask ^ gamma;

  const power = gamma * epsilon;

  return power;
};

const mostCommon = (input: number[], index: number): boolean => {
  const bit = 1 << index;
  let count = 0;
  for (let num of input) {
    if (num & bit) {
      count++;
    }
  }
  return count >= input.length / 2;
};

const leastCommon = (input: number[], index: number): boolean => {
  const bit = 1 << index;
  let count = 0;
  for (let num of input) {
    if (num & bit) {
      count++;
    }
  }
  return count < input.length / 2;
};

const filterBits = (
  input: number[],
  index: number,
  value: boolean,
): number[] => {
  const bit = 1 << index;
  return input.filter((num) => ((num & bit) === bit) === value);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let oxygenArray = [...input];
  let index = BITS - 1;

  while (oxygenArray.length > 1) {
    oxygenArray = filterBits(
      oxygenArray,
      index,
      mostCommon(oxygenArray, index),
    );
    index--;
  }

  const oxygen = oxygenArray[0];

  let co2Array = [...input];
  index = BITS - 1;

  while (co2Array.length > 1) {
    co2Array = filterBits(co2Array, index, leastCommon(co2Array, index));
    index--;
  }

  const co2 = co2Array[0];

  return oxygen * co2;
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
