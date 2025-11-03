/**
 * Question 1: Array Reversal
 *
 * Write a function that reverses the elements in an array WITHOUT using built-in reverse methods.
 *
 * Requirements:
 * - Implement from scratch (no .reverse() method)
 * - Handle edge cases
 * - Write clean, well-structured code
 * - Time complexity: O(n)
 *
 * Example:
 * Input: ["a", "b", "c", "d"]
 * Output: ["d", "c", "b", "a"]
 */

/**
 * Reverses an array of elements
 * @param {Array} array - The array to reverse
 * @returns {Array} A new array with elements in reversed order
 */

function reverseArray(array) {
  const arrayLength = array.length;
  if (arrayLength === 0) return [];
  if (arrayLength === 1) return array;

  for (let i = 0; i < Math.floor(arrayLength / 2); i++) {
    let temp = array[i];
    array[i] = array[arrayLength - 1 - i];
    array[arrayLength - 1 - i] = temp;
  }
  return array;
}

// Export for testing
export { reverseArray };
