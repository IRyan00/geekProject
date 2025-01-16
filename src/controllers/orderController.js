const Order = require('../models/orderModel');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la récupération des commandes`, error }
        );
    }
};

exports.createOrder = async (req, res) => {
    try {
        const { idUser, idAd, quantity } = req.body;
        const newOrder = await Order.create({ idUser, idAd, quantity });
        res.status(201).json(newOrder)
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la création de la commande`, error }

        );
    }
};