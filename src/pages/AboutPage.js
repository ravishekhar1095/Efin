import { Link } from 'react-router-dom';

const STATS = [
    { value: '30+', label: 'Years of Trust' },
    { value: '2.4M+', label: 'Lives Empowered' },
    { value: '₹33,000 Cr+', label: 'Loans Disbursed' },
    { value: '220+', label: 'Cities Served' },
];

const VALUES = [
    {
        icon: '🎯',
        title: 'Customer First',
        description: 'Every decision starts with one question: Is this good for our customers?',
    },
    {
        icon: '🔒',
        title: 'Trust & Transparency',
        description: 'No hidden charges. No complicated terms. Just honest lending.',
    },
    {
        icon: '⚡',
        title: 'Speed with Security',
        description: 'Lightning-fast approvals backed by bank-grade security and RBI compliance.',
    },
    {
        icon: '🤝',
        title: 'Financial Inclusion',
        description: 'Making credit accessible to young professionals and small entrepreneurs.',
    },
];

const JOURNEY = [
    {
        year: '1995',
        title: 'The Beginning',
        description: 'MLB Securities Pvt. Ltd. incorporated with a vision to democratize financial services in India.',
    },
    {
        year: '2015-2020',
        title: 'Digital Transformation',
        description: 'Built robust digital infrastructure, integrated with credit bureaus, and prepared for retail lending.',
    },
    {
        year: '2025',
        title: 'E-Fin Launched',
        description: 'Launched E-Fin brand to provide instant personal loans and credit solutions to millions of Indians.',
    },
    {
        year: 'Today',
        title: 'Empowering India',
        description: 'Serving 2.4M+ customers across 220+ cities with transparent, instant, and secure lending solutions.',
    },
];

const TEAM = [
    {
        initial: 'N',
        name: 'Nupur Malhotra',
        role: 'CEO & Director',
        focus: 'Strategic Growth & Governance',
    },
    {
        initial: 'A',
        name: 'Anish Sharma',
        role: 'Chief Risk Officer',
        focus: 'Risk Management & Compliance',
    },
    {
        initial: 'R',
        name: 'Ria Deshpande',
        role: 'Head of Partnerships',
        focus: 'Strategic Alliances & Growth',
    },
];

const OFFICES = [
    {
        type: 'Registered Office',
        address: '302, Pratap Chambers, Karol Bagh',
        city: 'New Delhi - 110005',
    },
    {
        type: 'Corporate Office',
        address: 'C-74, Sector 63',
        city: 'Noida - 201301',
    },
];

