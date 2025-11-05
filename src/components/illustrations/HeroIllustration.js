function HeroIllustration(props) {
  return (
    <svg
      viewBox="0 0 420 360"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="heroIllustrationTitle"
      {...props}
    >
      <title id="heroIllustrationTitle">Specialist helping customer with mobile loan</title>
      <defs>
        <linearGradient id="heroGradient" x1="0%" x2="90%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fef3f2" />
          <stop offset="100%" stopColor="#fde0e2" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ed1c24" />
          <stop offset="100%" stopColor="#c4161a" />
        </linearGradient>
      </defs>
      <rect x="20" y="24" width="380" height="260" rx="28" fill="url(#heroGradient)" />
      <rect x="52" y="54" width="180" height="120" rx="16" fill="#ffffff" />
      <rect x="70" y="78" width="144" height="16" rx="8" fill="#f4b1b5" />
      <rect x="70" y="110" width="110" height="10" rx="5" fill="#fbcfd2" />
      <rect x="70" y="130" width="90" height="10" rx="5" fill="#fde6e7" />
      <circle cx="140" cy="190" r="58" fill="#ffffff" />
      <path
        d="M140 140c30 0 54 24 54 54s-24 54-54 54-54-24-54-54 24-54 54-54zm0 20c-19 0-34 15-34 34s15 34 34 34 34-15 34-34-15-34-34-34z"
        fill="#f27d82"
      />
      <rect x="238" y="82" width="108" height="180" rx="22" fill="#ffffff" stroke="#f4b1b5" />
      <rect x="252" y="100" width="80" height="12" rx="6" fill="#f27d82" />
      <rect x="252" y="126" width="60" height="10" rx="5" fill="#fde6e7" />
      <rect x="252" y="144" width="72" height="10" rx="5" fill="#fde6e7" />
      <rect x="252" y="162" width="68" height="10" rx="5" fill="#fde6e7" />
      <rect x="252" y="196" width="80" height="38" rx="12" fill="#fef3f2" />
      <path
        d="M258 272v24l18-6 18 10 18-10 18 6v-24z"
        fill="url(#accentGradient)"
        opacity="0.85"
      />
      <rect x="70" y="248" width="160" height="16" rx="8" fill="#fde0e2" />
      <rect x="70" y="270" width="120" height="12" rx="6" fill="#fde0e2" />
      <circle cx="340" cy="260" r="46" fill="#fef3f2" />
      <path
        d="M340 220c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32zm-10 26a6 6 0 109.5 7.3l4.5 4.5a6 6 0 108.5-8.5l-4.6-4.4a6 6 0 00-7.4-9.7 18 18 0 00-10.5 10.8z"
        fill="#f27d82"
      />
    </svg>
  );
}

export default HeroIllustration;
