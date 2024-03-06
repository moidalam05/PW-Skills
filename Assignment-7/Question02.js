/**
Q2 - You are working on a user authentication module for a web application. Implement error handling for the login process.Create a function login that simulates the user login process. The function should take the username and password as parameters and throw errors under certain conditions

' If the username is not provided, throw an error indicating "Username is required.
' If the password is not provided, throw an error indicating "Password is required.
' If the username and password do not match any valid credentials, throw an error indicating "Invalid username or password.
 **/

const login = (username, password) => {
	if (typeof username === 'undefined' || username === null || !username) {
		throw new Error('Username is required.');
	}

	if (typeof password === 'undefined' || password === null || !password) {
		throw new Error('Password is required.');
	}

	if (password.length < 8) {
		throw new Error('Password must be 8 characters long or more!');
	}

	if (username !== 'admin' || password !== 'password') {
		throw new Error('Invalid username or password.');
	}

	console.log('User logged in successfully!');
};

try {
	login('admin', 'password');
} catch (error) {
	console.log(error.message);
}
