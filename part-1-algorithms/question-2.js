/**
 * Counts the frequency of each character in a string
 * @param {string} text - The input string to analyze
 * @returns {Object} An object with characters as keys and their frequencies as values
 */
function countCharacterFrequency(text) {
  if (typeof text !== "string") {
    throw new TypeError(
      `Expected a string for 'text', but received ${typeof text}.`
    );
  }

  const frequencyMap = {};
  for (const char of text) {
    frequencyMap[char] = (frequencyMap[char] ?? 0) + 1;
  }

  return frequencyMap;
}

// Test cases (you can add more)
console.log(countCharacterFrequency("Hello world!"));
// Expected: { H: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1, '!': 1 }

console.log(countCharacterFrequency("aaa"));
// Expected: { a: 3 }

console.log(countCharacterFrequency(""));
// Expected: {}

console.log(countCharacterFrequency("AaBbCc"));
// Expected: { A: 1, a: 1, B: 1, b: 1, C: 1, c: 1 }
console.log(countCharacterFrequency("     $$$$$"));
// Expected: { " ": 5, "$": 5 }
