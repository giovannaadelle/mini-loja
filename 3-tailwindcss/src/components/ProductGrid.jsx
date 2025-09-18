import { products } from "../../../data.js/";
import { Skeleton } from "./Skeleton";
import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ isLoading }) => {
  const grid = products.length;

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {isLoading
        ? Array.from({ length: grid }).map((index) => <Skeleton key={index} />)
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
};
