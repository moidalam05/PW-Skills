// Q4. Describe the usage of the comma operator in JavaScript and provide an example.

// Solution for Q - 4

/** 
In JavaScript, the comma operator (,) is used to evaluate multiple expressions, returning the result of the last expression. It is often used in places where multiple expressions are expected, such as in the initialization and increment parts of a for loop.
**/

// For Example...

let x = 1,
	y = 2;

for (let i = 0, j = 10; i < 5; i++, j--) {
	console.log(`i: ${i}, j: ${j}`);
}
function exampleFunction(a, b) {
	return a++, b++;
}

console.log(exampleFunction(x, y));
