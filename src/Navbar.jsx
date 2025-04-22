import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">AutoGestion Pro</h1>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">Voitures</NavLink>
        <NavLink to="/salaries" className="nav-link">Salariés</NavLink>
        <NavLink to="/recherche" className="nav-link">Recherche</NavLink>
      </div>
    </nav>
  );
}