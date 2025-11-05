import { useEffect, useMemo, useState } from 'react';

function ImageCarousel({ slides = [], autoPlay = true, interval = 5000 }) {
  const validSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((current) => (current + 1) % validSlides.length);
  };

  const handlePrev = () => {
    setIndex((current) => (current - 1 + validSlides.length) % validSlides.length);
  };

  useEffect(() => {
    if (!autoPlay || validSlides.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % validSlides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, validSlides.length]);

  if (validSlides.length === 0) {
    return null;
  }

  const activeSlide = validSlides[index];

  return (
    <div className="carousel" role="region" aria-roledescription="carousel">
      <div className="carousel-visual">
        <div
          className="carousel-slide"
          style={{
            background: activeSlide.background,
          }}
        >
          <span>{activeSlide.imageLabel}</span>
        </div>
        {validSlides.length > 1 ? (
          <>
            <button className="carousel-control prev" type="button" onClick={handlePrev} aria-label="Previous slide">
              ‹
            </button>
            <button className="carousel-control next" type="button" onClick={handleNext} aria-label="Next slide">
              ›
            </button>
          </>
        ) : null}
      </div>
      <div className="carousel-content">
        <span className="badge">{activeSlide.badge}</span>
        <h3>{activeSlide.title}</h3>
        <p>{activeSlide.description}</p>
        {activeSlide.list?.length ? (
          <ul>
            {activeSlide.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
      {validSlides.length > 1 ? (
        <div className="carousel-dots">
          {validSlides.map((slide, slideIndex) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Go to slide ${slideIndex + 1}`}
              className={slideIndex === index ? 'active' : undefined}
              onClick={() => setIndex(slideIndex)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ImageCarousel;
