/** Q3 You are developing a payment processing module for an e-commerce platform. Implement error handling for the payment transaction process.Create a function processPayment that simulates processing a payment transaction. The function should take payment details (amount, card number, expiration date) as parameters and throw errors under certain conditions 

~ If the payment amount is not a positive number, throw an error indicating "Invalid payment amount.
~ If the card number is not provided or is not a valid credit card number, throw an error indicating "Invalid card number.
~ If the expiration date is not provided or is in the past, throw an error indicating "Invalid expiration date. 
**/

const processPayment = (amount, cardNumber, expirationDate) => {
	if (typeof amount !== 'number' || amount <= 0) {
		throw new Error('Invalid payment amount.');
	}

	if (!isValidCreditCard(cardNumber)) {
		throw new Error('Invalid card number.');
	}

	if (!expirationDate || isExpirationDateInPast(expirationDate)) {
		throw new Error('Invalid expiration date.');
	}

	console.log('Payment processed successfully!');
};

const isValidCreditCard = (cardNumber) => {
	return typeof cardNumber === 'string' && cardNumber.trim().length > 0;
};

const isExpirationDateInPast = (expirationDate) => {
	if (!expirationDate) {
		return false;
	}
	const currentDate = new Date();
	const expirationDateObj = new Date(expirationDate);
	return expirationDateObj <= currentDate;
};

try {
	processPayment(100, '1234-5678-9012-3456', '12/25');
} catch (error) {
	console.log(error.message);
}
