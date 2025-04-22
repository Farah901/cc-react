import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Voitures from './pages/Voitures';
import Salaries from './pages/Salaries';
import Recherche from './pages/Recherche';

export default function App() {
  const [salaries, setSalaries] = useState([
    {nom:'El kandouchi', 
      prenom:'Farah',
      fonction:'Web Full-Stack Developer',
      service:'IT',
    }
  ]);

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Voitures />} />
          <Route path="/salaries" element={<Salaries salaries={salaries} setSalaries={setSalaries} />} />
          <Route path="/recherche" element={<Recherche salaries={salaries} />} />
        </Routes>
      </div>
    </>
  );
}
