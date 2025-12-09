import { useState } from 'react'; 
import { useFetch } from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar'; 
import './Catalog.css';

const Catalog = () => {
  const { data: products, loading, error } = useFetch();

  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <div className="catalog-container"><h2>Cargando...</h2></div>;
  if (error) return <div className="catalog-container"><h2>Error al cargar</h2></div>;

  const filteredProducts = products.filter((product) => {
   
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Nuestro Catálogo</h1>      
    
      <SearchBar onSearch={setSearchTerm} />

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="catalog-no-results">No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

export default Catalog;