import styled from "styled-components";
import { products } from "../../../data.js/";
import { Skeleton } from "./Skeleton";
import { ProductCard } from "./ProductCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
  padding: 32px;
  justify-items: center;
  align-items: start;
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProductGrid = ({ isLoading }) => {
  const grid = products.length;
  return (
    <GridContainer>
      {isLoading
        ? Array.from({ length: grid }).map((_, index) => <Skeleton key={index} />)
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </GridContainer>
  );
};
