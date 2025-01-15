const Ad = require('../models/Ad');

exports.getAllAd = async (req, res) => {
    try {
        const ads = await Ad.find();
        res.status(200).json(ads);
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la récupération des annonces`, error }
        );
    }
};

// Ajouter
exports.createAd = async (req, res) => {
    try {
        const { titre, description, type, prix, idUser } = req.body;
        const newAd = await Ad.create({ titre, description, type, prix, idUser });
        res.status(201).json(newAd)
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la création de l'annonce`, error })
    }
}