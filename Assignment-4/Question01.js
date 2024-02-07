/**
Q1. You are building a counter application that tracks the number of times a button is clicked. Implement the counter using closure.  
**/

// Solution for Q - 1
function createCounter() {
	let count = 0;

	function incrementCounter() {
		count++;
		console.log(`Clicked ${count} time.`);
	}

	return incrementCounter;
}

const clickCounter = createCounter();

clickCounter();
clickCounter();
clickCounter();
