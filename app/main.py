import io
import random

import matplotlib.pyplot as plt
from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connexion à MongoDB
client = MongoClient("mongodb://mongo:27017/")
db = client.mydatabase
collection = db.mycollection

@app.route("/")
def home():
    return jsonify({"message": "Bienvenue dans l'API Python avec MongoDB!"})

@app.route("/add", methods=["POST"])
def add_data():
    data = request.get_json()
    if "name" in data and "age" in data:
        collection.insert_one(data)
        return jsonify({"message": "Donnée ajoutée!"}), 201
    else:
        return jsonify({"error": "Nom et âge requis"}), 400

@app.route("/list")
def list_data():
    data = list(collection.find({}, {"_id": 0}))
    return jsonify(data)

@app.route("/delete", methods=["POST"])
def delete_data():
    data = request.get_json()
    if "name" in data:
        result = collection.delete_one({"name": data["name"]})
        if result.deleted_count > 0:
            return jsonify({"message": "Donnée supprimée!"}), 200
        else:
            return jsonify({"error": "Utilisateur non trouvé"}), 404
    else:
        return jsonify({"error": "Nom requis"}), 400

@app.route("/chart")
def chart():
    # Récupérer les données de MongoDB
    data = list(collection.find({}, {"_id": 0}))

    if not data:
        return jsonify({"error": "Pas de données pour générer un graphique"}), 400

    # Extraire les noms et âges
    noms = [item["name"] for item in data]
    ages = [item["age"] for item in data]

    # Générer des couleurs dynamiques
    colors = [f'#{random.randint(0, 0xf4f4f4):06x}' for _ in range(len(noms))]

    # Générer un graphique avec matplotlib
    plt.figure(figsize=(10, 7))  # Plus grand graphique pour le rendre visible
    plt.bar(noms, ages, color=colors)
    plt.xlabel("Nom", fontsize=14)
    plt.ylabel("Âge", fontsize=14)
    plt.title("📊 Répartition des Âges", fontsize=16, fontweight="bold")
    plt.xticks(rotation=30, fontsize=12)
    plt.yticks(fontsize=12)
    plt.grid(axis='y', linestyle="--", alpha=0.7)  # Grille pour une meilleure lecture

    # Ajuster la mise en page pour éviter les coupures
    plt.tight_layout()

    # Sauvegarder l'image en mémoire et l'envoyer
    img = io.BytesIO()
    plt.savefig(img, format="png")
    img.seek(0)
    plt.close()  # Fermer la figure pour éviter la surcharge mémoire
    return send_file(img, mimetype="image/png")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050, debug=True)
