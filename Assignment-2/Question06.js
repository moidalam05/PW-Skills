/**
Q6. 
1. Create a simple JavaScript function named displayInfo that takes two parameters (name and role) and logs a        message.
2. Use call to invoke the displayInfo function with specific arguments
3. Use apply to invoke the displayInfo function with arguments passed as an array
4. Create another function named greet that logs a greeting with this context
5. Use bind to create a new function boundGreet with a specific context and log the greeting.   
 **/

// Solution for Q - 6

// 1. Create a simple JavaScript function named displayInfo that takes two parameters (name and role) and logs a     message.
function displayInfo(name, role) {
	console.log(`name: ${name} and role: ${role}`);
}

// 2. Use call to invoke the displayInfo function with specific arguments
displayInfo.call(null, 'Moid', 'Developer');

// 3. Use apply to invoke the displayInfo function with arguments passed as an array
displayInfo.apply(null, ['John', 'Designer']);

// 4. Create another function named greet that logs a greeting with this context
const greet = function () {
	console.log(`Hello Mr. ${this.name}`);
};

// 5. Use bind to create a new function boundGreet with a specific context and log the greeting.
let boundGreet = greet.bind({ name: 'Alex' });
boundGreet();
