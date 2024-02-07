/**
Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the given integer. 
 */

// Solution for Q - 8

const number = 25;
let num = 0;
let sum = 0;

do {
	sum += num;
	num++;
} while (num <= number);
console.log(sum);
