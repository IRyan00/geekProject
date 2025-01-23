const User = require('../models/User'); // Importation du modèle User pour interagir avec la base de données.
const JWT = require('jsonwebtoken'); // Importation du module JSON Web Token pour gérer les tokens.

const JWT_SECRET = process.env.JWT_SECRET; // Clé secrète utilisée pour signer les tokens JWT, récupérée des variables d'environnement.

// Fonction pour générer un token JWT pour un utilisateur donné
const generateToken = (_id) => {
	const token = JWT.sign({ _id }, JWT_SECRET, {
		expiresIn: '10h', // Durée de validité du token (10 heures dans cet exemple).
	});
	return token; // Retourne le token généré.
};

// Contrôleur pour récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find(); // Recherche de tous les utilisateurs dans la base de données.
		res.status(200).json(users); // Retourne la liste des utilisateurs avec un code de succès 200.
	} catch (error) {
		// Retourne une erreur 500 avec un message d'erreur en cas de problème.
		res.status(500).json({ message: `Erreur lors de la récupération des utilisateurs`, error });
	}
};

// Contrôleur pour créer un nouvel utilisateur
exports.createUser = async (req, res) => {
	try {
		const { name, email, password } = req.body; // Extraction des données du corps de la requête.
		const newUser = await User.create({ name, email, password }); // Création d'un nouvel utilisateur dans la base de données.
		const token = generateToken(newUser._id); // Génération d'un token JWT pour le nouvel utilisateur.
		res.status(201).json({ token }); // Retourne le token avec un code de succès 201.
	} catch (error) {
		// Retourne une erreur 500 avec un message d'erreur en cas de problème.
		res.status(500).json({ message: `Erreur lors de la création de l'utilisateur`, error });
	}
};

// Contrôleur pour la connexion d'un utilisateur
exports.login = async (req, res) => {
	try {
		const { email, password } = req.body; // Extraction des données du corps de la requête.
		const user = await User.findOne({ email }); // Recherche de l'utilisateur dans la base de données par email.
		if (!user) {
			// Si l'utilisateur n'existe pas, retourne une erreur 404.
			return res.status(404).json({ message: 'Email ou mot de passe incorrect' });
		}
		const isMatch = await user.comparePassword(password); // Vérification du mot de passe.
		if (!isMatch) {
			// Si le mot de passe ne correspond pas, retourne une erreur 404.
			return res.status(404).json({ message: 'Email ou mot de passe incorrect' });
		}
		const token = generateToken(user._id); // Génération d'un token JWT pour l'utilisateur.
		res.cookie('jwt', token, {
			httpOnly: true, // Le cookie est accessible uniquement via le protocole HTTP (pas d'accès JavaScript).
		});
		res.status(200).json({ token }); // Retourne le token avec un code de succès 200.
	} catch (error) {
		// Retourne une erreur 500 avec un message d'erreur en cas de problème.
		res.status(500).json({ message: `Erreur lors de la connexion`, error });
	}
};

// Contrôleur pour déconnecter un utilisateur
exports.logout = async (req, res) => {
	try {
		res.clearCookie('jwt'); // Supprime le cookie contenant le token JWT.
		res.status(200).json({ message: 'Déconnexion réussie' }); // Retourne un message de succès.
		navigate('/'); // Redirige l'utilisateur vers la page d'accueil (nécessite une implémentation front-end).
	} catch (error) {
		// Retourne une erreur 500 avec un message d'erreur en cas de problème.
		res.status(500).json({ message: `Erreur lors de la déconnexion`, error });
	}
};
