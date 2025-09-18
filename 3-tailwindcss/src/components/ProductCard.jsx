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
  <div className="rounded-[14px] shadow-lg overflow-hidden transition-transform duration-200 relative w-[300px] hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: 'var(--card-color)' }}>
      <div className="p-4">
        <img 
        className="w-full h-auto object-cover" 
        src={image}
        alt={title} 
        loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold mb-2 h-10 overflow-hidden line-clamp-2">{title}</h3>
        <span className="font-bold text-[#d4a373]">{formatedPrice}</span>
        <div className="text-[#7f7434]">
          {starArray.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
          {hasHalfStar && <span className="text-[#7f7434]">★</span>}
        </div>
        <div className="absolute top-4 right-4">
          {tag && <span className="bg-[#7f7434] text-white px-2 py-1 rounded text-xs font-bold">{tag}</span>}
        </div>
  <Button variant="brown">Comprar</Button>
      </div>
    </div>
  );
};
