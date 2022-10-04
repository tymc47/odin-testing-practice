const analyseArray = require("./analyseArray");

test("normal array", () => {
  expect(analyseArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("1 length array", () => {
  expect(analyseArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("input null or empty array", () => {
  expect(analyseArray([])).toBe("invalid input");
  expect(analyseArray()).toBe("invalid input");
  expect(analyseArray("1234")).toBe("invalid input");
});

test("input non number array", () => {
  expect(analyseArray(["1", "2"])).toBe("invalid array");
});
