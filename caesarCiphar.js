const alphabet = "abcdefghijklmnopqrstuvwxyz";

function shift(char) {
  let isUpper = /[A-Z]/.test(char);
  const index = alphabet.indexOf(char.toLowerCase());

  //shift 4
  let result = alphabet[(index + 4) % 26];
  return isUpper ? result.toUpperCase() : result;
}

function caesarCipher(string) {
  const chars = string.split("");
  const result = [];

  while (chars.length !== 0) {
    let char = chars.shift();
    if (/[A-z]/.test(char)) {
      char = shift(char);
    }
    result.push(char);
  }

  return result.join("");
}

module.exports = caesarCipher;
