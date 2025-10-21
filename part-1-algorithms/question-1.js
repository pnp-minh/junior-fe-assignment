/**
 * Reverses an array of elements
 * @param {Array} array - The array to reverse
 * @returns {Array} A new array with elements in reversed order
 */
// 1. Swap the elements at the left and right pointers
// 2. Move the pointers inward
function reverseArray(array) {
  // Handle edge case for null or non-array input
  if (!Array.isArray(array)) {
    throw new TypeError(
      `Expected an array for 'array', but received ${typeof array}.`
    );
  }

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;

    left++;
    right--;
  }

  return array;
}

// Test cases (you can add more)
console.log(reverseArray(["a", "b", "c", "d"])); // Expected: ["d", "c", "b", "a"]
console.log(reverseArray([1, 2, 3, 4, 5])); // Expected: [5, 4, 3, 2, 1]
console.log(reverseArray(["single"])); // Expected: ["single"]
console.log(reverseArray([])); // Expected: []
console.log(reverseArray([true, 42, "hello", null]));
// console.log(reverseArray(null)); // Expected: []
// console.log(reverseArray(1, 2)); // Expected: []
