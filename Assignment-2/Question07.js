/**Q7.
1. Create an object named calculator with methods add, subtract, and multiply
2. Implement the calculate method in the calculator object, which takes an operation('add', 'subtract', or 'multiply') and two numbers
3. Use call to perform an addition operation using the calculate method
4. Use apply to perform a multiplication operation using the calculate method witharguments as an array
5. Create another object named discountCalculator with a discount percentage property anda method applyDiscount
6. Use bind to create a new function calculateDiscount that is bound to thediscountCalculator object and can be reused.   
 */

// Solution for Q - 7

// 1. Create an object named calculator with methods add, subtract, and multiply
// 2. Implement the calculate method in the calculator object, which takes an operation('add', 'subtract', or 'multiply') and two numbers
const calculator = {
	add: function (x, y) {
		return x + y;
	},
	subtract: function (x, y) {
		return x - y;
	},
	multiply: function (x, y) {
		return x * y;
	},
	calculate: function (op, a, b) {
		if (op === 'add') {
			return this.add(a, b);
		} else if (op === 'subtract') {
			return this.subtract(a, b);
		} else if (op === 'multiply') {
			this.multiply(a, b);
		}
	},
};

// 3. Use call to perform an addition operation using the calculate method
const addResult = calculator.calculate.call(calculator, 'add', 8, 5);
console.log(`Addition result: ${addResult}`);

// 4. Use apply to perform a multiplication operation using the calculate method with arguments as an array
const subtractResult = calculator.calculate.apply(calculator, [
	'subtract',
	10,
	5,
]);
console.log(`Subtraction result: ${subtractResult}`);

// 5. Create another object named discountCalculator with a discount percentage property and a method applyDiscount
const discountCalculator = {
	discountPercentage: 10,
	applyDiscount: function (price) {
		return price - (price * this.discountPercentage) / 100;
	},
};

// 6. Use bind to create a new function calculateDiscount that is bound to thediscountCalculator object and can be reused.
const calculateDiscount = discountCalculator.applyDiscount.bind(
	discountCalculator
);
const finalPrice = calculateDiscount(200);
console.log(
	`Final Price after applying discount of ${discountCalculator.discountPercentage}% is :${finalPrice}`
);
