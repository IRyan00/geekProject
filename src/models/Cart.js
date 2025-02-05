const mongoose = require('mongoose');

const CartSchema = mongoose.Schema(
	{
		cartItems: [
			{
				product: {
					product_id: { type: String, require: true },
					titre: { type: String, required: true },
					description: { type: String, required: true },
					type: { type: String, enum: ["don", "vente"], require: true },
					prix: { type: Number, require: true },
					idUser: { type: String, require: true },
					public_id: { type: String, require: true },
					url: { type: String, require: true },
				},
			},
		],
		userId: { type: String, required: true },
	},
	{ timestamp: true }
);

module.exports = mongoose.model('Cart',CartSchema);