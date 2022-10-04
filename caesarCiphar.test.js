const caesarCipher = require("./caesarCiphar");

test("a to z", () => {
  expect(caesarCipher("aBcDeFgHiJkLmNoPqRsTuVwXyZ")).toBe(
    "eFgHiJkLmNoPqRsTuVwXyZaBcD"
  );
});

test("space, number and punctuation", () => {
  expect(caesarCipher("abcd, 123")).toBe("efgh, 123");
});
