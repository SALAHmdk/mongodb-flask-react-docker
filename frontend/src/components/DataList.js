import React from "react";

function DataList({ data }) {
    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Liste des données :</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name} - {item.age} ans</li>
                ))}
            </ul>
        </div>
    );
}

export default DataList;
