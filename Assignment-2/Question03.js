/**
Q3. Create a Map to store contact information (name, age, email, location) and implement a function to retrieve conatact details by name.
**/

// Solution for Q - 3

const contactMap = new Map();

function addContact(name, age, email, location) {
	const contactDetails = { age, email, location };
	contactMap.set(name, contactDetails);
}

function getContactDetailsByName(name) {
	return contactMap.get(name);
}

addContact('Moid Alam', 20, 'moidalam@google.com', 'Bihar');
addContact('Aman Kumar', 22, 'aman@yahoo.com', 'Jalandhar');
addContact('Deepu Kumar', 19, 'deepu@amazon.com', 'Patna');

const personDetails = getContactDetailsByName('Moid Alam');

console.log('Moid Alam:', personDetails);
