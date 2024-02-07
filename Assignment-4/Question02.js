/**
Q2. You have an object representing a customer order with properties orderId, productName, and quantity.Use destructuring to extract and print these properties.          
**/

//Solution for Q - 2

let order = {
	orderId: '123456',
	productName: 'Laptop',
	Quantity: 2,
};

const { orderId, productName, Quantity } = order;
console.log(orderId);
console.log(productName);
console.log(Quantity);
