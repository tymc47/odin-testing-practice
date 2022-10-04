const calculator = require("./calculator");

test("add", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("subtract", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
  expect(calculator.subtract(3, -2)).toBe(5);
  expect(calculator.subtract(3.2, 2.3)).toBeCloseTo(0.9);
});

test("multiply", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
  expect(calculator.multiply(3, -2)).toBe(-6);
  expect(calculator.multiply(3, 0)).toBe(0);
  expect(calculator.multiply(3.2, 2.3)).toBeCloseTo(7.36);
});

test("divide", () => {
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
  expect(calculator.divide(10, -2)).toBe(-5);
  expect(calculator.divide(3, 0)).toBe("ERR");
  expect(calculator.divide(3.2, 2.3)).toBeCloseTo(1.39130435);
});
