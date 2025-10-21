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

function reverseArray<T>(array: T[]): T[] {
   if (!Array.isArray(array)) return [];

   const newArray: T[] = [];

   for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
   }

   return newArray;
}

function reverseModifyArray<T>(array: T[]): T[] {
   if (!Array.isArray(array)) return [];

   let firstIndex = 0;
   let lastIndex = array.length - 1;

   while (lastIndex > firstIndex) {
      const temp = array[firstIndex];

      array[firstIndex] = array[lastIndex];
      array[lastIndex] = temp;

      firstIndex++;
      lastIndex--;
   }

   return array;
}

console.log("modified array >>>", reverseModifyArray(["a", "b", "c", "d"])); // Expected: ["d", "c", "b", "a"]
console.log("modified array >>>", reverseModifyArray([1, 2, 3, 4, 5])); // Expected: [5, 4, 3, 2, 1]
console.log("modified array >>>", reverseModifyArray(["single"])); // Expected: ["single"]
console.log("modified array >>>", reverseModifyArray([])); // Expected: []

// Test cases (you can add more)
console.log("new array >>>>", reverseArray(["a", "b", "c", "d"])); // Expected: ["d", "c", "b", "a"]
console.log("new array >>>>", reverseArray([1, 2, 3, 4, 5])); // Expected: [5, 4, 3, 2, 1]
console.log("new array >>>>", reverseArray(["single"])); // Expected: ["single"]
console.log("new array >>>>", reverseArray([])); // Expected: []

// Export for testing (if using modules)
// module.exports = { reverseArray };
