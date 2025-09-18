import { Button } from "./Button";

export const ProductCard = ({ product }) => {
  const { title, price, rating, tag, image } = product;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const starArray = Array(fullStars).fill("★");

  const formatedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img 
        className="product-card__image" 
        src={image}
        alt={title} 
        loading="lazy"
          
        />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <span className="product-card__price">{formatedPrice}</span>
        <div className="product-card__rating">
          {starArray.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
          {hasHalfStar && <span className="product-card__half-star">★</span>}
        </div>
        <div className="product-card__tag">
          {tag && <span className="tag">{tag}</span>}
        </div>
        <Button text="Comprar" variant="solid"></Button>
      </div>
    </div>
  );
};
