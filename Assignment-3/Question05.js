/**
Q5. Using the same array of expense objects, use the reduce method to calculate the total amount of all expenses.  
**/

// Solution for Q - 5
const expense = [
	{ amount: 3000, category: 'Food' },
	{ amount: 5000, category: 'Transportation' },
	{ amount: 7680, category: 'Entertainment' },
	{ amount: 2400, category: 'Healthcare' },
	{ amount: 1000, category: 'Groceries' },
];

const totalAmount = expense.reduce((acc, item) => acc + item.amount, 0);
console.log(`Total Expense Amount: ${totalAmount}`);
