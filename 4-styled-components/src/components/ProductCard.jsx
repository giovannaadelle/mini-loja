import { Button } from "./Button";
import styled from "styled-components";

const Card = styled.div`
  background-color: var(--card-color);
  border-radius: 14px;
  box-shadow: 0 2px 10px var(--shadow-color);
  border: 2px solid var(--secondary-color);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  width: 300px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px var(--shadow-color);
  }
`;
const ImageContainer = styled.div`
  padding: 1rem;
`;
const ProductImage = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
`;
const Content = styled.div`
  padding: 1rem;
`;
const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  height: 2.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const PriceRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
const Price = styled.span`
  font-weight: 700;
  color: var(--primary-color);
`;
const Rating = styled.div`
  color: var(--tertiary-color);
`;
const Tag = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
  background-color: #7f7434;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
`;

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
    <Card>
      <ImageContainer>
        <ProductImage src={image} alt={title} loading="lazy" />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <PriceRating>
          <Price>{formatedPrice}</Price>
          <Rating>
            {starArray.map((star, index) => (
              <span key={index}>{star}</span>
            ))}
            {hasHalfStar && <span>★</span>}
          </Rating>
        </PriceRating>
        {tag && <Tag>{tag}</Tag>}
        <Button variant="brown">Comprar</Button>
      </Content>
    </Card>
  );
};
