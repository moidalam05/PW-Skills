/**
Assignment 5. Implement a function multiplyWithCallback that takes an array of numbers and a callback function. The function should multiply each element of the array by 2 and pass the result to the callback.  
**/

// Solution for Q - 5
function multiplyWithCallback(numbers, callback) {
	const multipliedArray = numbers.map((num) => num * 2);
	callback(multipliedArray);
}

const numbersArray = [1, 2, 3, 4, 5];

multiplyWithCallback(numbersArray, (result) => {
	console.log('Result:', result);
});
