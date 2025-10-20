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
  // TODO: Implement your solution here
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array')
  }

  if (array.length < 2) return [...array]

  const reversedArray = []
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i])
  }
  return reversedArray
}

// TypeScript version
// function reverseArray<T>(array: T[] | null | undefined): T[] {
//   if (!Array.isArray(array)) {
//     throw new TypeError('Input must be an array')
//   }

//   if (array.length < 2) return [...array]

//   const reversedArray: T[] = []
//   for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i])
//   }
//   return reversedArray
// }

// Test cases (you can add more)
console.log(reverseArray(['a', 'b', 'c', 'd'])) // Expected: ["d", "c", "b", "a"]
console.log(reverseArray([1, 2, 3, 4, 5])) // Expected: [5, 4, 3, 2, 1]
console.log(reverseArray(['single'])) // Expected: ["single"]
console.log(reverseArray([])) // Expected: []

// Export for testing (if using modules)
module.exports = { reverseArray }
