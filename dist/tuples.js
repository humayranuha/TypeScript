"use strict";
let fullName = ["Humayra", "Alamgir"];
fullName.push("Nuha");
console.log(fullName);
let x = [1, true];
// x.push(2); // Error: Property 'push' does not exist on type 'readonly [number, boolean]'.
const graph = [55.2, 41.3];
const [p, q] = graph;
console.log(p, q);
