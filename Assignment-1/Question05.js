/**
Q5. You're creating a basic login system. Make a login function with two things: a username and a password.
Check if the username is "Admin" and the password is "12345". If they are both correct, show "Login Successful";if not show, "Invalid credentials."
**/

// Solution for Q - 5

const username = 'Admin';
const password = 12345;

function login(user, pass) {
	if (user === username && pass === password) {
		console.log('Login Successful!');
	} else {
		console.log('Invalid credentials!');
	}
}

login(username, password);
