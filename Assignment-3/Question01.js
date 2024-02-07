/**
Q1. You are building an e-commerce website. Write a function that calculates the total price of a customer's order. You're given an array of items, each with a price property. Use the forEach method to iterate through the array and sum up the prices to get the total order amount.               
 */

// Solution for Q - 1
const orderList = [
	{ name: 'Laptop', price: 25000 },
	{ name: 'Mobile', price: 15000 },
	{ name: 'Mobile Charger', price: 1500 },
	{ name: 'Laptop Charger', price: 2000 },
];

let totalPrice = 0;
orderList.forEach((item) => {
	totalPrice += item.price;
});
console.log(totalPrice);
