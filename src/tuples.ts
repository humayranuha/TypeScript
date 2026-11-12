let fullName: [string, string] = ["Humayra", "Alamgir"];
fullName.push("Nuha");
console.log(fullName);

let x: readonly[number, boolean] = [1, true];
// x.push(2); // Error: Property 'push' does not exist on type 'readonly [number, boolean]'.

const graph: [x: number, y: number] = [55.2, 41.3];
const [p, q] = graph;
console.log(p, q);
