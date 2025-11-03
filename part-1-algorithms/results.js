import { reverseArray } from "./question-1.js";
import { countCharacterFrequency } from "./question-2.js";
import { makeCounter } from "./question-3.js";

//question-1
const array1 = ["a", 1, null, true, undefined]

console.log('question 1: \n', reverseArray(array1));

//question-2
const string = 'HelLo world!';

console.log('question 2: \n', countCharacterFrequency(string));

//question-3
const counter = makeCounter(10);
console.log('question 3: ');
console.log(counter.get());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());