/**
Assignment 1. Write a function sumAsync that takes two numbers as arguments and uses a callback to return their sum after a delay of 1 second.  
**/

// Solution for Q - 1

function sumAsync(num1, num2, callback) {
	setTimeout(() => {
		const sum = num1 + num2;
		callback(sum);
	}, 1000);
}

sumAsync(3, 7, (result) => {
	console.log('Sum:', result);
});
