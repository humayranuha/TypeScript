"use strict";
const names = ["Dylan"];
names.push("John");
console.log(names);
const numbers = [1, 2, 3];
// numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
console.log(numbers);
let num = numbers[0];
console.log(num);
