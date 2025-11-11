import instantCashIcon from '../assets/product-icons/instant-cash-loan.png';
import personalLoanIcon from '../assets/product-icons/personal-loan.png';
import loanAgainstIcon from '../assets/product-icons/loan-against-mf.png';
import emiStoreIcon from '../assets/product-icons/emi-store.png';
import creditScoreIcon from '../assets/offerings/credit-score.png';
import financialWellnessIcon from '../assets/offerings/financial-wellness.png';
import eligibilityIcon from '../assets/offerings/eligibility.png';
import creditCardIcon from '../assets/offerings/credit-card.png';

const sharedCtas = {
  apply: { label: 'Apply now', to: '/support/apply' },
  eligibility: { label: 'Check eligibility', to: '/support' },
  download: { label: 'Download the app', to: '/support/apply' },
};

const LANDING_PAGES = {
  'loans/instant-cash-loan': {
    title: 'Instant Cash Loan',
    category: 'Loans',
    excerpt: 'Get quick cash loans of up to ₹5 lacs in 2 minutes',
    description:
      'Apply 24x7, finish digital KYC, and have cash transferred directly to your bank account without paperwork.',
    bullets: ['₹8K – ₹5L ticket size', 'Tenure options from 3 to 36 months', 'Zero pre-closure charges'],
    stats: [
      { label: 'Processing time', value: '< 2 mins' },
      { label: 'Approval rate', value: '87%' },
      { label: 'Avg APR', value: '18% p.a.' },
    ],
    image: instantCashIcon,
    ctaPrimary: sharedCtas.apply,
    ctaSecondary: sharedCtas.eligibility,
  },
  'loans/personal-loan': {
    title: 'Personal Loan',
    category: 'Loans',
    excerpt: 'Avail of a personal loan at 0 preclosure charges',
    description:
      'Finance big dreams or urgent needs with a flexible loan that keeps EMIs light and approvals instant.',
    bullets: ['Upto ₹5 lakhs limit', 'Fully digital journey', 'Custom EMI plans'],
    stats: [
      { label: 'Repayment tenure', value: '6 – 48 months' },
      { label: 'Approval speed', value: 'Instant' },
      { label: 'Support', value: 'Multilingual' },
    ],
    image: personalLoanIcon,
    ctaPrimary: sharedCtas.apply,
    ctaSecondary: sharedCtas.download,
  },
  'offerings/loan-against-mutual-funds': {
    title: 'Loan Against Mutual Funds',
    category: 'Our Offerings',
    excerpt: 'Borrow using mutual fund holdings in minutes',
    description:
      'Pledge units digitally, unlock cash without redeeming investments, and continue earning market returns.',
    bullets: ['Works with leading AMCs', 'Only pay on the amount used', 'Low utilisation charges'],
    stats: [
      { label: 'Loan-to-value', value: 'Up to 60%' },
      { label: 'Setup time', value: '< 10 mins' },
      { label: 'Documentation', value: 'Paperless' },
    ],
    image: loanAgainstIcon,
    ctaPrimary: sharedCtas.apply,
    ctaSecondary: sharedCtas.eligibility,
  },
  'offerings/fixed-deposit': {
    title: 'Fixed Deposit',
    category: 'Our Offerings',
    excerpt: 'Build wealth safely with assured returns',
    description:
      'Lock into attractive FD rates with flexible tenures, auto-renewals, and doorstep service for documentation.',
    bullets: ['Tenures from 12 to 60 months', 'Monthly or quarterly payout options', 'Rated AAA by leading agencies'],
    stats: [
      { label: 'Max return', value: 'Up to 8.5% p.a.' },
      { label: 'Deposit start', value: '₹5,000' },
      { label: 'Premature withdrawal', value: 'Available' },
    ],
    image: financialWellnessIcon,
    ctaPrimary: sharedCtas.apply,
    ctaSecondary: sharedCtas.download,
  },
  'offerings/salary-advance': {
    title: 'Salary Advance',
    category: 'Our Offerings',
    excerpt: 'Easy financing for every employee credit need',
    description:
      'Offer your workforce instant liquidity with payroll-linked advances, seamless disbursals, and HR dashboards.',
    bullets: ['Integrated with payroll', 'No-cost onboarding', 'Dedicated account managers'],
    stats: [
      { label: 'Go-live timeline', value: '2 weeks' },
      { label: 'Employee NPS', value: '74' },
      { label: 'Integration', value: 'Plug-and-play API' },
    ],
    image: creditScoreIcon,
    ctaPrimary: sharedCtas.eligibility,
    ctaSecondary: sharedCtas.apply,
  },
  'offerings/fibe-axis-bank-credit-card': {
    title: 'E-Fin Axis Bank Credit Card',
    category: 'Our Offerings',
    excerpt: 'Go numberless with the co-created credit card',
    description:
      'Tap, swipe, or pay online securely with a futuristic card that hides sensitive details on the surface.',
    bullets: ['Dynamic CVV on the app', 'Turbo rewards on every spend', 'Works globally'],
    stats: [
      { label: 'Joining fee', value: '₹0' },
      { label: 'Cashback', value: 'Up to 3%' },
      { label: 'Security', value: 'Numberless design' },
    ],
    image: creditCardIcon,
    ctaPrimary: sharedCtas.apply,
    ctaSecondary: sharedCtas.download,
  },
  'offerings/bnpl': {
    title: 'E-Fin EMIs - Buy Now Pay Later',
    category: 'Our Offerings',
    excerpt: 'Split big and small upgrades into easy EMIs',
    description:
      'Checkout anywhere with the E-Fin EMI network and enjoy no-cost or low-cost options across 8,000+ partners.',
    bullets: ['Instant approvals at POS', 'Both online & offline partners', 'Flexible tenure slabs'],
    stats: [
      { label: 'Partner stores', value: '8,000+' },
      { label: 'Ticket size', value: '₹1K – ₹3L' },
      { label: 'Processing fee', value: 'As low as 0%' },
    ],
    image: emiStoreIcon,
    ctaPrimary: sharedCtas.apply,
    ctaSecondary: sharedCtas.download,
  },
  'offerings/medical-loan': {
    title: 'Medical Loan',
    category: 'Our Offerings',
    excerpt: 'Access the best of healthcare on instant EMIs',
    description:
      'Cover planned or emergency medical expenses with zero paperwork financing disbursed straight to your account.',
    bullets: ['Hospital tie-ups across India', 'Coverage for treatments & surgeries', 'Same-day sanction'],
    stats: [
      { label: 'Disbursal speed', value: '< 10 mins' },
      { label: 'Tenure', value: '3 – 60 months' },
      { label: 'Support', value: '24/7 helpline' },
    ],
    image: instantCashIcon,
    ctaPrimary: sharedCtas.apply,
    ctaSecondary: sharedCtas.eligibility,
  },
  'offerings/education-loan': {
    title: 'Education Loan',
    category: 'Our Offerings',
    excerpt: 'Upgrade your skills with affordable course financing',
    description:
      'Fund upskilling programs, certifications, or higher studies with tailored EMIs and moratorium options.',
    bullets: ['Partnered with top institutes', 'Flexible repayment starts', 'Covers fees & gadgets'],
    stats: [
      { label: 'Loan limit', value: 'Up to ₹10L' },
      { label: 'Moratorium', value: 'Up to 6 months' },
      { label: 'Processing', value: 'Digital' },
    ],
    image: personalLoanIcon,
    ctaPrimary: sharedCtas.apply,
    ctaSecondary: sharedCtas.download,
  },
  'offerings/solar-loan': {
    title: 'Solar Loan',
    category: 'Our Offerings',
    excerpt: 'Power your place with sustainable solar finance',
    description:
      'Install rooftop or on-ground solar systems with structured EMIs and partnerships across certified EPCs.',
    bullets: ['Immediate ownership', 'Tax benefit friendly', 'Covers hardware & installation'],
    stats: [
      { label: 'Loan tenure', value: 'Up to 7 years' },
      { label: 'Partner EPCs', value: '250+' },
      { label: 'Savings', value: 'Up to 40% on bills' },
    ],
    image: financialWellnessIcon,
    ctaPrimary: sharedCtas.apply,
    ctaSecondary: sharedCtas.eligibility,
  },
  'resources/personal-loan-emi-calculator': {
    title: 'Personal Loan EMI Calculator',
    category: 'Loan Calculators',
    excerpt: 'Get EMI amount, repayment tenure and interest rate beforehand',
    description:
      'Drag the sliders to fine-tune amount, tenure, and interest rate before you submit your personal loan form.',
    bullets: ['Real-time amortisation view', 'Shareable results', 'Built for desktop & mobile'],
    stats: [
      { label: 'Usage', value: 'Free' },
      { label: 'Inputs', value: 'Amount, tenure, rate' },
      { label: 'Export', value: 'PDF & email' },
    ],
    image: eligibilityIcon,
    ctaPrimary: { label: 'Open calculator', to: '/resources/personal-loan-emi-calculator' },
    ctaSecondary: sharedCtas.apply,
    template: 'calculator',
  },
  'resources/instant-loan-emi-calculator': {
    title: 'Instant Loan EMI Calculator',
    category: 'Loan Calculators',
    excerpt: 'Know your EMI amount in seconds to plan finances better',
    description:
      'Model short-term cash loans and see what the repayment looks like before you tap on Apply.',
    bullets: ['Auto-saves your last inputs', 'Shows total interest payable', 'Mobile-ready UI'],
    stats: [
      { label: 'Min amount', value: '₹5K' },
      { label: 'Max tenure', value: '24 months' },
      { label: 'APR range', value: '13 – 30%' },
    ],
    image: eligibilityIcon,
    ctaPrimary: { label: 'Try calculator', to: '/resources/instant-loan-emi-calculator' },
    ctaSecondary: sharedCtas.apply,
    template: 'calculator',
  },
  'resources/eligibility-calculator': {
    title: 'Eligibility Calculator',
    category: 'Loan Calculators',
    excerpt: 'Check your loan eligibility in a few taps',
    description:
      'Enter your income, employment, and obligation details to see the ticket size you qualify for.',
    bullets: ['Under 60 seconds', 'No impact on credit score', 'Downloadable summary'],
    stats: [
      { label: 'Data points', value: '6' },
      { label: 'Accuracy', value: 'Bank-grade' },
      { label: 'Channels', value: 'Web & app' },
    ],
    image: eligibilityIcon,
    ctaPrimary: { label: 'Check now', to: '/resources/eligibility-calculator' },
    ctaSecondary: sharedCtas.apply,
    template: 'calculator',
  },
  'resources/check-credit-score': {
    title: 'Check Credit Score',
    category: 'Loan Calculators',
    excerpt: 'Get your credit score for free before applying for a loan',
    description:
      'Fetch bureau data securely, download detailed reports, and track improvements every month.',
    bullets: ['No impact on score', 'Alerts on changes', 'Personalised tips'],
    stats: [
      { label: 'Supported bureaus', value: '4' },
      { label: 'Refresh rate', value: 'Monthly' },
      { label: 'Charge', value: 'Free forever' },
    ],
    image: creditScoreIcon,
    ctaPrimary: { label: 'Check score', to: '/resources/check-credit-score' },
    ctaSecondary: sharedCtas.download,
    template: 'calculator',
  },
  'learn/blogs': {
    title: 'E-Fin Blogs',
    category: 'Learn',
    excerpt: 'Read about finance, credit health, and smart tips',
    description:
      'Deep dives into personal finance, lifestyle upgrades, and customer stories curated by Team E-Fin.',
    bullets: ['New stories every week', 'Expert-written guides', 'Explainers & checklists'],
    stats: [
      { label: 'Articles', value: '500+' },
      { label: 'Categories', value: '12' },
      { label: 'Average read', value: '4 mins' },
    ],
    image: instantCashIcon,
    ctaPrimary: { label: 'Visit blog', to: '/#blog' },
    ctaSecondary: sharedCtas.download,
  },
  'learn/dictionary': {
    title: 'Financial Dictionary',
    category: 'Learn',
    excerpt: 'Look up formulas, concepts, and money terms',
    description:
      'Browse A-Z definitions, formulas, and ratios so you always know the jargon before you sign.',
    bullets: ['900+ terms', 'Searchable index', 'Examples & use-cases'],
    stats: [
      { label: 'Latest update', value: 'Oct 2025' },
      { label: 'Formats', value: 'Text & video' },
      { label: 'Access', value: 'Free' },
    ],
    image: financialWellnessIcon,
    ctaPrimary: { label: 'Explore terms', to: '/#blog' },
    ctaSecondary: sharedCtas.download,
  },
  'learn/quiz': {
    title: 'Finance Quiz',
    category: 'Learn',
    excerpt: 'Master money the fun way with bite-sized quizzes',
    description:
      'Play themed quizzes, earn badges, and challenge your friends on all things credit and budgeting.',
    bullets: ['Weekly leaderboards', 'Gamified levels', 'Shareable trophies'],
    stats: [
      { label: 'Players', value: '2L+' },
      { label: 'Categories', value: '8' },
      { label: 'Avg session', value: '6 mins' },
    ],
    image: creditScoreIcon,
    ctaPrimary: { label: 'Start quiz', to: '/support' },
    ctaSecondary: sharedCtas.download,
  },
  about: {
    title: 'About E-Fin',
    category: 'Company',
    excerpt: 'Three decades of responsible credit with MLB Securities Pvt. Ltd.',
    description:
      'E-Fin is the brand name of MLB Securities Private Limited, an RBI registered NBFC (COR 14.00526) incorporated in 1995. We began lending in 2025 to empower young professionals and small entrepreneurs.',
    bullets: [
      'CIN: U74899DL1995PTC067535',
      'Registered Office: 302, Pratap Chambers, Karol Bagh, New Delhi-110005',
      'Corporate Office: C-74, Sec 63 Noida 201301',
    ],
    stats: [
      { label: 'Customer focus', value: 'Young professionals & MSMEs' },
      { label: 'Mission', value: 'Driving affordability at scale' },
      { label: 'Support', value: '+91-9997842548 • care@efin.co.in' },
    ],
    image: personalLoanIcon,
    ctaPrimary: { label: 'Discover journey', to: '/why-efin' },
    ctaSecondary: sharedCtas.apply,
  },
  'about/careers': {
    title: 'Careers',
    category: 'Company',
    excerpt: 'Build the future of inclusive credit',
    description:
      'Join multidisciplinary teams across risk, engineering, growth, and service who are united by a single goal: keeping India financially confident with transparent credit.',
    bullets: [
      'Hybrid work hubs in NCR & Bangalore',
      'Learning wallets and mentorship pods',
      'Leadership opportunities for women in credit',
    ],
    stats: [
      { label: 'Open roles', value: '50+' },
      { label: 'Avg. tenure', value: '4.2 years' },
      { label: 'People-first score', value: '4.6/5' },
    ],
    image: financialWellnessIcon,
    ctaPrimary: { label: 'View roles', to: '/about/careers' },
    ctaSecondary: sharedCtas.apply,
  },
  'about/news': {
    title: 'Newsroom',
    category: 'Company',
    excerpt: 'Announcements, partnerships, and thought leadership from E-Fin',
    description:
      'Browse press releases, awards, and ecosystem partnerships that showcase how E-Fin is reshaping responsible lending across India.',
    bullets: ['Media kit downloads', 'Co-lending announcements', 'Regulatory disclosures'],
    stats: [
      { label: 'Stories covered', value: '200+' },
      { label: 'Awards', value: '30+' },
      { label: 'Industry events', value: '50+ per year' },
    ],
    image: creditScoreIcon,
    ctaPrimary: { label: 'Download media kit', to: '/about/news' },
    ctaSecondary: sharedCtas.apply,
  },
  'support/contact': {
    title: 'Contact Us',
    category: 'Support',
    excerpt: 'Reach our support team via phone, email, or chat',
    description:
      'Raise tickets, schedule call-backs, or walk into the nearest kiosk for instant assistance.',
    bullets: ['Toll-free: 020 6763 9797', 'care@fibe.in', 'WhatsApp +91 84339 97290'],
    stats: [
      { label: 'Support languages', value: '6' },
      { label: 'Average resolution', value: '< 24 hrs' },
      { label: 'Branches & kiosks', value: '900+' },
    ],
    image: personalLoanIcon,
    ctaPrimary: { label: 'Raise a ticket', to: '/support' },
    ctaSecondary: sharedCtas.download,
  },
};

export const NAV_STRUCTURE = [
  { label: 'Loans', items: ['loans/instant-cash-loan', 'loans/personal-loan'] },
  {
    label: 'Our Offerings',
    items: [
      'offerings/loan-against-mutual-funds',
      'offerings/fixed-deposit',
      'offerings/salary-advance',
      'offerings/fibe-axis-bank-credit-card',
      'offerings/bnpl',
      'offerings/medical-loan',
      'offerings/education-loan',
      'offerings/solar-loan',
    ],
  },
  {
    label: 'Loan Calculators',
    items: [
      'resources/personal-loan-emi-calculator',
      'resources/instant-loan-emi-calculator',
      'resources/eligibility-calculator',
      'resources/check-credit-score',
    ],
  },
  { label: 'Learn', items: ['learn/blogs', 'learn/dictionary', 'learn/quiz'] },
  { label: 'About Us', items: ['about', 'about/careers', 'about/news', 'support/contact'] },
];

export default LANDING_PAGES;
