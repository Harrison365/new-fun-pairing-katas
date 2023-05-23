describe("getYearsOfGrowth", () => {
  test("returns the number of years until end population is reached", () => {
    expect(getYearsOfGrowth(1000, 2000, 2, 12)).toBe(25);
    expect(getYearsOfGrowth(500, 1000, 3, 5)).toBe(24);
    expect(getYearsOfGrowth(200, 400, 5, 10)).toBe(20);
  });
});
