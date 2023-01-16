const alternateCase = require("./alternate-case");

describe("alternateCase", () => {
  test("returns a single word in alternating case", () => {
    expect(alternateCase("hello")).toBe("HeLlO");
    expect(alternateCase("HELLO")).toBe("HeLlO");
  });
  test("alternates the case for multiple words", () => {
    expect(alternateCase("hello world")).toBe("HeLlO wOrLd");
  });
});
