/**
Q3. You are given an array of expense objects representing monthly expenses. Each object has properties, amount and category. Use the map method to create a new array that includes the calculated tax for each expense. Assume a tax rate of 10%.
**/

// Solution for Q - 3
const expense = [
	{ amount: 3000, category: 'Food' },
	{ amount: 5000, category: 'Transportation' },
	{ amount: 7680, category: 'Entertainment' },
	{ amount: 2400, category: 'Healthcare' },
	{ amount: 1000, category: 'Groceries' },
];

const taxRate = 10;
const monthlyExpense = expense.map(
	(item) => item.amount + (item.amount * taxRate) / 100
);

console.log(monthlyExpense);
