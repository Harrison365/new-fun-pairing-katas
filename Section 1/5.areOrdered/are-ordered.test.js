describe("areOrdered", () => {
  test("returns true for an array with numbers in ascending order", () => {
    expect(areOrdered([1, 2, 3, 4, 5])).toBe(true);
    expect(areOrdered([10, 20, 30, 40, 50])).toBe(true);
    expect(areOrdered([-5, 0, 5, 10, 15])).toBe(true);
  });

  test("returns false for an array with numbers not in ascending order", () => {
    expect(areOrdered([5, 4, 3, 2, 1])).toBe(false);
    expect(areOrdered([50, 40, 30, 20, 10])).toBe(false);
    expect(areOrdered([15, 10, 5, 0, -5])).toBe(false);
  });

  test("returns false for an empty array", () => {
    expect(areOrdered([])).toBe(false);
  });
});
