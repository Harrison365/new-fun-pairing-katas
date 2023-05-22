const removeDuplicates = require("./remove-duplicates");

describe("removeDuplicates", () => {
  test("returns a new array containing the same values if given an array with less than two items", () => {
    expect(removeDuplicates([])).toEqual([]);
    expect(removeDuplicates(["a"])).toEqual(["a"]);
  });
  test("returns a new array containing the same values in the same order if given an array with no duplicates", () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
    expect(removeDuplicates([3, 2, 1])).toEqual([3, 2, 1]);
  });
  test("removes any duplicate items", () => {
    expect(removeDuplicates(["a", "b", "c", "a", "e"])).toEqual([
      "a",
      "b",
      "c",
      "e",
    ]);
  });
});
