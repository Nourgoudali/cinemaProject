# Cine Manager App - Frontend

## Contexte du projet
CinéManager est une application de gestion de cinéma qui évolue pour inclure une plateforme de streaming en ligne, permettant aux utilisateurs de réserver des séances de cinéma et de visionner des films en VOD (vidéo à la demande). Ce projet se concentre sur le développement du frontend en utilisant React.


## Étapes du projet
1. **Création de l'application** : Mise en place d'une nouvelle application React en utilisant Create React App.
2. **Formulaire d'inscription** : Création d'un formulaire d'inscription avec validation des entrées côté frontend.
3. **Implémentation de la connexion** : Récupération du jeton JWT généré par le backend lors de l'authentification.
4. **Gestion du jeton JWT** : Stockage du jeton dans les cookies ou le stockage local du navigateur.
5. **Réinitialisation du mot de passe** : Implémentation de la fonctionnalité permettant aux utilisateurs de réinitialiser leur mot de passe.
6. **Page de réservation** : Création d'une page pour afficher et réserver des séances de cinéma.
7. **Filtrage des films** : Ajout d'une fonctionnalité permettant de filtrer les films par genre, date, etc.
8. **Affichage des réservations** : Présentation des réservations de chaque client.

## Dockerisation
Ce projet utilise Docker et Docker Compose pour simplifier le déploiement. Le frontend React sera accessible via un navigateur web une fois les conteneurs démarrés. Les étapes de dockerisation et de configuration sont documentées ci-dessous.

## Technologies et bibliothèques utilisées
- **React** : Pour le développement de l'interface utilisateur.
- **React Router** : Pour la gestion des routes et de la navigation.
- **Axios** : Pour effectuer des requêtes HTTP vers le backend.
- **Formik ou React Hook Form** : Pour la gestion des formulaires.
- **Context API / Redux (optionnel)** : Pour la gestion de l'état global de l'application.

## Objectifs du projet
- Compréhension et mise en œuvre des fonctionnalités de base.
- Configuration de l'environnement et création de l'application React.
- Développement des pages et des composants de l'interface utilisateur.
- Communication efficace avec le backend.
- Intégration de Docker et documentation des étapes de configuration.


## Documentation
La documentation inclut les étapes suivies, les choix de conception, et la configuration de Docker. Un rapport détaillé est également fourni expliquant l'intégration de Docker dans le projet.

## Installation et exécution
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/walid-lhaila/CINEMANAGER-FRONT-END.git
   
   cd CINEMANAGER-FRONT-END
   
   npm install
   
   npm run dev