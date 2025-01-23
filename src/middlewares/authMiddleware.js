// Importation de la bibliothèque jsonwebtoken pour gérer les JSON Web Tokens (JWT)
const JWT = require('jsonwebtoken');

// Récupération de la clé secrète pour vérifier les JWT depuis les variables d'environnement
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware pour vérifier et authentifier un JWT dans les requêtes entrantes
const authenticateToken = async (req, res, next) => {
	try {
		// Extraction de l'en-tête Authorization de la requête
		const authHeader = req.headers['authorization'];

		// Extraction du token à partir de l'en-tête (supposé au format "Bearer <token>")
		const token = authHeader && authHeader.split(' ')[1];

		// Si aucun token n'est fourni, retourner une réponse 401 (non autorisé)
		if (!token) return res.status(401).json({ message: 'Token manquant' });

		// Vérification du token avec la clé secrète
		JWT.verify(token, JWT_SECRET, (err, user) => {
			if (err) {
				// Si le token est invalide, retourner une réponse 403 (interdit)
				return res.status(403).json({ message: 'Token invalide' });
			}

			// Si le token est valide, attacher l'utilisateur décodé à l'objet req
			req.user = user;

			// Passer le contrôle au middleware ou au gestionnaire suivant
			next();
		});
	} catch (error) {
		// En cas d'erreur serveur, retourner une réponse 500 (erreur interne)
		res.status(500).json({ message: 'Erreur de serveur', error: error.message });
	}
};

// Exporter le middleware pour l'utiliser dans d'autres parties de l'application
module.exports = authenticateToken;