/**
Q3. In this coding challenge let's try to implement the cart feature using javascript closure. Using JS closures try to create a cart array and return a function to getCartItems.      
**/

// Solution for Q - 3

function shopingCart() {
	const cartItems = [1, 2, 3, 4];
	return {
		getCartItems: function () {
			return cartItems;
		},
	};
}
const cart = shopingCart();
console.log('Cart items: ', cart.getCartItems());
