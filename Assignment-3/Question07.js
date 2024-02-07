/**
Q7. Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3]. Your task is to use the forEach method to iterate through each element in the array. During the iteration, double the value of each number. After completing the iteration, display the modified array. 
**/

// Solution for Q - 7
const originalNumbers = [2, 5, 8, 10, 3];
const modifiedNumbers = [];
originalNumbers.forEach((item) => {
	modifiedNumbers.push(item + item);
});

console.log(originalNumbers);
console.log(modifiedNumbers);
