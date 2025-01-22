const JWT = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

// Middleware pour vérifier le JWT
const authenticateToken = async (req, res, next) => {
	try {
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1];

		if (!token) return res.status(401).json({ message: 'Token manquant' });

		JWT.verify(token, JWT_SECRET, (err, user) => {
			if (err) return res.status(403).json({ message: 'Token invalide' });
			req.user = user;
			next();
		});
	} catch (error) {
		res.status(500).json({ message: 'Erreur de serveur', error: error.message });
	}
};

module.exports = authenticateToken