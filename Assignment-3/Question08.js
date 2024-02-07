/**
Q8. Using the same array of numbers, use the forEach method to collect and store only the even numbers in a new array.
**/

// Solution for Q - 8
const originalNumbers = [2, 5, 8, 10, 3];
const evenNumbers = [];

originalNumbers.forEach((item) => {
	if (item % 2 === 0) {
		evenNumbers.push(item);
	}
});

console.log(evenNumbers);
