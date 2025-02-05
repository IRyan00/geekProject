// Importation du modèle Cart (panier)
const Cart = require('../models/Cart');

// Fonction pour récupérer le panier
exports.getCart = async (req, res) => {
    try {
        const id = req.params.id;
        
        // Recherche de tous les éléments du panier dans la base de données
        const cart = await Cart.findOne({userId: id});
        
        // Envoi de la réponse avec un statut 200 (succès) et les données du panier
        if (cart) {
            res.status(200).json({ message: `get panier :`, cart });
        } else {
            res.status(200).json({ message: `get panier : pas de panier`});
        }
       
    } catch (error) {
        // Gestion des erreurs : réponse avec un statut 500 (erreur serveur) et un message d'erreur
        res.status(500).json({ message: `Erreur lors de la récupération du panier`, error });
    }
};

// Fonction pour ajouter un élément au panier
exports.addToCart = async (req, res) => {
    const id = req.user._id;
    const monProduct = req.body;
    try {
        const cart = await Cart.findOne({userId: id});

        if (cart) {
            const addNewProduct = await Cart.findOneAndUpdate({userId: id},
                {$push: { cartItems: { product: {...monProduct}}}},
                {new: true}
            );
            res.status(200).json({message: "article ajouté au panier", addNewProduct});
        } else {
            const newCart = await Cart.create( { cartItems: [{ product: {...monProduct}}],
                userId: id,
            });
            res.status(200).json({message: "nouveau panier crée", newCart});
        }
    } catch (error) {
        // Gestion des erreurs : réponse avec un statut 500 (erreur serveur) et un message d'erreur
        res.status(500).json({ message: `Erreur lors de l'ajout au panier`, error });
    }
};



// Fonction pour supprimer un élément du panier
exports.removeFromCart = async (req, res) => {

    const id = req.user.id;
    const monProduct = req.body.product;

    try {
        const cart = await Cart.findOne({userId: id});

        if (cart) {
            const remove = Cart.findOneAndUpdate({userId: id},
                {$pull: {cartItems: {"product.id" : monProduct.id}}},
                {new: true})
                res.status(200).json({message: "item supprimé du panier", remove});
        } else {
            res.status(404).json({message: "panier non trouvé"})
        }
        // Envoi de la réponse avec un statut 200 (succès) et un message confirmant la suppression
        res.status(200).json({ message: 'Suppression réussie' });
    } catch (error) {
        // Gestion des erreurs : réponse avec un statut 500 (erreur serveur) et un message d'erreur
        res.status(500).json({ message: `Erreur lors de la suppression du panier`, error });
    }
};