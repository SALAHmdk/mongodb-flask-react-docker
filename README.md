
# 📊 MongoDB + Flask + React avec Docker

Un projet Full-Stack qui utilise **MongoDB**, **Flask**, **React** et **Docker** pour gérer et visualiser des données sous forme de graphiques.

## 🚀 Fonctionnalités principales

1. 🔍 **Affichage des données** stockées dans **MongoDB** avec une interface React.
2. ➕ **Ajout & Suppression** de données dynamiquement depuis l'interface.
3. 📊 **Visualisation des données** sous forme de graphique interactif.

---

## 📂 Arborescence du projet

```
docker-mongo-python/
│── backend/                # Code Flask (Backend)
│   ├── app.py              # Application Flask principale
│   ├── requirements.txt    # Dépendances Python
│   ├── Dockerfile          # Fichier Docker pour Flask
│
│── frontend/               # Code React (Frontend)
│   ├── src/
│   │   ├── App.js          # Composant principal React
│   │   ├── App.css         # Styles CSS
│   │   ├── index.js        # Point d’entrée React
│   ├── package.json        # Dépendances React
│   ├── Dockerfile          # Fichier Docker pour React
│
│── docker-compose.yml      # Configuration Docker Compose
│── README.md               # Documentation du projet
```

### 🛠 Explication des fichiers :
- **backend/app.py** : Contient l’API Flask qui gère les routes pour ajouter, supprimer et récupérer des données.
- **backend/requirements.txt** : Liste des dépendances Python (Flask, PyMongo, Flask-CORS, Matplotlib).
- **backend/Dockerfile** : Fichier permettant de créer une image Docker pour le backend.
- **frontend/src/App.js** : Composant React principal qui gère l'affichage et les requêtes API.
- **frontend/package.json** : Contient les dépendances React et les configurations.
- **docker-compose.yml** : Orchestre tous les conteneurs avec Docker Compose.
- **README.md** : Ce fichier de documentation.

---

## 🚀 Installation et exécution du projet

### 🔹 1. Prérequis

Avant de commencer, assure-toi d'avoir installé :
- **Docker** et **Docker Compose** : [Installation](https://docs.docker.com/get-docker/)
- **Git** : [Installation](https://git-scm.com/)
- **Node.js** (pour React) : [Installation](https://nodejs.org/)

---

### 🔹 2. Cloner le projet
```bash
git clone https://github.com/ton-github/mongo-flask-react-docker.git
cd mongo-flask-react-docker
```

---

### 🔹 3. Lancer le projet avec Docker Compose
```bash
docker-compose up -d --build
```
🔹 Cela va :
- Télécharger et installer **MongoDB**, **Flask** et **React**.
- Lancer tous les services automatiquement.

💡 Pour voir les logs :
```bash
docker-compose logs -f
```

---

### 🔹 4. Accéder à l'application
📌 **Backend Flask** : [http://localhost:5050](http://localhost:5050)  
📌 **Frontend React** : [http://localhost:3000](http://localhost:3000)  

---

## ⚙️ API Flask (Backend)

### 📍 Liste des routes
| Méthode  | Route        | Description |
|----------|-------------|-------------|
| **GET**  | `/`         | Message de bienvenue |
| **POST** | `/add`      | Ajoute une nouvelle donnée |
| **GET**  | `/list`     | Récupère la liste des données |
| **POST** | `/delete`   | Supprime une entrée |
| **GET**  | `/chart`    | Génère un graphique des âges |

---

## 🖥️ Interface utilisateur (Frontend)

### 🎯 1. **Affichage des données**
Affiche les données stockées dans MongoDB sous forme de liste.

![Affichage des données](https://user-images.githubusercontent.com/example/data-list.png)

### 🎯 2. **Ajout & Suppression des données**
Ajoute un nouvel utilisateur et supprime une entrée avec un bouton.

![Ajout/Suppression](https://user-images.githubusercontent.com/example/add-delete.png)

### 🎯 3. **Visualisation sous forme de graphique**
Un graphique représente la répartition des âges des utilisateurs.

![Graphique des âges](https://user-images.githubusercontent.com/example/chart.png)

---

## 🚀 Commandes utiles

### ⏹️ **Arrêter le projet**
```bash
docker-compose down
```

### 🔄 **Rebuild & Restart**
```bash
docker-compose down -v
docker-compose up -d --build
```

### 📜 **Voir les logs**
```bash
docker-compose logs -f
```

---

## 📜 Licence

Ce projet est sous la licence **MIT**.  
🔹 **Auteur : Salah MOHAND KACI**  
🔹 © 2025 - Tous droits réservés.
