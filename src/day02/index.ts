import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map<[string, number]>((line) => {
    const split = line.split(" ");
    return [split[0], parseInt(split[1], 10)];
  });
const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let depth = 0;
  let distance = 0;

  input.forEach((value) => {
    switch (value[0]) {
      case "forward":
        distance += value[1];
        break;
      case "up":
        depth -= value[1];
        break;
      case "down":
        depth += value[1];
        break;
    }
  });

  return depth * distance;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let aim = 0;
  let depth = 0;
  let distance = 0;

  input.forEach((value) => {
    switch (value[0]) {
      case "forward":
        distance += value[1];
        depth += aim * value[1];
        break;
      case "up":
        aim -= value[1];
        break;
      case "down":
        aim += value[1];
        break;
    }
  });

  return depth * distance
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
