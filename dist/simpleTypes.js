"use strict";
let isActive = true;
console.log(isActive);
let count = 42;
console.log(count);
let fullname = "John Doe";
let age = 30;
console.log(`Name: ${fullname}, Age: ${age}`);
const uniqueKey = Symbol("description");
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]);
