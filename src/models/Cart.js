const mongoose = require('mongoose');

class Cart {
	items = [];

	addItem(item) {
		this.items.push(item);
	}

	removeItem(item) {
		const index = this.items.indexOf(item);
		if (index > -1) {
			this.items.splice(index, 1);
		}
	}

	getTotalItems() {
		return this.items.length;
	}

	clearCart() {
		this.items = [];
	}
}

module.exports = Cart;