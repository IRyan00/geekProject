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

exports.removeFromCart = async (req, res) => {
    try {
        const { id } = req.body;
        const cart = await Cart.findByIdAndDelete(id);
        res.status(200).json({ message: 'Suppression réussie' });
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la suppression du panier`, error });
    }
}

exports.updateCart = async (req, res) => {
    try {
        const { id, idAd } = req.body;
        const cart = await Cart.findByIdAndUpdate
            (id, { idAd }, { new: true });
        res.status(200).json(cart);
    }
    catch (error) {
        res.status(500).json({ message: `Erreur lors de la modification du panier`, error });
    }
}