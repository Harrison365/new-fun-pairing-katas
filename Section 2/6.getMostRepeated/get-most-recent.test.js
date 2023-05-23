const getMostRepeated = require("./get-most-repeated");
describe("getMostRepeated", () => {
  test("returns the most repeated character ignoring whitespace and special characters", () => {
    expect(getMostRepeated("hello world!")).toBe("l");
    expect(getMostRepeated("abbcccddddeeeee")).toBe("e");
    expect(getMostRepeated("abcdeABCDE")).toBe("E");
  });

  test("returns an empty string for an empty string input", () => {
    expect(getMostRepeated("")).toBe("");
  });
});
