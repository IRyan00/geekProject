const mongoose = require('mongoose');

const Cart = mongoose.Schema(
	{
		cartItems: [
			{
				product: {
					titre: { type: String, required: true },
					description: { type: String, required: true },
					type: { type: String, enum: ["don", "vente"], require: true },
					prix: { type: Number, require: true },
					idUser: { type: String, require: true },
					public_id: { type: String, require: true },
					url: { type: String, require: true },
				},
				quantity: { type: Number, default: 1 },
			},
		],
		userId: { type: String, required: true },
	},
	{ timestamp: true }
);

module.exports = Cart;