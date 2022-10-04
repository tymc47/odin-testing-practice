const reverseString = require("./reverseString");

test("all cases with space", () => {
  expect(reverseString("AbC deF")).toBe("Fed CbA");
});
