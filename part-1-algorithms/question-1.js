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
    const result = [...array];
    let left = 0;
    let right = result.length - 1;

    while (left < right) {
        [result[left], result[right]] = [result[right], result[left]];
        left++;
        right--;
    }

    return result;
}

// Export for testing
export { reverseArray };
