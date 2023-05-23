describe("getDistinctLetters", () => {
  test("returns a string of distinct letters in alphabetical order", () => {
    expect(getDistinctLetters("hello", "world")).toBe("dehrw");
    expect(getDistinctLetters("abcde", "defgh")).toBe("abcdefgh");
    expect(getDistinctLetters("open", "close")).toBe("clnoprs");
  });
});
