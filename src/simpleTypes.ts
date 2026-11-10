let isActive: boolean = true;
console.log(isActive);

let count: number = 42;
console.log(count);

let fullname: string = "John Doe";
let age = 30;
console.log(`Name: ${fullname}, Age: ${age}`);

const uniqueKey: symbol = Symbol("description");
const obj = {
    [uniqueKey]: 'This is a unique property'
}
console.log(obj[uniqueKey]);