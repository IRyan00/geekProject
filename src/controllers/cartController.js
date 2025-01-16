const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.find();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la récupération du panier`, error }
        );
    }
};

exports.addToCart = async (req, res) => {
    try {
        const { idUser, idAd } = req.body;
        const newCart = await Cart.create({ idUser, idAd });
        res.status(201).json(newCart)
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de l'ajout au panier`, error }

        );
    }
};