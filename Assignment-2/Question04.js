/**Q4. Create two objects person1 and person2 with properties name and age. Create a function “introduce” that prints "Hello, I'm [name] and, I'm [age] years old." use the call method to make person2 introduce itself using the introduce function.
 **/

// Solution For Q - 4

const person1 = {
	name: 'John',
	age: 30,
};

const person2 = {
	name: 'Jane',
	age: 25,
};

function introduce() {
	console.log(`Hello, i'm ${this.name}, I am ${this.age} years old.`);
}

introduce.call(person2);
