import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Tecnología del Futuro, Hoy</h1>
        <p className="hero__subtitle">
          Descubre las mejores ofertas en electrónica, accesorios y gadgets de última generación.
        </p>
        <Link to="/catalogo" className="hero__cta-button">
          Ver Ofertas
        </Link>
      </div>
   
      <div className="hero__image-container">
        <img 
          src="https://placehold.co/600x400/2c3e50/white?text=Anzony+Store" 
          alt="Banner Tienda" 
          className="hero__image"
        />
      </div>
    </section>
  );
};

export default HeroSection;