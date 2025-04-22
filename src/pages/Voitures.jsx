import { useState } from 'react';
import VoitureCard from '../components/VoitureCard';

export default function Voitures() {
  const [voitures, setVoitures] = useState([]);
  const [voiture, setVoiture] = useState({
    matricule: '', marque: '', date: '', couleur: ''
  });

  const handleAdd = () => {
    setVoitures([...voitures, voiture]);
    setVoiture({ matricule: '', marque: '', date: '', couleur: '' });
  };

  return (
    <div>
      <h2>Ajouter une Voiture</h2>
      <div className="form-grid">
        <input className="input" placeholder="Matricule" value={voiture.matricule} onChange={e => setVoiture({ ...voiture, matricule: e.target.value })} />
        <input className="input" placeholder="Marque" value={voiture.marque} onChange={e => setVoiture({ ...voiture, marque: e.target.value })} />
        <input className="input" type="date" value={voiture.date} onChange={e => setVoiture({ ...voiture, date: e.target.value })} />
        <input className="input" placeholder="Couleur" value={voiture.couleur} onChange={e => setVoiture({ ...voiture, couleur: e.target.value })} />
      </div>
      <button className="btn" onClick={handleAdd}>Ajouter</button>

      <div className="card-list">
        {voitures.map((v, i) => <VoitureCard key={i} voiture={v} />)}
      </div>
    </div>
  );
}