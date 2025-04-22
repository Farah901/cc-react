import React from 'react';
import '../App.css';

export default function VoitureCard({ voiture }) {
  return (
    <div className="card">
      <h3>{voiture.marque} - {voiture.matricule}</h3>
      <p><strong>Date mise en circulation:</strong> {voiture.date}</p>
      <p><strong>Couleur:</strong> {voiture.couleur}</p>
    </div>
  );
}
