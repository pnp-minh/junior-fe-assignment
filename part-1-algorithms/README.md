# Part 1: Data Structures & Algorithms

**Estimated Time**: 30-45 minutes

## Overview

This part tests your understanding of fundamental data structures and algorithms in JavaScript. You will solve two problems that assess your ability to work with arrays and objects.

## Instructions

1. Complete both questions in the provided JavaScript files
2. Write clean, well-commented code
3. Consider edge cases and error handling
4. You may write tests (optional but appreciated)
5. Do NOT use built-in methods that directly solve the problem (e.g., `.reverse()` for Question 1)

## Questions

### Question 1: Array Reversal

**File**: `question-1.js`

Write a function that reverses the elements in an array **without using built-in reverse methods** (like `.reverse()`).

**Requirements**:

- Implement the function from scratch
- Handle edge cases (empty array, single element, etc.)
- Write clean, well-structured code
- Time complexity should be O(n)

**Example**:

```javascript
const array = ["a", "b", "c", "d"];
const reversed = reverseArray(array);
// Output: ["d", "c", "b", "a"]
```

### Question 2: Character Frequency Counter

**File**: `question-2.js`

Write a function that counts the frequency of each character in a given string using a dictionary (object) approach.

**Requirements**:

- Use an object/dictionary to store character counts
- Count all characters including spaces and special characters
- Case-sensitive counting (e.g., 'H' and 'h' are different)
- Write clean, well-structured code
- Time complexity should be O(n)

**Example**:

```javascript
const text = "Hello world!";
const frequency = countCharacterFrequency(text);
// Output: { H: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1, '!': 1 }
```

## What We're Looking For

- **Clean Code**: Readable and well-structured
- **JavaScript Best Practices**: Modern ES6+ syntax
- **Edge Cases**: Handling empty inputs, null/undefined values
- **Efficiency**: Optimal time and space complexity
- **Comments**: Clear explanation of your approach
- **Testing**: Optional but shows good practice

## Bonus Points

- Convert to TypeScript with proper type definitions (+2 points)
- Write unit tests for your functions

## Running Your Code

You can run your JavaScript files directly with Node.js:

```bash
# Test Question 1
node question-1.js

# Test Question 2
node question-2.js
```

Or in your browser's console by copying the code.

## Getting Started

1. Navigate to the `part-1-algorithms` folder
2. Open `question-1.js` and `question-2.js`
3. Implement your solutions
4. Test your code to ensure it works correctly
5. Commit your changes with clear commit messages

Good luck!