function AboutPage() {
    return (
        <div className="page about-page">
            {/* Hero Section */}
            <section className="about-hero-modern">
                <div className="about-hero-content">
                    <span className="hero-badge">🏆 RBI Registered NBFC</span>
                    <h1>
                        Making Financial Dreams <span className="gradient-text">Accessible to Everyone</span>
                    </h1>
                    <p className="hero-subtitle">
                        E-Fin is the brand name of <strong>MLB Securities Private Limited</strong>, an RBI-registered
                        NBFC (COR 14.00526) with 30 years of trust and excellence in financial services. We're on a
                        mission to empower India's young professionals and entrepreneurs with transparent, instant,
                        and secure credit solutions.
                    </p>
                    <div className="hero-cta-group">
                        <Link to="/support/apply" className="primary-btn large">
                            Apply for Loan →
                        </Link>
                        <Link to="/support/contact" className="ghost-btn large">
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="about-hero-stats">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="stat-card">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Values */}
            <section className="section-block values-section">
                <header className="section-heading">
                    <span className="eyebrow">Our Values</span>
                    <h2>What We Stand For</h2>
                    <p>The principles that guide everything we do at E-Fin</p>
                </header>
                <div className="values-grid">
                    {VALUES.map((value) => (
                        <div key={value.title} className="value-card">
                            <div className="value-icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Journey */}
            <section className="section-block journey-section">
                <header className="section-heading">
                    <span className="eyebrow">Our Journey</span>
                    <h2>Three Decades of Excellence</h2>
                    <p>From a boutique financial services firm to India's trusted digital lending platform</p>
                </header>
                <div className="journey-timeline">
                    {JOURNEY.map((milestone, index) => (
                        <div key={milestone.year} className="timeline-item">
                            <div className="timeline-marker">
                                <div className="timeline-dot" />
                                {index < JOURNEY.length - 1 && <div className="timeline-line" />}
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-year">{milestone.year}</div>
                                <h3>{milestone.title}</h3>
                                <p>{milestone.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-block mission-vision-section">
                <div className="mission-vision-grid">
                    <div className="mission-card modern">
                        <span className="card-badge">Our Mission</span>
                        <h2>Democratizing Access to Credit</h2>
                        <p>
                            We believe everyone deserves access to transparent, affordable, and instant credit. Our mission is to
                            empower India's young professionals, entrepreneurs, and small businesses with financial solutions that
                            help them achieve their dreams without the burden of hidden charges or complicated processes.
                        </p>
                    </div>
                    <div className="vision-card modern">
                        <span className="card-badge">Our Vision</span>
                        <h2>Building Financial Confidence</h2>
                        <p>
                            To become India's most trusted financial partner by delivering world-class lending experiences that
                            combine technology, transparency, and human touch. We envision a future where every Indian has the
                            financial confidence to pursue their aspirations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="section-block leadership-section">
                <header className="section-heading">
                    <span className="eyebrow">Leadership Team</span>
                    <h2>Meet the People Behind E-Fin</h2>
                    <p>Experienced leaders committed to responsible lending and customer success</p>
                </header>
                <div className="team-grid">
                    {TEAM.map((member) => (
                        <div key={member.name} className="team-card">
                            <div className="team-avatar">
                                <span>{member.initial}</span>
                            </div>
                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <p className="team-focus">{member.focus}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Legal & Compliance */}
            <section className="section-block legal-section">
                <header className="section-heading">
                    <span className="eyebrow">Legal & Compliance</span>
                    <h2>Regulated, Certified, and Trusted</h2>
                </header>
                <div className="legal-grid">
                    <div className="legal-card">
                        <h3>Company Details</h3>
                        <div className="legal-info">
                            <div className="info-row">
                                <span className="info-label">Legal Name</span>
                                <span className="info-value">MLB Securities Private Limited</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">CIN</span>
                                <span className="info-value">U74899DL1995PTC067535</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">RBI COR</span>
                                <span className="info-value">14.00526</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Incorporated</span>
                                <span className="info-value">1995</span>
                            </div>
                        </div>
                    </div>
                    <div className="legal-card">
                        <h3>Certifications</h3>
                        <ul className="certification-list">
                            <li>✓ RBI Registered NBFC</li>
                            <li>✓ ISO 27001 Certified Infrastructure</li>
                            <li>✓ RBI Fair Practices Code Compliant</li>
                            <li>✓ Regular VAPT Assessments</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <section className="section-block office-section">
                <header className="section-heading">
                    <span className="eyebrow">Our Offices</span>
                    <h2>Find Us Here</h2>
                </header>
                <div className="office-grid">
                    {OFFICES.map((office) => (
                        <div key={office.type} className="office-card modern">
                            <div className="office-icon">📍</div>
                            <h3>{office.type}</h3>
                            <p className="office-address">{office.address}</p>
                            <p className="office-city">{office.city}</p>
                        </div>
                    ))}
                </div>
                <div className="contact-info-section">
                    <div className="contact-item">
                        <span className="contact-icon">📞</span>
                        <div>
                            <span className="contact-label">Phone</span>
                            <a href="tel:+919997842548" className="contact-value">+91-9997842548</a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">✉️</span>
                        <div>
                            <span className="contact-label">Email</span>
                            <a href="mailto:care@e-fin.in" className="contact-value">care@e-fin.in</a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">💬</span>
                        <div>
                            <span className="contact-label">WhatsApp</span>
                            <a href="https://wa.me/918433997290" className="contact-value">+91-84339 97290</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section about-cta">
                <div className="cta-content">
                    <h2>Ready to Experience Transparent Lending?</h2>
                    <p>Join 2.4 million+ Indians who trust E-Fin for their financial needs</p>
                    <div className="cta-buttons">
                        <Link className="primary-btn large" to="/support/apply">
                            Apply for Loan →
                        </Link>
                        <Link className="ghost-btn large" to="/about/careers">
                            Explore Careers
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
