import { Button } from "./Button";
import styles from "./ProductCard.module.css"

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
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
        className={styles.image}
        src={image}
        alt={title} 
        loading="lazy"
          
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.priceRating}>
          <span className={styles.price}>{formatedPrice}</span>
          <div className={styles.rating}>
            {starArray.map((star, index) => (
              <span key={index}>{star}</span>
            ))}
            {hasHalfStar && <span className={styles.halfStar}>★</span>}
          </div>
        </div>
        {tag && <div className={styles.tag}>{tag}</div>}
        <Button text="Comprar" variant="brown"></Button>
      </div>
    </div>
  );
};
