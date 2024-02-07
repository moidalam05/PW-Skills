/**
Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment method ("credit","debit","paypal") as input and uses a switch statement to determine and print the processing fee associated with each payment method. For example, "credit" may have a processing fee of 2%, "debit" 1.5% and "paypal" 3%
 */

// Solution for Q - 6

const paymentMethod = 'credit';

switch (paymentMethod) {
	case 'credit':
		console.log('You are using credit so your processing fee is 2%.');
		break;
	case 'debit':
		console.log('You are using debit so your processing fee is 1.5%.');
		break;
	case 'paypal':
		console.log('You are using paypal so your processing fee is 3%.');
		break;
	default:
		console.log('Invalid payment method!');
}
