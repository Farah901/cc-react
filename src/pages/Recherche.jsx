import { useState } from 'react';
import SalarieCard from '../components/SalarieCard';

export default function Recherche({ salaries }) {
  const [query, setQuery] = useState('');

  const filtered = salaries.filter(s =>
    s.service.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Recherche par Service</h2>
      <input
        className="input search"
        placeholder="Rechercher un service..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="card-list">
        {filtered.map((s, i) => <SalarieCard key={i} salarié={s} />)}
      </div>
    </div>
  );
}
