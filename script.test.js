const capitalise = require("./capitalise");

test("all small case", () => {
  expect(capitalise("hello")).toBe("Hello");
  expect(capitalise("he llo")).toBe("He llo");
});

test("all large case", () => {
  expect(capitalise("HELLO")).toBe("HELLO");
  expect(capitalise("HE LLO")).toBe("HE LLO");
});
