# Plateforme de Streaming et Gestion de Cinéma

## 📌 Description
Une plateforme complète combinant la gestion d'un cinéma et un service de streaming (VOD). Les utilisateurs peuvent visionner des films, les noter, les commenter, et les ajouter à leurs favoris. L'administrateur gère les films, les utilisateurs et les statistiques via un tableau de bord dédié.

## 🎯 Fonctionnalités

### 👨‍💻 Utilisateurs (Clients)
- **Streaming** : Visionnage de films pour les utilisateurs abonnés (`subscribed`).
- **Notation** : Donner une note (1 à 5 étoiles) aux films.
- **Filtres** : Recherche par genre, titre ou date de sortie.
- **Commentaires** : Ajouter/supprimer des commentaires sous les films.
- **Dashboard Client** :
  - Modification des informations personnelles (nom, email, photo de profil, etc.).
  - Gestion des films favoris.
- **Accueil** : Affichage des derniers films ajoutés.
- **Détails Film** : Suggestions de films similaires (par genre ou titre).

### 🛠️ Administration
- **Gestion des Films** :
  - Upload de vidéos (formats pris en charge : MP4, MKV, etc.).
  - Visibilité des films (`public`, `privé`, `planifié`).
- **Gestion des Utilisateurs** :
  - Activation/désactivation de comptes.
  - Bannissement d'utilisateurs.
- **Statistiques** :
  - Nombre d’utilisateurs, films, visites.
  - Temps moyen passé par vidéo/page.

### 🎥 Bonus (Sites Imbriqués)
- **Gestion Cinéma** : Réservations, séances et salles.
- **Streaming VOD** : Catalogue de films en ligne.
- **Dashboard Admin** : Interface unifiée pour gérer films en salle et VOD.

## 🛠️ Stack Technique
- **Backend** : Node.js (Express) / Django / (à préciser).
- **Frontend** : React.js / Vue.js / (à préciser).
- **Base de Données** : PostgreSQL / MySQL / (à préciser).
- **Stockage Vidéo** : MinIO (avec gestion des droits d’accès).
- **API Docs** : Swagger (OpenAPI).
- **Autres** : 
  - JWT pour l'authentification.
  - Libs de métriques (ex: Grafana).

## 🔧 Installation
1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/votre-repo/plateforme-cinema.git
