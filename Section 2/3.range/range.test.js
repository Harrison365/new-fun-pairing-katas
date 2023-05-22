const range = require("./range");

describe("range(length, start, step)", () => {
  test("if given only a length, it should return an array of numbers from 0 with length specified", () => {
    expect(range(0)).toEqual([]);
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });
  test("if given a start value the returned array should start at this value instead of 0", () => {
    expect(range(5, 2)).toEqual([2, 3, 4, 5, 6]);
  });
  test("if given a step value the numbers in the array should increase by the specified step", () => {
    expect(range(5, 2, 2)).toEqual([2, 4, 6, 8, 10]);
  });
});
