describe("caesarCipher", () => {
  test("returns a new string with a Caesar cipher applied", () => {
    const ciphered1 = caesarCipher("hello", 2);
    expect(ciphered1).toBe("jgnnq");

    const ciphered2 = caesarCipher("hello world!", -3);
    expect(ciphered2).toBe("ebiil tloia!");
  });
});
