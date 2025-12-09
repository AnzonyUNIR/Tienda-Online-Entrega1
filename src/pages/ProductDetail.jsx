import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'; 
import './ProductDetail.css';

const ProductDetail = () => {
  
  const { id } = useParams();

  const { data: products, loading } = useFetch();

  if (loading) {
    return <div className="detail-container"><h2>Cargando detalle...</h2></div>;
  }

  // Buscamos el producto específico. 
  const product = products.find((item) => item.id === parseInt(id));

  // Si no existe el producto
  if (!product) {
    return (
      <div className="detail-container">
        <h2>Producto no encontrado</h2>
        <Link to="/catalogo" className="detail__back-btn">Volver al catálogo</Link>
      </div>
    );
  }

  // Detalle
  return (
    <div className="detail-container">
     
      <Link to="/catalogo" className="detail__back-link">
         &larr; Volver al Catálogo
      </Link>

      <div className="product-detail">
    
        <div className="product-detail__gallery">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-detail__image" 
          />
        </div>

        <div className="product-detail__info">
          <span className="product-detail__category">{product.category}</span>
          <h1 className="product-detail__title">{product.name}</h1>
          <p className="product-detail__description">{product.description}</p>
          
          <div className="product-detail__price-box">
            <span className="product-detail__price">${product.price.toFixed(2)}</span>
            <button 
              className="product-detail__btn"
              onClick={() => alert(`Añadiste ${product.name} al carrito`)}
            >
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;