/**
Q4. Using the same array of expense objects, use the filter method to create a new array that includes only the expenses related to the category "Groceries."  
**/

// Solution for Q - 4
const expense = [
	{ amount: 3000, category: 'Food' },
	{ amount: 5000, category: 'Transportation' },
	{ amount: 7680, category: 'Entertainment' },
	{ amount: 2400, category: 'Healthcare' },
	{ amount: 1000, category: 'Groceries' },
];

const groceriesExpense = expense.filter(
	(item) => item.category === 'Groceries'
);
console.log(groceriesExpense);
