// Importation des modules nécessaires
const express = require('express'); // Framework web pour Node.js
const { getAllUsers, createUser, login, logout } = require('../controllers/authController'); // Importation des contrôleurs pour la gestion des utilisateurs
const router = express.Router(); // Création d'un routeur Express
const auth = require('../middlewares/authMiddleware'); // Middleware d'authentification

// Route pour récupérer tous les utilisateurs
// Cette route est protégée par le middleware d'authentification
router.get('/', auth, getAllUsers);

// Route pour ajouter un nouvel utilisateur
// Cette route n'est pas protégée, ce qui permet de créer des utilisateurs sans être authentifié
router.post('/addUser', createUser);

// Route pour la connexion utilisateur
// Cette route serait utilisée pour authentifier les utilisateurs et fournir un token
router.post('/login', login);

// Route pour la déconnexion
// Cette route est protégée par le middleware d'authentification
router.get('/logout', auth, logout);

// Exportation du routeur pour pouvoir l'utiliser dans d'autres fichiers
module.exports = router;