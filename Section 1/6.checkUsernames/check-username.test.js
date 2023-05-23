describe("checkUsernames", () => {
  test("returns true for an array of valid usernames", () => {
    expect(checkUsernames(["john123", "alice_12", "bob"])).toBe(true);
    expect(checkUsernames(["user1", "user_2", "user_3"])).toBe(true);
  });

  test("returns false for an array with an invalid username", () => {
    expect(checkUsernames(["john123", "alice_12", "bob!"])).toBe(false);
    expect(checkUsernames(["user1", "user_2", "user3!"])).toBe(false);
    expect(checkUsernames(["too_long_username_1234567890"])).toBe(false);
  });

  test("returns false for an array with usernames that are too short", () => {
    expect(checkUsernames(["john", "alice", "bob"])).toBe(false);
  });

  test("returns false for an array with usernames that are too long", () => {
    expect(
      checkUsernames(["john12345678901234567890", "alice_12345678901234567890"])
    ).toBe(false);
  });
});
