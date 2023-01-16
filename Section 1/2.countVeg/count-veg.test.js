describe("countVeg", () => {
  test("returns the quantity of a single matching type of vegetable", () => {
    const actual = countVeg(
      [{ name: "Parsnip", type: "root", quantity: 4 }],
      "root"
    );
    const expected = 4;
    expect(actual).toEqual(expected);
  });
  test("returns 0 for a single non-matching type of vegetable", () => {
    const actual = countVeg(
      [{ name: "Parsnip", type: "root", quantity: 4 }],
      "bulb"
    );
    const expected = 0;
    expect(actual).toEqual(expected);
  });
  test("returns the total quantity for all matching types of vegetable", () => {
    const actual = countVeg(
      [
        { name: "Parsnip", type: "root", quantity: 4 },
        { name: "Broccoli", type: "brassica", quantity: 1 },
        { name: "Carrot", type: "root", quantity: 5 },
        { name: "Onion", type: "bulb", quantity: 3 },
        { name: "Chard", type: "leaf", quantity: 3 },
        { name: "Runner beans", type: "legume", quantity: 8 },
      ],
      "root"
    );
    const expected = 9;
    expect(actual).toEqual(expected);
  });
});
