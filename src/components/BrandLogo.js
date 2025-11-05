function BrandLogo({ name, initials, colors, accent }) {
  const gradient =
    Array.isArray(colors) && colors.length > 1
      ? `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`
      : colors?.[0] ?? '#0f172a';

  return (
    <figure className="brand-logo" aria-label={name}>
      <div className="brand-logo-mark" style={{ background: gradient, color: accent ?? '#ffffff' }}>
        {initials}
      </div>
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default BrandLogo;
