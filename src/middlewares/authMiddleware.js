// Importation de la bibliothèque jsonwebtoken pour gérer les JSON Web Tokens (JWT)
const JWT = require('jsonwebtoken');
const User = require('../models/User');

// Récupération de la clé secrète pour vérifier les JWT depuis les variables d'environnement
const JWT_SECRET = process.env.JWT_SECRET;


// Middleware pour vérifier et authentifier un JWT dans les requêtes entrantes
const protect = async (req, res, next) => {
	try {
		// Extraction de l'en-tête Authorization de la requête
		const authHeader = req.headers['authorization'];

		// Extraction du token à partir de l'en-tête (supposé au format "Bearer <token>")
		const token = req.cookies.jwt;

		
		// Si aucun token n'est fourni, retourner une réponse 401 (non autorisé)
		if (!token) return res.status(401).json({ message: 'Token manquant' });

		const decoded = JWT.verify(token, JWT_SECRET)
		
		req.user = await User.findById(decoded._id)		

		next();

	} catch (error) {
		// En cas d'erreur serveur, retourner une réponse 500 (erreur interne)
		res.status(500).json({ message: 'Erreur de serveur', error: error.message });
	}
};

// Exporter le middleware pour l'utiliser dans d'autres parties de l'application
module.exports = protect;