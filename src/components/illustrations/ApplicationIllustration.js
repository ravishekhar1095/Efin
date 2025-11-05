function ApplicationIllustration(props) {
  return (
    <svg
      viewBox="0 0 320 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="applicationIllustrationTitle"
      {...props}
    >
      <title id="applicationIllustrationTitle">Application form and approval badge</title>
      <defs>
        <linearGradient id="appGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f1f8ff" />
          <stop offset="100%" stopColor="#e3efff" />
        </linearGradient>
      </defs>
      <rect x="20" y="28" width="280" height="200" rx="28" fill="url(#appGradient)" />
      <rect x="76" y="60" width="168" height="152" rx="24" fill="#ffffff" />
      <rect x="108" y="90" width="104" height="12" rx="6" fill="#90caf9" />
      <rect x="108" y="112" width="84" height="10" rx="5" fill="#cbe4ff" />
      <rect x="108" y="130" width="92" height="10" rx="5" fill="#cbe4ff" />
      <rect x="108" y="148" width="76" height="10" rx="5" fill="#cbe4ff" />
      <rect x="108" y="176" width="68" height="32" rx="12" fill="#ed1c24" opacity="0.9" />
      <path
        d="M228 180l20 20 32-32"
        fill="none"
        stroke="#22c55e"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="240" cy="184" r="42" fill="#ecfdf5" stroke="#22c55e" strokeWidth="4" />
      <path
        d="M82 204c12-10 32-10 44 0s32 10 44 0"
        stroke="#d7e8ff"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default ApplicationIllustration;
