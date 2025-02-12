# Utiliser une image Python
FROM python:3.9

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY app/ /app/

# Installer les dépendances
RUN pip install -r requirements.txt

# Exposer le port de Flask
EXPOSE 5000

# Lancer l'application
CMD ["python", "main.py"]
