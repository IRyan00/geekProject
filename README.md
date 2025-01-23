<a id="readme-top"></a>

  <h1 align="center">GeekProject</h1>
  <h2 align="center">Projet fil rouge TP DWWM Bayonne</h2>


<h3 align="center">A propos de ce projet<h3>

C'est un projet à but éducatif dans le cadre de la formation "TP DWWM" à l'AFEC de Bayonne.

### Les objectifs du projet  
- manipuler la partie back-end d'un projet web en maitrisant Node.Js et MongoDB. 
- de travailler en équipe avec des outils collaboratifs (trello), le déploiement local (MongoDB) et faire des tests (Postman).
- structurer et documenter une application technique (Google Docs). 

Pour ce qui est de la préparation et de la concéption,
- Nous avons dû mettre en place des outils comme :
    - Node.js pour le développement.
    - MongoDB Compass pour visualiser les données.
    - Postman pour tester les routes API.
    - GitHub pour le suivi du code (branches main, dev, feature).
    - Trello pour la gestion des tâches (user stories, backlog, tâches quotidiennes).

- Nous avons également réalisé des diagrammes :
    -  UML de classes pour structurer les entités.
    - Diagramme d'activité pour les processus principaux.
    - Carte mentale pour une vue d’ensemble des fonctionnalités.

### Développement des Bases

- Initialisation de l’application backend :
    - Mise en place de Node.js avec Express.
    - Configuration de MongoDB avec Mongoose.

- Développement des premières routes :
    - Gestion des utilisateurs (inscription, connexion, déconnexion avec JWT et bcrypt).
    - Création et affichage des annonces (ventes et dons).

- Tests et Débogage
    - Test des routes avec Postman.
    - Résolution des erreurs et amélioration du code.


- Ajout de Fonctionnalités
    - Gestion des annonces avancée (filtrage par type : vente ou don).
    - Développement du panier (ajout et suppression d’articles).

- Finalisation
    - Ajout des routes pour gérer les commandes (validation et affichage).
    - Développement des fonctionnalités liées aux dons (liste des objets donnés, réservation).
    - Documentation complète de l’API (fichier markdown ou Swagger).

- Démonstration et Déploiement Local
    - Test complet des fonctionnalités.
    - Démonstration du projet par chaque groupe.


### But du projet 
Dans ce cas l'objectif est de réaliser une plateforme de vente et de dons d'objet en rapport avec l'univers du jeu vidéo, de la culture japonaise (mangas, figurines d'animés) et d'autres objets en tout genres relié à la culture geek.
La plateforme inclura des fonctionnalités essentielles comme la gestion des utilisateurs, des annonces, des commandes, et des dons.

Pour ce faire nous avons créer un mvc*

```bash 
*
project/
├── src/
│   ├── config/
│   │   └── database.js         # Configuration de la connexion MongoDB
│   │
│   ├── controllers/
│   │   ├── authController.js   # Gestion des utilisateurs
│   │   ├── cartController.js   # Gestion du panier
│   │   ├── adController.js     # Gestion des annonces
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
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Technologies utilisées

### Backend
- **_Node.js_** avec Express : Framework backend.
- **_MongoDB avec Mongoose_** : Base de données NoSQL.
- **_jsonwebtoken (JWT)_** : Gestion de l’authentification.
- **_bcrypt_** : Cryptage des mots de passe.
### Collaboration et Suivi
- **_GitHub_** : Suivi du code et branches (main, dev, feature).
- **_Trello_** : Suivi des tâches collaboratives.
### Tests et Visualisation
- **_Postman_** : Tests des routes API.
- **_MongoDB_** Compass : Visualisation des données.
### Documentation
- Utilisation de **_Swagger_** ou d’un fichier **_markdown_** structuré.

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

Créer un fichier `.env` à la racine du projet avec les variables suivantes :
   ```ini
  PORT = le_port_sohaité (e.g 3000)
  MONGO_URI = votre_uri_mongodb
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Equipe
| Nom  | GitHub |
| ------------- | ------------- |
| Iban Letoile  | https://github.com/IbanL|
| Gérard Romero | https://github.com/Ger-ard    |
| Thomas Baullard   | https://github.com/TMS-B  |
| Ryan Eymas | https://github.com/IRyan00   |


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Démo

### [ Backend - Render ](https://geekproject.onrender.com )

## Liens Utiles

- <a href="https://trello.com/b/eJTXoZUS/geekproject">Trello</a>
- <a href="https://docs.google.com/document/d/18_fqENGk0fTR6b3LnP3UKBsF_1hyelgP4yCyLKKQpjs/edit?tab=t.0">Google docs</a>