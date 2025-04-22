import React from 'react';
import '../App.css';

export default function SalarieCard({ salarié }) {
  return (
    <div className="card">
      <h3>{salarié.prenom} {salarié.nom}</h3>
      <p><strong>Fonction:</strong> {salarié.fonction}</p>
      <p><strong>Service:</strong> {salarié.service}</p>
    </div>
  );
}
