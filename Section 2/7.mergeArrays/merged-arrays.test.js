describe("mergeArrays", () => {
  test("merges two arrays into one, alternating elements", () => {
    const array1 = [1, 2, 3];
    const array2 = ["a", "b", "c"];
    const merged1 = mergeArrays(array1, array2);
    expect(merged1).toEqual([1, "a", 2, "b", 3, "c"]);

    const array3 = [1, 2, 3, 4, 5];
    const array4 = ["a", "b", "c"];
    const merged2 = mergeArrays(array3, array4);
    expect(merged2).toEqual([1, "a", 2, "b", 3, "c", 4, 5]);

    const array5 = ["x", "y"];
    const array6 = [1, 2, 3, 4, 5];
    const merged3 = mergeArrays(array5, array6);
    expect(merged3).toEqual(["x", 1, "y", 2, 3, 4, 5]);
  });

  test("handles arrays of different lengths", () => {
    const array1 = [1, 2, 3];
    const array2 = ["a", "b", "c", "d", "e"];
    const merged1 = mergeArrays(array1, array2);
    expect(merged1).toEqual([1, "a", 2, "b", 3, "c", "d", "e"]);

    const array3 = [1, 2];
    const array4 = ["a", "b", "c", "d", "e"];
    const merged2 = mergeArrays(array3, array4);
    expect(merged2).toEqual([1, "a", 2, "b", "c", "d", "e"]);
  });

  test("returns an empty array when both input arrays are empty", () => {
    const array1 = [];
    const array2 = [];
    const merged = mergeArrays(array1, array2);
    expect(merged).toEqual([]);
  });

  test("returns the non-empty array when one input array is empty", () => {
    const array1 = [1, 2, 3];
    const array2 = [];
    const merged1 = mergeArrays(array1, array2);
    expect(merged1).toEqual([1, 2, 3]);

    const array3 = [];
    const array4 = ["a", "b", "c"];
    const merged2 = mergeArrays(array3, array4);
    expect(merged2).toEqual(["a", "b", "c"]);
  });
});
