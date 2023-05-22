const checkStudents = require("./check-students");

describe("checkStudents", () => {
  test("returns true if passed an array of one student in the given cohort or false otherwise", () => {
    expect(checkStudents([{ name: "Ben", cohort: "October" }], "October")).toBe(
      true
    );
    expect(checkStudents([{ name: "Ben", cohort: "October" }], "January")).toBe(
      false
    );
  });
  test("returns true if every student in the array is in the given cohort or false otherwise", () => {
    expect(
      checkStudents(
        [
          { name: "Ben", cohort: "April" },
          { name: "Amanda", cohort: "April" },
          { name: "Matt", cohort: "April" },
        ],
        "April"
      )
    ).toBe(true);
    expect(
      checkStudents(
        [
          { name: "Ben", cohort: "October" },
          { name: "Amanda", cohort: "April" },
          { name: "Matt", cohort: "April" },
        ],
        "April"
      )
    ).toBe(false);
  });
});
