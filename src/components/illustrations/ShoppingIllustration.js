function ShoppingIllustration(props) {
  return (
    <svg
      viewBox="0 0 360 300"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="shoppingIllustrationTitle"
      {...props}
    >
      <title id="shoppingIllustrationTitle">Person shopping with cards and bags</title>
      <defs>
        <linearGradient id="bagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff5f7" />
          <stop offset="100%" stopColor="#ffe3e8" />
        </linearGradient>
      </defs>
      <rect x="24" y="32" width="312" height="208" rx="28" fill="#f3f4ff" />
      <g transform="translate(60 70)">
        <rect width="96" height="64" rx="14" fill="#ed1c24" opacity="0.9" />
        <rect x="16" y="20" width="64" height="8" rx="4" fill="#ffffff" />
        <rect x="16" y="36" width="38" height="8" rx="4" fill="#ffffff" opacity="0.7" />
      </g>
      <g transform="translate(178 64)">
        <rect width="116" height="88" rx="20" fill="#ffffff" />
        <rect x="24" y="22" width="68" height="8" rx="4" fill="#ffd2d8" />
        <rect x="24" y="40" width="56" height="8" rx="4" fill="#ffe7ea" />
        <rect x="24" y="58" width="44" height="8" rx="4" fill="#ffe7ea" />
      </g>
      <g transform="translate(96 150)">
        <rect width="72" height="88" rx="18" fill="url(#bagGradient)" />
        <path
          d="M18 24c0-12 8-22 18-22s18 10 18 22"
          stroke="#ed1c24"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      <g transform="translate(182 150)">
        <rect width="80" height="92" rx="20" fill="#ffe0e4" />
        <path
          d="M22 24c0-12 8-22 18-22s18 10 18 22"
          stroke="#c4161a"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="22" y="54" width="36" height="10" rx="5" fill="#ed1c24" opacity="0.9" />
      </g>
      <path
        d="M104 250c14-10 34-10 48 0s34 10 48 0 34-10 48 0"
        stroke="#d2d4ff"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default ShoppingIllustration;
