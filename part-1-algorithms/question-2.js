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
  const textLength = text.length;
  if (textLength === 0) return {};

  const result = {};
  for (let i = 0; i < textLength; i++) {
    const character = text[i];
    result[character] = (result[character] || 0) + 1;
  }
  return result;
}

// Export for testing
export { countCharacterFrequency };
