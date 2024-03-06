/** You are developing the error handling mechanism for an online shopping cart application. The application allows users to add products to their cart and proceed to checkout. Implement error handling to address different types of errors that might occur during the shopping process.

Task - 1 Add product to Cart function 
Create a function addToCart that simulates adding a product to the shopping cart. The function should take the product details (name, price, quantity) as parameters and throw errors under certain conditionst

~ If the product name is not provided, throw an error indicating "Product name is required.
~ If the product price is not a positive number, throw an error indicating "Invalid product  price.
~ If the quantity is not a positive integer, throw an error indicating "Invalid quantity."

Task - 2 Checkout function 
Create a function checkout that simulates the checkout process. This function should throw an error if the cart is empty, indicating "Cart is empty. Add items before checkout.
**/

const shoppingCart = [];

const addToCart = (name, price, quantity) => {
	try {
		if (!name) {
			throw new Error('Product name is required.');
		}
		if (typeof price !== 'number' || price <= 0) {
			throw new Error('Invalid product price.');
		}
		if (!Number.isInteger(quantity) || quantity <= 0) {
			throw new Error('Invalid quantity.');
		}

		const product = {
			name: name,
			price: price,
			quantity: quantity,
		};

		shoppingCart.push(product);
		console.log(`${name} added to the cart.`);
		console.log(shoppingCart);
		checkout();
	} catch (error) {
		console.log(error.message);
	}
};

const checkout = () => {
	try {
		if (shoppingCart.length === 0) {
			throw new Error('Cart is empty ! Add items before checkout.');
		} else {
			console.log('Checkout successful! Thank you for shopping with us.');
			shoppingCart.length = 0;
		}
	} catch (error) {
		console.log(error.message);
	}
};

addToCart('car', 4000, 0);
addToCart('moterbike', -4000, 1);
addToCart('', -4000, 1);
addToCart('cycle', 4000, 1);
