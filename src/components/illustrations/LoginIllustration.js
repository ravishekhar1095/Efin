function LoginIllustration(props) {
  return (
    <svg
      viewBox="0 0 320 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="loginIllustrationTitle"
      {...props}
    >
      <title id="loginIllustrationTitle">Mobile login with OTP security</title>
      <defs>
        <linearGradient id="loginGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff5f7" />
          <stop offset="100%" stopColor="#ffe3e8" />
        </linearGradient>
      </defs>
      <rect x="24" y="28" width="272" height="184" rx="28" fill="url(#loginGradient)" />
      <rect x="96" y="52" width="128" height="176" rx="26" fill="#ffffff" />
      <rect x="112" y="78" width="96" height="12" rx="6" fill="#f27d82" />
      <rect x="112" y="104" width="72" height="10" rx="5" fill="#ffcdd2" />
      <rect x="112" y="122" width="90" height="10" rx="5" fill="#ffcdd2" />
      <g transform="translate(112 148)">
        <rect width="96" height="40" rx="14" fill="#ed1c24" opacity="0.9" />
        <rect x="20" y="14" width="56" height="12" rx="6" fill="#ffffff" />
      </g>
      <circle cx="220" cy="168" r="36" fill="#ffffff" stroke="#ed1c24" strokeWidth="6" />
      <path
        d="M208 168h24"
        stroke="#ed1c24"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M216 160l-8 8 8 8"
        stroke="#ed1c24"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M84 210c12-8 30-8 42 0s30 8 42 0"
        stroke="#ffd6dc"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default LoginIllustration;
