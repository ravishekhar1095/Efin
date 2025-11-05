function VehicleIllustration(props) {
  return (
    <svg
      viewBox="0 0 360 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="vehicleIllustrationTitle"
      {...props}
    >
      <title id="vehicleIllustrationTitle">Two wheeler with rider outline</title>
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e3f2fd" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect x="16" y="24" width="328" height="168" rx="28" fill="url(#skyGradient)" />
      <path
        d="M76 164h208"
        stroke="#c8e6ff"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <g transform="translate(72 120)">
        <circle cx="40" cy="52" r="32" fill="#ffffff" stroke="#3b82f6" strokeWidth="8" />
        <circle cx="40" cy="52" r="12" fill="#3b82f6" />
      </g>
      <g transform="translate(196 120)">
        <circle cx="40" cy="52" r="32" fill="#ffffff" stroke="#3b82f6" strokeWidth="8" />
        <circle cx="40" cy="52" r="12" fill="#3b82f6" />
      </g>
      <path
        d="M112 156c10-28 32-44 62-44 30 0 56 16 68 44h-23c-8-16-24-26-45-26-21 0-36 10-44 26h-18z"
        fill="#ed1c24"
        opacity="0.9"
      />
      <path
        d="M174 78c6-10 18-16 30-16 20 0 36 16 36 36 0 15-9 28-22 33h-32l-22-34c-6-9-2-21 8-27z"
        fill="#ffffff"
        stroke="#ed1c24"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M150 90c-12-12-46-12-52 12"
        stroke="#c4161a"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M252 154c6-16 14-28 26-32"
        stroke="#3b82f6"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M88 210c12-10 32-10 44 0s32 10 44 0 32-10 44 0"
        stroke="#d2e6ff"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default VehicleIllustration;
