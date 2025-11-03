/**
 * Question 3: Counter Object
 *
 * Implement a function that creates a counter object with methods to manipulate its value.
 *
 * Requirements:
 * - Accept an optional initial value (defaults to 0)
 * - Return an object with get(), increment(), decrement(), and reset() methods
 * - Maintain internal state using closures
 * - Write clean, well-structured code
 *
 * Example:
 * const counter = makeCounter();
 * counter.get(); // 0
 * counter.increment(); // 1
 * counter.increment(); // 2
 * counter.reset(); // 0
 *
 * With custom initial value:
 * const counter = makeCounter(5);
 * counter.get(); // 5
 * counter.decrement(); // 4
 * counter.reset(); // 5
 */

/**
 * Creates a counter object with increment, decrement, get, and reset methods
 * @param {number} initialValue - The initial value of the counter (defaults to 0)
 * @returns {Object} An object with get, increment, decrement, and reset methods
 */
function makeCounter(initialValue = 0) {
  // TODO: Implement your solution here
  let newValue = initialValue;
  return {
    get() {
      return newValue;
    },
    increment() {
      newValue += 1;
      return newValue;
    },
    decrement() {
      newValue -= 1;
      return newValue;
    },
    reset() {
      newValue = initialValue;
      return newValue;
    },
  };
}

// Export for testing
export { makeCounter };
//no initial value
const counter = makeCounter();
console.log(counter.get());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
// result =
// 0
// 1
// 2
// 0
//initial value 
const counter2 = makeCounter(5);
console.log(counter2.get());
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.reset());
//result =
// 5
// 6
// 7
// 5