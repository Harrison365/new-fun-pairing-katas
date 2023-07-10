const sumArgs = require("./sum-args");

describe("sumArgs", () => {
  test("returns the sum of multiple arguments", () => {
    expect(sumArgs(1, 2, 3)).toBe(6);
    expect(sumArgs(10, 20, 30, 40)).toBe(100);
    expect(sumArgs(-5, 10, -3, 8, 2)).toBe(12);
  });

  test("returns the argument itself when only one argument is given", () => {
    expect(sumArgs(5)).toBe(5);
    expect(sumArgs(-10)).toBe(-10);
    expect(sumArgs(0)).toBe(0);
  });

  test("returns 0 when no arguments are given", () => {
    expect(sumArgs()).toBe(0);
  });
});
