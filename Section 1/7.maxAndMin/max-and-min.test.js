describe("max", () => {
  test("returns the maximum value in an array", () => {
    expect(max([1, 5, 3, 8, 2])).toBe(8);
    expect(max([-10, -5, -3, -8, -2])).toBe(-2);
  });

  test("returns 0 for an empty array", () => {
    expect(max([])).toBe(0);
  });
});

describe("min", () => {
  test("returns the minimum value in an array", () => {
    expect(min([1, 5, 3, 8, 2])).toBe(1);
    expect(min([-10, -5, -3, -8, -2])).toBe(-10);
  });

  test("returns 0 for an empty array", () => {
    expect(min([])).toBe(0);
  });
});
