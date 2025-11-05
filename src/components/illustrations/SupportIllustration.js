function SupportIllustration(props) {
  return (
    <svg
      viewBox="0 0 360 320"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="supportIllustrationTitle"
      {...props}
    >
      <title id="supportIllustrationTitle">Support agents assisting customers</title>
      <defs>
        <linearGradient id="supportBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3e8ff" />
          <stop offset="100%" stopColor="#e0d7ff" />
        </linearGradient>
      </defs>
      <rect x="20" y="36" width="320" height="220" rx="28" fill="url(#supportBg)" />
      <g transform="translate(72 72)">
        <rect width="216" height="132" rx="24" fill="#ffffff" />
        <rect x="28" y="38" width="160" height="12" rx="6" fill="#d1c4ff" />
        <rect x="28" y="60" width="140" height="10" rx="5" fill="#e8e2ff" />
        <rect x="28" y="78" width="116" height="10" rx="5" fill="#e8e2ff" />
        <g transform="translate(162 16)">
          <rect width="44" height="44" rx="16" fill="#ed1c24" opacity="0.9" />
          <path
            d="M22 14c4.4 0 8 3.6 8 8 0 3.2-1.9 6-4.7 7.3l1.5 4.7h-9.6l1.5-4.8a8 8 0 018.3-15.2z"
            fill="#ffffff"
          />
        </g>
        <g transform="translate(-32 88)">
          <rect width="96" height="48" rx="16" fill="#ffffff" stroke="#d1c4ff" />
          <circle cx="32" cy="24" r="12" fill="#ed1c24" opacity="0.8" />
          <rect x="52" y="16" width="30" height="8" rx="4" fill="#d1c4ff" />
          <rect x="52" y="28" width="34" height="6" rx="3" fill="#ede7ff" />
        </g>
        <g transform="translate(212 88)">
          <rect width="96" height="48" rx="16" fill="#ffffff" stroke="#d1c4ff" />
          <rect x="16" y="16" width="30" height="8" rx="4" fill="#d1c4ff" />
          <rect x="16" y="28" width="34" height="6" rx="3" fill="#ede7ff" />
          <circle cx="72" cy="24" r="12" fill="#23a6f0" opacity="0.8" />
        </g>
      </g>
      <path
        d="M88 278c16-12 38-12 54 0s38 12 54 0 38-12 54 0"
        stroke="#d1c4ff"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default SupportIllustration;
