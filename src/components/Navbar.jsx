import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">Anzony Tienda Online</Link>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
          >
            Inicio
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink 
            to="/catalogo" 
            className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
          >
            Catálogo
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink 
            to="/nosotros" 
            className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
          >
            Nosotros
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;