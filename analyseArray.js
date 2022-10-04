function analyseArray(array) {
  if (!array) return "invalid input";
  if (array.length === 0 || !Array.isArray(array)) return "invalid input";
  if (!array.every((item) => typeof item === "number")) return "invalid array";

  const results = {};
  array.sort((a, b) => a - b);
  results.max = array[array.length - 1];
  results.min = array[0];
  results.average = array.reduce((sum, item) => sum + item, 0) / array.length;
  results.length = array.length;
  return results;
}

module.exports = analyseArray;
