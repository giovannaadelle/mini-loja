import { products } from "../../../data.js/";
import { Skeleton } from "./Skeleton";
import { ProductCard } from "./ProductCard";
import styles from "./ProductGrid.module.css"

export const ProductGrid = ({ isLoading }) => {
  const grid = products.length;

  return (
    <div className={styles.container}>
      {isLoading
        ? Array.from({ length: grid }).map((index) => <Skeleton key={index} />)
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
};
