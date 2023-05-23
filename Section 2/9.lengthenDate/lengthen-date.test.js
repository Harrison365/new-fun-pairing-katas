describe("lengthenDate", () => {
  test("returns a lengthened date in the correct format", () => {
    const date1 = "21.03.2017";
    const lengthenedDate1 = lengthenDate(date1);
    expect(lengthenedDate1).toBe("Tuesday 21st March 2017");

    const date2 = "02.11.2022";
    const lengthenedDate2 = lengthenDate(date2);
    expect(lengthenedDate2).toBe("Thursday 2nd November 2022");

    const date3 = "10.09.2023";
    const lengthenedDate3 = lengthenDate(date3);
    expect(lengthenedDate3).toBe("Sunday 10th September 2023");
  });
});
