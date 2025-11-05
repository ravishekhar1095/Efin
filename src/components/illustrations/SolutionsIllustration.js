function SolutionsIllustration(props) {
  return (
    <svg
      viewBox="0 0 360 320"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="solutionsIllustrationTitle"
      {...props}
    >
      <title id="solutionsIllustrationTitle">Three finance plans represented by cards</title>
      <defs>
        <linearGradient id="solutionsBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e3f2fd" />
          <stop offset="100%" stopColor="#d0ebff" />
        </linearGradient>
      </defs>
      <rect x="16" y="24" width="328" height="224" rx="28" fill="url(#solutionsBg)" opacity="0.7" />
      <g transform="translate(38 60)">
        <rect width="96" height="148" rx="18" fill="#ffffff" />
        <rect x="16" y="24" width="64" height="12" rx="6" fill="#90caf9" />
        <rect x="16" y="48" width="52" height="8" rx="4" fill="#cbe4ff" />
        <rect x="16" y="64" width="52" height="8" rx="4" fill="#cbe4ff" />
        <rect x="16" y="84" width="30" height="30" rx="10" fill="#ed1c24" opacity="0.85" />
        <rect x="16" y="124" width="64" height="12" rx="6" fill="#ffebee" />
      </g>
      <g transform="translate(132 36)">
        <rect width="112" height="184" rx="22" fill="#ffffff" />
        <rect x="20" y="28" width="72" height="14" rx="7" fill="#42a5f5" />
        <rect x="20" y="54" width="64" height="10" rx="5" fill="#90caf9" />
        <rect x="20" y="72" width="68" height="10" rx="5" fill="#90caf9" />
        <rect x="32" y="100" width="48" height="48" rx="16" fill="#ed1c24" opacity="0.9" />
        <rect x="20" y="164" width="72" height="14" rx="7" fill="#e3f2fd" />
      </g>
      <g transform="translate(236 76)">
        <rect width="88" height="144" rx="18" fill="#ffffff" />
        <rect x="16" y="22" width="56" height="12" rx="6" fill="#64b5f6" />
        <rect x="16" y="46" width="48" height="8" rx="4" fill="#cbe4ff" />
        <rect x="16" y="64" width="48" height="8" rx="4" fill="#cbe4ff" />
        <rect
          x="16"
          y="98"
          width="44"
          height="28"
          rx="12"
          fill="#ffebee"
          stroke="#ed1c24"
          strokeWidth="2"
        />
      </g>
      <path
        d="M104 262c12-12 32-12 44 0s32 12 44 0 32-12 44 0 32 12 44 0"
        stroke="#b3e5fc"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default SolutionsIllustration;
