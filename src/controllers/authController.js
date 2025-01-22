const User = require('../models/User');
const JWT = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET

// Génère un JWT pour l'utilisateur
const generateToken = (_id) => {
	const token = JWT.sign({ _id }, JWT_SECRET, {
		expiresIn: '10h',

	});
	return token;
};

exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: `Erreur lors de la récupération des utilisateurs`, error }
		);
	}
};

// Create user
exports.createUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const newUser = await User.create({ name, email, password });
		const token = generateToken(newUser._id)
		res.status(201).json({ token })
	} catch (error) {
		res.status(500).json({ message: `Erreur lors de la création de l'utilisateur`, error })
	}
};

// Login





// Logout

exports.logout = async (req, res) => {
	try {
		res.clearCookie('jwt');
		res.status(200).json({ message: 'Déconnexion réussie' });
		navigate('/');
	} catch (error) {
		res.status(500).json({ message: `Erreur lors de la déconnexion`, error });
	}
};