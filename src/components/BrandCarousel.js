import BrandLogo from './BrandLogo';

function BrandCarousel({ brands = [] }) {
  if (!brands.length) {
    return null;
  }

  const repeated = [...brands, ...brands];

  return (
    <div className="brand-carousel" aria-label="Efin partners">
      <div className="brand-carousel-track">
        {repeated.map((brand, index) => (
          <BrandLogo key={`${brand.name}-${index}`} {...brand} />
        ))}
      </div>
    </div>
  );
}

export default BrandCarousel;
