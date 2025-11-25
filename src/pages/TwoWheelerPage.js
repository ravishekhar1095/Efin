import { Link } from 'react-router-dom';
import VehicleIllustration from '../components/illustrations/VehicleIllustration';
import LoanCalculator from '../components/LoanCalculator';
import ImageCarousel from '../components/ImageCarousel';
import BrandCarousel from '../components/BrandCarousel';

const rideStories = [
  {
    badge: 'Urban commute',
    title: 'Upgrade to an electric scooter effortlessly',
    description:
      'Finance up to 95% of the on-road price with bundled chargers, zero paperwork, and 24-hour delivery.',
    list: ['Insurance + accessories financed', 'EMI from ₹2,499/month'],
    background: 'linear-gradient(135deg, #43cea2, #185a9d)',
    imageLabel: 'EV',
  },
  {
    badge: 'Adventure tourer',
    title: 'Own the weekend bike you’ve always wanted',
    description:
      'Flexible down payments and custom EMIs for Royal Enfield and KTM models with ride gear add-ons.',
    list: ['Top-up loan for accessories', 'Roadside assistance coverage'],
    background: 'linear-gradient(135deg, #fc4a1a, #f7b733)',
    imageLabel: 'Ride',
  },
  {
    badge: 'Gig economy',
    title: 'Empower delivery partners with quick approvals',
    description:
      'Same-day approvals for commercial riders, with insurance and income protection bundled-in.',
    list: ['Digital KYC and e-sign', 'Income linked EMI holidays'],
    background: 'linear-gradient(135deg, #36d1dc, #5b86e5)',
    imageLabel: 'Pro',
  },
];

const DEALER_BRANDS = [
  { name: 'Hero MotoCorp', initials: 'HM', colors: ['#d40000', '#111111'] },
  { name: 'TVS', initials: 'TV', colors: ['#00205b', '#c8102e'] },
  { name: 'Honda', initials: 'HD', colors: ['#da001a', '#83000b'] },
  { name: 'Royal Enfield', initials: 'RE', colors: ['#b28f2e', '#35292f'] },
  { name: 'KTM', initials: 'KT', colors: ['#ff6600', '#000000'] },
  { name: 'Ather', initials: 'AT', colors: ['#00c853', '#1d976c'] },
];

function TwoWheelerPage() {
  return (
    <div className="page detail-page">
      <header className="page-hero with-illustration">
        <div className="page-hero-body">
          <span className="badge">Two Wheeler Finance</span>
          <h1>Fast-track your ride with E-Fin</h1>
          <p>
            Choose from 100+ dealer partners and ride home your new scooter or bike within 48 hours.
            E-Fin covers insurance, accessories, and registration in one convenient plan.
          </p>
        </div>
        <VehicleIllustration className="page-hero-illustration" />
      </header>

      <section className="section slim">
        <ImageCarousel slides={rideStories} interval={5200} />
      </section>

      <section className="section split">
        <div>
          <h2>What&apos;s included</h2>
          <ul className="feature-list">
            <li>Funding up to 95% of on-road price with flexible down payments.</li>
            <li>Insurance concierge to bundle first-year policy at negotiated rates.</li>
            <li>Free RC and RTO assistance for a smooth delivery experience.</li>
            <li>Optional maintenance add-ons and extended warranty coverage.</li>
          </ul>
        </div>
        <div className="two-wheeler-cta">
          <div className="cta-card">
            <strong>Prefer an in-store experience?</strong>
            <p>
              Visit the nearest E-Fin partner branch to get on-road pricing, schedule a test ride, and
              complete documentation in one sitting.
            </p>
            <Link className="primary-btn" to="/support#branch">
              Locate a branch
            </Link>
          </div>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Plan your two-wheeler EMI</h2>
          <p>
            Customise loan amount, tenure, and rate to discover the EMI that fits your monthly budget. Our advisors can
            tailor offers further based on your city and vehicle model.
          </p>
          <ul className="feature-list">
            <li>Exclusive schemes for students, salaried, and gig economy riders.</li>
            <li>Top-up loan availability for accessories, riding gear, or service packages.</li>
            <li>Freedom to choose EMI date aligned to salary cycle.</li>
          </ul>
        </div>
        <LoanCalculator defaultAmount={85000} defaultTenure={30} defaultRate={11.5} />
      </section>

      <section className="section">
        <h2>Dealers we work with</h2>
        <div className="partner-grid">
          <div>
            <strong>Premium</strong>
            <span>KTM</span>
            <span>Royal Enfield</span>
            <span>Honda BigWing</span>
          </div>
          <div>
            <strong>Scooters</strong>
            <span>Honda</span>
            <span>TVS</span>
            <span>Ola Electric</span>
          </div>
          <div>
            <strong>Bikes</strong>
            <span>Yamaha</span>
            <span>Hero</span>
            <span>Bajaj</span>
          </div>
          <div>
            <strong>Electric</strong>
            <span>Ather</span>
            <span>Ultraviolette</span>
            <span>Revolt</span>
          </div>
        </div>
      </section>

      <section className="section partner-strip">
        <h2>Dealer partners across India</h2>
        <BrandCarousel brands={DEALER_BRANDS} />
      </section>

      <section className="section steps alt">
        <h2>Your ride in 4 streamlined steps</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="step-number">1</span>
            <h3>Select your vehicle</h3>
            <p>Choose a model and quote from any partner showroom or through our digital catalogue.</p>
          </div>
          <div className="timeline-item">
            <span className="step-number">2</span>
            <h3>Upload documents</h3>
            <p>Complete KYC, income proof, and address verification digitally or at the dealership.</p>
          </div>
          <div className="timeline-item">
            <span className="step-number">3</span>
            <h3>Sign &amp; insure</h3>
            <p>Confirm offer, select insurance, and sign digitally. We handle RTO appointments.</p>
          </div>
          <div className="timeline-item">
            <span className="step-number">4</span>
            <h3>Ride out</h3>
            <p>Track delivery in the E-Fin app and schedule your first service reminders.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TwoWheelerPage;
