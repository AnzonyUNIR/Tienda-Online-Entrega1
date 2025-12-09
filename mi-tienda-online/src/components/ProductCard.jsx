import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, image, category } = product;

  return (
    <article className="product-card">
      <div className="product-card__header">
        <img src={image} alt={name} className="product-card__image" />
        <span className="product-card__tag">{category}</span>
      </div>
      
      <div className="product-card__body">
        <h3 className="product-card__title">{name}</h3>
        <p className="product-card__price">${price.toFixed(2)}</p>
      </div>

      <div className="product-card__footer">
        
        <Link to={`/producto/${id}`} className="product-card__button">
          Ver Detalles
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;