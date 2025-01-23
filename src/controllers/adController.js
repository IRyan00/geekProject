// Importation du modèle Ad pour interagir avec la base de données
const Ad = require('../models/Ad');

// Importation du module fs pour gérer les fichiers locaux
const fs = require('fs');

// Importation et configuration de Cloudinary pour la gestion des images
const { v2: cloudinary } = require('cloudinary');
require('dotenv').config(); // Chargement des variables d'environnement

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, // Nom du compte Cloudinary
    api_key: process.env.API_KEY,       // Clé API Cloudinary
    api_secret: process.env.API_SECRET  // Clé secrète API Cloudinary
});

// Contrôleur pour récupérer toutes les annonces
exports.getAllAd = async (req, res) => {
    try {
        // Recherche de toutes les annonces dans la base de données
        const ads = await Ad.find();
        res.status(200).json(ads); // Envoi des annonces au client
    } catch (error) {
        // Gestion des erreurs
        res.status(500).json({
            message: `Erreur lors de la récupération des annonces`,
            error
        });
    }
};

// Contrôleur pour récupérer une annonce par son ID
exports.getOneAd = async (req, res) => {
    const { id } = req.params; // Extraction de l'ID depuis les paramètres de requête
    try {
        // Recherche de l'annonce correspondante
        const oneAd = await Ad.findById(id);
        if (!oneAd) {
            // Si l'annonce n'est pas trouvée
            return res.status(404).json({ error: 'Annonce non trouvée' });
        }
        res.status(200).json(oneAd); // Envoi de l'annonce au client
    } catch (error) {
        // Gestion des erreurs
        res.status(500).json({
            message: `Erreur lors de la récupération d'une annonce`,
            error
        });
    }
};

// Contrôleur pour créer une nouvelle annonce
exports.createAd = async (req, res) => {
    try {
        if (!req.file) {
            // Vérification si un fichier a été téléchargé
            return res.status(400).json({ error: 'Aucun fichier téléchargé' });
        }
        // Téléchargement de l'image sur Cloudinary
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
            folder: 'images', // Dossier cible sur Cloudinary
        });

        // Suppression du fichier local après le téléchargement
        fs.unlinkSync(req.file.path);

        // Extraction des données du corps de la requête
        const { titre, description, type, prix, idUser } = req.body;

        // Création d'une nouvelle annonce dans la base de données
        const newAd = await Ad.create({
            titre,
            description,
            type,
            prix,
            idUser,
            public_id: uploadResult.public_id, // ID public de l'image sur Cloudinary
            url: uploadResult.secure_url      // URL sécurisée de l'image
        });

        res.status(201).json(newAd); // Réponse avec l'annonce créée
    } catch (error) {
        // Gestion des erreurs
        res.status(500).json({
            message: `Erreur lors de la création de l'annonce`,
            error
        });
    }
};

// Contrôleur pour supprimer une annonce
exports.deleteAd = async (req, res) => {
    const { id } = req.params; // Extraction de l'ID depuis les paramètres de requête
    try {
        // Suppression de l'annonce dans la base de données
        const ad = await Ad.findByIdAndDelete(id);
        if (!ad) {
            // Si l'annonce n'est pas trouvée
            return res.status(404).json({ error: 'Annonce non trouvée' });
        }

        // Suppression de l'image associée sur Cloudinary
        cloudinary.uploader.destroy(ad.public_id);

        res.status(201).json({ message: `L'annonce a bien été supprimée` });
    } catch (error) {
        // Gestion des erreurs
        res.status(500).json({
            message: `Erreur lors de la suppression de l'annonce`,
            error
        });
    }
};

// Contrôleur pour modifier une annonce
exports.changeAd = async (req, res) => {
    const { id } = req.params; // Extraction de l'ID depuis les paramètres de requête
    const { titre, description, type, prix } = req.body; // Données de modification
    try {
        // Mise à jour de l'annonce dans la base de données
        const ad = await Ad.findByIdAndUpdate(
            id,
            { titre, description, type, prix }, // Nouvelles données
            { new: true } // Option pour renvoyer l'objet mis à jour
        );

        if (!ad) {
            // Si l'annonce n'est pas trouvée
            return res.status(404).json({ error: 'Annonce non trouvée' });
        }

        res.json(ad); // Réponse avec l'annonce mise à jour
    } catch (error) {
        // Gestion des erreurs
        res.status(500).json({
            message: `Erreur lors de la modification de l'annonce`,
            error
        });
    }
};
