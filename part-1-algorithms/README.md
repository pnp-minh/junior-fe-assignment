# Part 1: Data Structures & Algorithms

**Estimated Time**: 30-45 minutes

## Instructions

Complete all three questions in the provided JavaScript files. Write clean, well-commented code and consider edge cases.

**Important**: Do NOT use built-in methods that directly solve the problem (e.g., `.reverse()` for Question 1)

## Questions

### Question 1: Array Reversal

**File**: `question-1.js`

Write a function that reverses the elements in an array **without using built-in reverse methods** (like `.reverse()`).

**Example**:

```javascript
const array = ["a", "b", "c", "d"];
const reversed = reverseArray(array);
// Output: ["d", "c", "b", "a"]
```

### Question 2: Character Frequency Counter

**File**: `question-2.js`

Write a function that counts the frequency of each character in a given string. Use an object/dictionary to store character counts.

**Example**:

```javascript
const text = "Hello world!";
const frequency = countCharacterFrequency(text);
// Output: { H: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1, '!': 1 }
```

### Question 3: Counter Object

**File**: `question-3.js`

Implement a function that creates a counter object with methods to manipulate its value.

**Example**:

```javascript
const counter = makeCounter();
counter.get(); // 0
counter.increment(); // 1
counter.increment(); // 2
counter.reset(); // 0

// With custom initial value
const counter2 = makeCounter(5);
counter2.get(); // 5
counter2.decrement(); // 4
counter2.reset(); // 5
```

## Testing

Test your solutions by running the JavaScript files with Node.js:

```bash
node question-1.js
node question-2.js
node question-3.js
```

**Tip**: Add your own `console.log` statements or test cases in each file to verify your solutions work correctly. This is optional but recommended!

**Bonus**: TypeScript solutions and unit tests are appreciated but not required.

## Questions?

If you have any questions or need clarification, contact **minh@papers-pens.com**.

Good luck!
