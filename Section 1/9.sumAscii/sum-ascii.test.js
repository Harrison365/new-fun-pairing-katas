describe("sumAscii", () => {
  test("returns the name with the highest score", () => {
    const names = ["John", "Alice", "Bob"];
    expect(sumAscii(names)).toBe("Alice");
  });

  test("returns an empty string when the array is empty", () => {
    const names = [];
    expect(sumAscii(names)).toBe("");
  });

  test("handles names with different lengths", () => {
    const names = ["John", "Alice", "Bob", "Emma"];
    expect(sumAscii(names)).toBe("Alice");
  });

  test("handles names with the same ASCII score", () => {
    const names = ["John", "alice", "Bob", "emma"];
    expect(sumAscii(names)).toBe("John");
  });

  test("ignores leading and trailing spaces in names", () => {
    const names = ["  John", "Alice  ", "  Bob  "];
    expect(sumAscii(names)).toBe("Alice");
  });
});
