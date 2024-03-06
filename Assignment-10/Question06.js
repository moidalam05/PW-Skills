/**
Q6 Create a command-line Node.js program that simulates a basic calculator. The program should allow users to perform addition, substraction, multiplication and divison operation on two numbers. 
**/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function performOperation(operator, num1, num2) {
	switch (operator) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			return num1 / num2;
		default:
			return 'Invalid Operator';
	}
}

rl.question('Enter the first number: ', (num1) => {
	rl.question('Enter the operator (+, -, *, /): ', (operator) => {
		rl.question('Enter the second number: ', (num2) => {
			const result = performOperation(
				operator,
				parseFloat(num1),
				parseFloat(num2)
			);
			console.log(`Result: ${result}`);
			rl.close();
		});
	});
});

rl.on('close', () => {
	console.log('Calculator closed.');
});
