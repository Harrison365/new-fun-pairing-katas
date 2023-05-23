describe("getFrequencies", () => {
  test("returns an object representing the frequencies of each character", () => {
    const frequencies1 = getFrequencies("hello world");
    expect(frequencies1).toEqual({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      w: 1,
      r: 1,
      d: 1,
    });

    const frequencies2 = getFrequencies("testing 123");
    expect(frequencies2).toEqual({
      t: 2,
      e: 1,
      s: 1,
      i: 1,
      n: 1,
      g: 1,
      1: 1,
      2: 1,
      3: 1,
    });
  });
});
