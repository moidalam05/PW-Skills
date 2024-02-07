/**
Q5. You are developing a program to manage a list of unique items. Write a JavaScript program that uses a Set to store a collection of unique numbers. Use the Map object to associate each number with its square. Finally, print both the unique numbers and their corresponding squares.
*/

// Solution for Q - 5

const uniqueNumbersSet = new Set([5, 3, 6, 7, 8, 1, 2, 9, 10]);

const numbersAndSquaresMap = new Map();
uniqueNumbersSet.forEach((number) => {
	const square = number ** 2;
	numbersAndSquaresMap.set(number, square);
});

console.log('Unique Numbers:');
console.log(Array.from(uniqueNumbersSet).join(', '));

console.log('\nCorresponding Squares:');
numbersAndSquaresMap.forEach((square, number) => {
	console.log(`${number} squared is ${square}`);
});
