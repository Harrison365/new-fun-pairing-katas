const getCentury = require("./get-century");
describe("getCentury", () => {
  test("returns the correct century for years up to 10,000", () => {
    expect(getCentury(1999)).toBe("20th");
    expect(getCentury(2004)).toBe("21st");
    expect(getCentury(1877)).toBe("19th");
    expect(getCentury(10000)).toBe("101st");
  });
});
