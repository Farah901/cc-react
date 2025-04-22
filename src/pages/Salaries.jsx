import SalarieCard from '../components/SalarieCard';
import { useState } from 'react';

export default function Salaries({ salaries, setSalaries }) {
  const [salarie, setSalarie] = useState({
    nom: '', prenom: '', fonction: '', service: ''
  });

  const handleAdd = () => {
    setSalaries([...salaries, salarie]);
    setSalarie({ nom: '', prenom: '', fonction: '', service: '' });
  };

  return (
    <div>
      <h2>Ajouter un Salarié</h2>
      <div className="form-grid">
        <input className="input" placeholder="Nom" value={salarie.nom} onChange={e => setSalarie({ ...salarie, nom: e.target.value })} />
        <input className="input" placeholder="Prénom" value={salarie.prenom} onChange={e => setSalarie({ ...salarie, prenom: e.target.value })} />
        <input className="input" placeholder="Fonction" value={salarie.fonction} onChange={e => setSalarie({ ...salarie, fonction: e.target.value })} />
        <input className="input" placeholder="Service" value={salarie.service} onChange={e => setSalarie({ ...salarie, service: e.target.value })} />
      </div>
      <button className="btn" onClick={handleAdd}>Ajouter</button>

      <div className="card-list">
        {salaries.map((s, i) => <SalarieCard key={i} salarié={s} />)}
      </div>
    </div>
  );
}
