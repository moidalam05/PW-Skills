/**
Q2. In this challenge, your task is to create a function that generates a random number and prints it to the console every 2 seconds. The program should keep printing new random numbers indefinitely, with a 2-second delay between each number. 
**/

// Solution for Q - 2
const randomNumber = () => {
	setInterval(() => {
		console.log(Math.floor(Math.random() * 100));
	}, 2000);
};
randomNumber();
