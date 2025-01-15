const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: `Erreur lors de la récupération des utilisateurs`, error }
		);
	}
};

// Ajouter
exports.createUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const newUser = await User.create({ name, email, password });
		res.status(201).json(newUser)
	} catch (error) {
		res.status(500).json({ message: `Erreur lors de la création de l'utilisateur`, error })
	}
}