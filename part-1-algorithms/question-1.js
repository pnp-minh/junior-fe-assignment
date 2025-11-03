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
  if (!Array.isArray(array)) return [];
  const reverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}

// Export for testing
export { reverseArray };
console.log(reverseArray(["a", "b", "c", "d"]));
//result=[ 'd', 'c', 'b', 'a' ]