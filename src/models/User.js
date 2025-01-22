const mongoose = require('mongoose'); // Import de Mongoose pour gérer les interactions avec MongoDB
const bcrypt = require('bcrypt'); // Import de bcrypt pour le hachage des mots de passe

// Définition du schéma de l'utilisateur
const userSchema = new mongoose.Schema({
	name: { type: String, required: true }, // Champ nom, obligatoire
	email: { type: String, required: true, unique: true }, // Champ email, obligatoire et unique
	password: { type: String, require: true }, // Champ mot de passe, obligatoire
},
	{
		timestamps: true // Ajout automatique des champs createdAt et updatedAt
	});

// Middleware exécuté avant l'enregistrement d'un document utilisateur
userSchema.pre('save', async function (next) {
	// Si le mot de passe n'a pas été modifié, passer à l'étape suivante sans le re-hacher
	if (!this.isModified('password')) {
		return next();
	}
	const salt = await bcrypt.genSalt(10); // Génération d'un sel pour le hachage du mot de passe

	this.password = await bcrypt.hash(this.password, salt); // Hachage du mot de passe avec bcrypt
	next(); // Passe au middleware suivant
});

// Méthode pour comparer un mot de passe fourni avec celui stocké en base
userSchema.methods.comparePassword = async function (candidatePassword) {
	return await bcrypt.compare(candidatePassword, this.password); // Renvoie true si les mots de passe correspondent, sinon false
};

// Exportation du modèle User basé sur le schéma userSchema
module.exports = mongoose.model('User', userSchema);
