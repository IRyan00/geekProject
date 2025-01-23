// Importation des modules nécessaires
const mongoose = require('mongoose'); // Mongoose est utilisé pour interagir avec MongoDB
const bcrypt = require('bcrypt'); // Bcrypt peut être utilisé pour le hachage de mots de passe (bien qu'il ne soit pas utilisé ici)

// Définition du schéma pour les annonces
const adSchema = new mongoose.Schema({
    // Titre de l'annonce, obligatoire
    titre: { type: String, required: true },
    // Description de l'annonce, obligatoire
    description: { type: String, required: true },
    // Type d'annonce (soit "don" soit "vente"), obligatoire et limité à ces deux valeurs
    type: { type: String, enum: ["don", "vente"], require: true },
    // Prix de l'annonce, obligatoire, avec un getter et un setter pour la gestion de la mise en forme
    prix: { type: Number, require: true, get: getPrice, set: setPrice },
    // Identifiant de l'utilisateur ayant créé l'annonce, obligatoire
    idUser: { type: String, require: true },
    // Identifiant public (lié à un service comme un stockage cloud, par exemple), obligatoire
    public_id: { type: String, require: true },
    // URL associée à l'annonce (comme une image ou un lien), obligatoire
    url: { type: String, require: true },
},
    {
        // Ajout automatique des champs `createdAt` et `updatedAt`
        timestamps: true
    },
    {
        // Configuration pour appliquer les getters lors de la conversion en JSON
        toJSON: { getters: true }
    }
);

// Fonction getter pour le prix : transforme le prix en euros (division par 100)
function getPrice(num) {
    return (num / 100).toFixed(2); // Renvoie le prix sous forme de chaîne avec 2 décimales
}

// Fonction setter pour le prix : transforme le prix en centimes (multiplication par 100)
function setPrice(num) {
    return num * 100; // Stocke le prix en centimes dans la base de données
}

// Exportation du modèle basé sur le schéma défini
module.exports = mongoose.model('Ad', adSchema);
