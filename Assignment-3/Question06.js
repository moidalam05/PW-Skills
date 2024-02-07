/**
Q6. You have a list of expenses, each with an amount and a category. Now, create a function named categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or "Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array called categorizedExpenses, where each element represents the category for the corresponding expense in the original list. Finally, print out the categorizedExpenses array.         
**/

// Solution for Q - 6
const expense = [
	{ amount: 300, category: 'Food' },
	{ amount: 500, category: 'Transportation' },
	{ amount: 80, category: 'Entertainment' },
	{ amount: 50, category: 'Healthcare' },
	{ amount: 100, category: 'Groceries' },
];

const categorizeExpenses = (amount) => {
	return amount > 100 ? 'High Expense' : 'Low Expense';
};

const categorizedExpenses = expense.map((expense) =>
	categorizeExpenses(expense.amount)
);

console.log('Categorized Expenses:');
console.log(categorizedExpenses);
