const orderVeg = require("./order-veg");

describe("orderVeg", () => {
  test("returns a *new* array", () => {
    const originalArray = [{ name: "Parsnip", type: "root", quantity: 4 }];
    expect(orderVeg(originalArray)).toEqual(originalArray);
    expect(orderVeg(originalArray)).not.toBe(originalArray);
  });
  test("the returned array is ordered by ascending quantity", () => {
    expect(
      orderVeg([
        { name: "Parsnip", type: "root", quantity: 4 },
        { name: "Broccoli", type: "brassica", quantity: 1 },
        { name: "Carrot", type: "root", quantity: 5 },
        { name: "Onion", type: "bulb", quantity: 3 },
        { name: "Chard", type: "leaf", quantity: 3 },
        { name: "Runner beans", type: "legume", quantity: 8 },
      ])
    ).toEqual([
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ]);
  });
});
Footer;
