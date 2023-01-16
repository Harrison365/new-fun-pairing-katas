const sumDigits = require("./sum-digits");

describe("sumDigits", () => {
  test("returns input when given one digit", () => {
    expect(sumDigits(8)).toBe(8);
    expect(sumDigits(2)).toBe(2);
  });
  test("returns their sum when given two digits", () => {
    expect(sumDigits(12)).toBe(3);
    expect(sumDigits(25)).toBe(7);
  });
  test("returns their sum when given three or more digits", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(456)).toBe(15);
    expect(sumDigits(55555)).toBe(25);
  });
  test("returns their sum when given a decimal number", () => {
    expect(sumDigits(12.5)).toBe(8);
    expect(sumDigits(2.5)).toBe(7);
    expect(sumDigits("2atp5")).toBe(7);
  });
});

// Tests for sumDigits

/*
  TEST 1 - sumDigits returns the input number when passed a single digit number
  This test has two ASSERTIONS being made
  The same behaviour is being tested but with different inputs - 1 and 9

  E.g. sumDigits(1) should output 1
  E.g. sumDigits(9) should output 9
*/

/*
  Once you have got the first test passing, then you can write your next one.
  If you've already handled a single digit, your next test could test for multi-digit inputs.

  E.g. sumDigits(99) should output 18
  E.g. sumDigits(123) should output 6

  HINT: Remember to see the test *fail* first, then write the code to pass the test

  Why this test?  
  A multi-digit input means you now have to implement to 'addition' part of this function,
  but you don't have to think about the logic for dealing with/ignoring non-digit characters yet
  (that's for our next test!)
*/

/*
  Once you have successfully passed the above test, then you can write your next test.
  A good next test might be to check that your function handles non-numerical characters correctly (i.e. ignores them)
  
  E.g. sumDigits(10.5) should output 6
*/
