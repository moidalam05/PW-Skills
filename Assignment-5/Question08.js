/**
Assignment 8. Create a function racePromises that takes an array of promises and returns the result of the first promise that resolves or rejects. Use Promise.race() to implement this.
**/

// Solution for Q - 8
function racePromises(promise) {
	return Promise.race(promise);
}

const promise1 = new Promise((resolve) =>
	setTimeout(() => resolve('Promise 1 resolved'), 1000)
);
const promise2 = new Promise((_, reject) =>
	setTimeout(() => reject('Promise 2 rejected'), 2000)
);

racePromises([promise1, promise2])
	.then((result) => console.log(`The result is ${result}`))
	.catch((errorMsg) => console.log(`Error: ${errorMsg}`));
