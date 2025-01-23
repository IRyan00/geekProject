// Importation du modèle Cart (panier)
const Cart = require('../models/Cart');

// Fonction pour récupérer le panier
exports.getCart = async (req, res) => {
    try {
        // Recherche de tous les éléments du panier dans la base de données
        const cart = await Cart.find();
        // Envoi de la réponse avec un statut 200 (succès) et les données du panier
        res.status(200).json(cart);
    } catch (error) {
        // Gestion des erreurs : réponse avec un statut 500 (erreur serveur) et un message d'erreur
        res.status(500).json({ message: `Erreur lors de la récupération du panier`, error });
    }
};

// Fonction pour ajouter un élément au panier
exports.addToCart = async (req, res) => {
    try {
        // Extraction des données envoyées dans le corps de la requête
        const { idUser, idAd } = req.body;
        // Création d'un nouvel élément de panier avec les données fournies
        const newCart = await Cart.create({ idUser, idAd });
        // Envoi de la réponse avec un statut 201 (créé) et les détails du nouvel élément de panier
        res.status(201).json(newCart);
    } catch (error) {
        // Gestion des erreurs : réponse avec un statut 500 (erreur serveur) et un message d'erreur
        res.status(500).json({ message: `Erreur lors de l'ajout au panier`, error });
    }
};

// Fonction pour supprimer un élément du panier
exports.removeFromCart = async (req, res) => {
    try {
        // Extraction de l'identifiant de l'élément à supprimer depuis le corps de la requête
        const { id } = req.body;
        // Suppression de l'élément correspondant dans la base de données
        const cart = await Cart.findByIdAndDelete(id);
        // Envoi de la réponse avec un statut 200 (succès) et un message confirmant la suppression
        res.status(200).json({ message: 'Suppression réussie' });
    } catch (error) {
        // Gestion des erreurs : réponse avec un statut 500 (erreur serveur) et un message d'erreur
        res.status(500).json({ message: `Erreur lors de la suppression du panier`, error });
    }
};

// Fonction pour mettre à jour un élément du panier
exports.updateCart = async (req, res) => {
    try {
        // Extraction de l'identifiant et des nouvelles données depuis le corps de la requête
        const { id, idAd } = req.body;
        // Mise à jour de l'élément correspondant dans la base de données avec les nouvelles données
        const cart = await Cart.findByIdAndUpdate(id, { idAd }, { new: true });
        // Envoi de la réponse avec un statut 200 (succès) et les détails de l'élément mis à jour
        res.status(200).json(cart);
    } catch (error) {
        // Gestion des erreurs : réponse avec un statut 500 (erreur serveur) et un message d'erreur
        res.status(500).json({ message: `Erreur lors de la modification du panier`, error });
    }
};
