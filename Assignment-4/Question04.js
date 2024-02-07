/**
Q4. Continuing the previous coding challenge, now let’s implement the add to cart feature. On calling add to cart closure function, the object of productId, name, quantity and price should be added to the cartItem.Note that if duplicate items with same prouductId is added, the product quantity must be incremented. Use javascript closures to achieve the output.                   
**/

// Solution for Q - 4

function shopingCart() {
	const cartItems = [];
	function itemIndexInCart(productId) {
		return cartItems.findIndex((item) => item.id === productId);
	}

	return {
		addItem: function (product) {
			const itemIndex = itemIndexInCart(product.id);
			if (itemIndex !== -1) {
				cartItems[itemIndex].quantity++;
			} else {
				cartItems.push({ ...product, quantity: 1 });
			}
		},
		getCartItems: function () {
			return cartItems;
		},
	};
}

const cart = shopingCart();

const product1 = { id: 1, name: 'product 1', price: 10 };
const product2 = { id: 2, name: 'product 2', price: 20 };

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log('Cart Items: ', cart.getCartItems());
