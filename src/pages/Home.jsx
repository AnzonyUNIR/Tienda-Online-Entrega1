import { useFetch } from '../hooks/useFetch';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import './Home.css'; // Crearemos un CSS pequeño para el título

const Home = () => {
  const { data: products, loading } = useFetch();

  return (
    <div className="home-container">
      {/* 1. Insertamos el Hero Section */}
      <HeroSection />

      {/* 2. Sección de Productos Destacados */}
      <section className="featured-section">
        <h2 className="featured-section__title">Productos Destacados</h2>
        
        {loading ? (
          <p>Cargando destacados...</p>
        ) : (
          <div className="featured-grid">
            {/* Solo mostramos los primeros 3 productos con .slice(0, 3) */}
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;