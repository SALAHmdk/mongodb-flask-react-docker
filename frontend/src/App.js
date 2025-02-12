import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    // Récupérer la liste depuis l'API Flask
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:5050/list")
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error("Erreur lors de la récupération des données :", error));
    };

    // Ajouter une nouvelle entrée
    const addData = () => {
        if (!name || !age) {
            alert("Veuillez entrer un nom et un âge !");
            return;
        }
        axios.post("http://localhost:5050/add", { name, age: parseInt(age) })
            .then(() => {
                fetchData();
                setName("");
                setAge("");
            })
            .catch(error => console.error("Erreur lors de l'ajout de données :", error));
    };

    // Supprimer une entrée
    const deleteData = (name) => {
        if (!window.confirm(`Voulez-vous supprimer ${name} ?`)) return;

        axios.post("http://localhost:5050/delete", { name })
            .then(() => {
                fetchData();
            })
            .catch(error => console.error("Erreur lors de la suppression :", error));
    };

    return (
        <div className="container">
            <h1>📊 MongoDB + Flask + React</h1>

            {/* Formulaire */}
            <div className="form-container">
                <input
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Âge"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <button onClick={addData} className="btn add-btn">➕ Ajouter</button>
                <button onClick={fetchData} className="btn refresh-btn">🔄 Actualiser</button>
            </div>

            {/* Liste des entrées */}
            <h2>Données stockées</h2>
            {data.length > 0 ? (
                <ul className="data-list">
                    {data.map((item, index) => (
                        <li key={index} className="data-item">
                            <strong>{item.name}</strong> - {item.age} ans
                            <button className="delete-btn" onClick={() => deleteData(item.name)}>🗑 Supprimer</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-data">Aucune donnée disponible.</p>
            )}

            {/* Affichage du graphique */}
            <h2>📊 Graphique des âges</h2>
            <div className="chart-container">
                <img src="http://localhost:5050/chart" alt="Graphique des âges" className="chart" />
            </div>
        </div>
    );
}

export default App;
