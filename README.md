<a id="readme-top"></a>

  <h1 align="center">GeekProject</h1>
  <h3 align="center">Projet fil rouge TP DWWM Bayonne</h3>


## A propos de ce projet

Projet à but éducatif dans le cadre de la formation "TP DWWM" à l'AFEC de Bayonne.

L'objectif est de manipuler la partie back-end d'un projet web. 

Dans ce cas l'objectif est de réaliser une plateforme de vente et de dons d'objet en rapport avec l'univers du jeu vidéo, de la culture japonaise (mangas, figurines d'animés) et d'autres objets en tout genres relié à la culture geek.

Pour ce faire nous avons créer un mvc*

*project/
├── src/
│   ├── config/
│   │   └── database.js         # Configuration de la connexion MongoDB
│   │
│   ├── controllers/
│   │   ├── authController.js   # Gestion des utilisateurs

│   │   ├── cartController.js   # Gestion du panier│   │   ├── adController.js     # Gestion des annonces
│   │   └── orderController.js  # Gestion des commandes
│   │
│   ├── models/
│   │   ├── User.js             # Modèle utilisateur
│   │   ├── Ad.js               # Modèle annonce
│   │   ├── Cart.js             # Modèle panier
│   │   └── Order.js            # Modèle commande
│   │
│   ├── routes/
│   │   ├── authRoutes.js       # Routes pour les utilisateurs
│   │   ├── adRoutes.js         # Routes pour les annonces
│   │   ├── cartRoutes.js       # Routes pour les paniers
│   │   └── orderRoutes.js      # Routes pour les commandes
│   │
│   ├── middlewares/
│   │   ├── authMiddleware.js   # Middleware d'authentification
│   │   └── errorHandler.js     # Gestion des erreurs globales
│   │
│   ├── utils/
│   │   ├── validateInput.js    # Validation des données d'entrée
│   │   └── jwtUtils.js         # Génération et vérification des tokens JWT
│   │
│   ├── app.js                  # Configuration principale de l'application
│   └── server.js               # Point d'entrée du serveur
│
├── tests/
│   ├── auth.test.js            # Tests pour l'authentification
│   ├── ad.test.js              # Tests pour les annonces
│   └── cart.test.js            # Tests pour le panier
│
├── public/                     # Dossier pour les fichiers statiques (si besoin)
│
├── .env                        # Variables d'environnement
├── .gitignore                  # Fichiers à ignorer par Git
├── package.json                # Dépendances et scripts du projet
└── README.md                   # Documentation du projet

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Technologies utilisées

* Javascript

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Prérequis

* npm :
  ```sh
  npm install npm@latest -g
  ```

## Installation

1. Cloner le répertoire :
   ```sh
   git clone https://github.com/IRyan00/geekProject
   ```
2. Installer les dépendances :
   ```sh
   npm install
   ```
3. Lancer le serveur :
   ```sh
   npm start
   ```

## Configuration

<p>Créer un fichier `.env` à la racine du projet avec les variables suivantes :</p>
   ```
  PORT=le_port_sohaité (e.g 3000)
  MONGO_URI=votre_uri_mongodb
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Equipe

<a href="https://github.com/IbanL">Iban Letoile</a>

<a href="https://github.com/Ger-ard">Gérard Romero</a>

<a href="https://github.com/TMS-B">Thomas TMS</a>

<a href="https://github.com/IRyan00">Ryan Eymas</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Démo

Render - 