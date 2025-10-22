/**
 * Question 2: Character Frequency Counter
 *
 * Write a function that counts the frequency of each character in a string using a dictionary/object.
 *
 * Requirements:
 * - Use an object to store character counts (key-value pairs)
 * - Count all characters including spaces and special characters
 * - Case-sensitive (e.g., 'H' and 'h' are different)
 * - Write clean, well-structured code
 * - Time complexity: O(n)
 *
 * Example:
 * Input: "Hello world!"
 * Output: { H: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1, '!': 1 }
 */

/**
 * Counts the frequency of each character in a string
 * @param {string} text - The input string to analyze
 * @returns {Object} An object with characters as keys and their frequencies as values
 */
function countCharacterFrequency(text) {
  // TODO: Implement your solution here
  if (typeof text !== "string" || text.length === 0) return {};
  const frequency = {};
  for (let char of text) {
    frequency[char] = frequency[char] + 1 || 1;
  }
  return frequency;
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

console.log(countCharacterFrequency(234));
// Expected: {}

// Export for testing (if using modules)
// module.exports = { countCharacterFrequency };
