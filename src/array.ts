const names: string[] = ["Dylan"];
names.push("John");

console.log(names);

const numbers: readonly number[] = [1, 2, 3];
// numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.

console.log(numbers);
let num: number = numbers[0];
console.log(num);