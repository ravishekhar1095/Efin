import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './LoanAgainstPropertyPage.css';

function LoanAgainstPropertyPage() {
    const carouselImages = [
        '/property-assets/lap-real-1.png',
        '/property-assets/lap-real-2.png',
        '/property-assets/lap-real-3.png',
        '/property-assets/lap-real-4.png'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [carouselImages.length]);

    return (

        <div className="page property-loan-page">
            {/* Hero Section with Illustration */}
            <section className="property-hero-modern">
                <div className="property-hero-grid">
                    <div className="property-hero-content">
                        <span className="property-badge">🏡 Unlock Your Property Value</span>
                        <h1>
                            Loan Against <span className="gradient-text">Property</span>
                        </h1>
                        <p className="property-hero-description">
                            Get high-value loans by leveraging your residential or commercial property.
                            Competitive interest rates starting from 8.50% p.a. with loan amounts up to ₹10 Crores.
                        </p>

                        {/* Key Highlights */}
                        <div className="property-highlights-grid">
                            <div className="highlight-chip-modern">
                                <div className="chip-icon-modern">💰</div>
                                <div className="chip-content">
                                    <strong>Up to ₹10 Cr</strong>
                                    <span>Loan Amount</span>
                                </div>
                            </div>
                            <div className="highlight-chip-modern">
                                <div className="chip-icon-modern">📊</div>
                                <div className="chip-content">
                                    <strong>8.50% p.a.</strong>
                                    <span>Interest Rate*</span>
                                </div>
                            </div>
                            <div className="highlight-chip-modern">
                                <div className="chip-icon-modern">⏱️</div>
                                <div className="chip-content">
                                    <strong>Up to 20 Years</strong>
                                    <span>Repayment Tenure</span>
                                </div>
                            </div>
                        </div>

                        <div className="property-hero-cta">
                            <Link to="/support/apply" className="primary-btn large">
                                Apply for LAP →
                            </Link>
                            <Link to="/resources/eligibility-calculator" className="ghost-btn large">
                                Calculate EMI
                            </Link>
                        </div>

                        <div className="property-trust-badges">
                            <span>🏛️ RBI Registered NBFC</span>
                            <span>🔒 100% Secure Process</span>
                            <span>⚡ Quick Disbursal</span>
                        </div>
                    </div>

                    <div className="property-hero-visual">
                        <div className="simple-carousel">
                            <div className="carousel-track">
                                {carouselImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Property ${index + 1}`}
                                        className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                                    />
                                ))}
                            </div>
                            <div className="carousel-indicators">
                                {carouselImages.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentIndex(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="property-features-section">
                <div className="section-heading">
                    <span className="eyebrow">Why Choose LAP</span>
                    <h2>Key Features & Benefits</h2>
                    <p>Unlock the potential of your property with our competitive loan offerings</p>
                </div>

                <div className="features-bento-grid">
                    <div className="feature-bento large-card">
                        <div className="feature-icon-large">💸</div>
                        <h3>Higher Loan Amounts</h3>
                        <p>Get loans up to ₹10 Crores based on your property value - perfect for large business needs or major life goals.</p>
                        <ul className="feature-list">
                            <li>✓ Up to 65% of property value</li>
                            <li>✓ Both residential & commercial</li>
                            <li>✓ Flexible loan structuring</li>
                        </ul>
                    </div>

                    <div className="feature-bento">
                        <div className="feature-icon">⚡</div>
                        <h3>Quick Approval</h3>
                        <p>Digital process ensures fast approval within 24-48 hours</p>
                    </div>

                    <div className="feature-bento">
                        <div className="feature-icon">📉</div>
                        <h3>Lower Interest Rates</h3>
                        <p>Starting from 8.50% p.a. - among the most competitive in the market</p>
                    </div>

                    <div className="feature-bento">
                        <div className="feature-icon">📅</div>
                        <h3>Longer Tenure</h3>
                        <p>Repayment period up to 20 years for comfortable EMIs</p>
                    </div>

                    <div className="feature-bento">
                        <div className="feature-icon">🎯</div>
                        <h3>Multiple Uses</h3>
                        <p>Business expansion, education, medical, debt consolidation & more</p>
                    </div>

                    <div className="feature-bento accent-card">
                        <div className="feature-icon">🏆</div>
                        <h3>Tax Benefits</h3>
                        <p>Enjoy tax deductions on interest paid under Section 37(1) for business purposes</p>
                    </div>
                </div>
            </section>

            {/* Property Types Section */}
            <section className="property-types-section">
                <div className="section-heading">
                    <span className="eyebrow">Accepted Properties</span>
                    <h2>Types of Properties We Accept</h2>
                    <p>We accept a wide range of property types as collateral</p>
                </div>

                <div className="property-types-grid">
                    <div className="property-type-card">
                        <div className="property-type-icon">🏠</div>
                        <h3>Residential Property</h3>
                        <ul>
                            <li>Independent Houses</li>
                            <li>Apartments/Flats</li>
                            <li>Villas & Bungalows</li>
                            <li>Residential Plots</li>
                        </ul>
                    </div>

                    <div className="property-type-card">
                        <div className="property-type-icon">🏢</div>
                        <h3>Commercial Property</h3>
                        <ul>
                            <li>Office Spaces</li>
                            <li>Retail Shops</li>
                            <li>Warehouses</li>
                            <li>Commercial Complexes</li>
                        </ul>
                    </div>

                    <div className="property-type-card">
                        <div className="property-type-icon">🏭</div>
                        <h3>Industrial Property</h3>
                        <ul>
                            <li>Manufacturing Units</li>
                            <li>Industrial Land</li>
                            <li>Factory Buildings</li>
                            <li>Storage Facilities</li>
                        </ul>
                    </div>

                    <div className="property-type-card">
                        <div className="property-type-icon">🌳</div>
                        <h3>Land/Plots</h3>
                        <ul>
                            <li>Approved Residential Plots</li>
                            <li>Commercial Land</li>
                            <li>Agricultural Land (Select Cases)</li>
                            <li>Mixed-Use Land</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="property-eligibility-modern">
                <div className="section-heading">
                    <span className="eyebrow">Who Can Apply</span>
                    <h2>Eligibility Criteria</h2>
                    <p>Simple requirements to get you started</p>
                </div>

                <div className="eligibility-cards-grid">
                    <div className="eligibility-card-modern">
                        <div className="eligibility-icon-modern">👤</div>
                        <h4>Applicant Type</h4>
                        <p>Salaried, Self-Employed Individuals, Partnership Firms, Companies, LLPs</p>
                    </div>

                    <div className="eligibility-card-modern">
                        <div className="eligibility-icon-modern">🎂</div>
                        <h4>Age Criteria</h4>
                        <p>21 to 65 years at loan maturity</p>
                    </div>

                    <div className="eligibility-card-modern">
                        <div className="eligibility-icon-modern">💼</div>
                        <h4>Work Experience</h4>
                        <p>Minimum 2 years for salaried, 3 years for self-employed</p>
                    </div>

                    <div className="eligibility-card-modern">
                        <div className="eligibility-icon-modern">💰</div>
                        <h4>Income</h4>
                        <p>Minimum ₹25,000/month net income</p>
                    </div>

                    <div className="eligibility-card-modern">
                        <div className="eligibility-icon-modern">📊</div>
                        <h4>Credit Score</h4>
                        <p>CIBIL score of 650 or above</p>
                    </div>

                    <div className="eligibility-card-modern">
                        <div className="eligibility-icon-modern">🏡</div>
                        <h4>Property Ownership</h4>
                        <p>Clear title with proper documentation</p>
                    </div>
                </div>
            </section>

            {/* Documents Required Section */}
            <section className="property-documents-section">
                <div className="section-heading">
                    <span className="eyebrow">Required Documents</span>
                    <h2>Documents Checklist</h2>
                    <p>Keep these documents ready for a smooth application process</p>
                </div>

                <div className="documents-container">
                    <div className="document-category">
                        <div className="category-header">
                            <div className="category-icon">📋</div>
                            <h3>Identity & Address Proof</h3>
                        </div>
                        <div className="document-list">
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>PAN Card</strong>
                                    <p>Mandatory for all applicants</p>
                                </div>
                            </div>
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>Aadhaar Card</strong>
                                    <p>For identity verification</p>
                                </div>
                            </div>
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>Passport/Driving License</strong>
                                    <p>Additional ID proof</p>
                                </div>
                            </div>
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>Utility Bills</strong>
                                    <p>Latest 2 months for address proof</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="document-category">
                        <div className="category-header">
                            <div className="category-icon">💼</div>
                            <h3>Income Proof</h3>
                        </div>
                        <div className="document-list">
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>Salary Slips</strong>
                                    <p>Last 3 months for salaried</p>
                                </div>
                            </div>
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>Bank Statements</strong>
                                    <p>Last 6 months</p>
                                </div>
                            </div>
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>ITR Documents</strong>
                                    <p>Last 2-3 years with computation</p>
                                </div>
                            </div>
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>Business Financials</strong>
                                    <p>For self-employed/companies</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="document-category highlight-category">
                        <div className="category-header">
                            <div className="category-icon">🏠</div>
                            <h3>Property Documents</h3>
                        </div>
                        <div className="document-list">
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>Title Deed/Sale Deed</strong>
                                    <p>Original property ownership documents</p>
                                </div>
                            </div>
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>Property Tax Receipts</strong>
                                    <p>Latest paid receipts</p>
                                </div>
                            </div>
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>Encumbrance Certificate</strong>
                                    <p>For last 13-15 years</p>
                                </div>
                            </div>
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>Property Valuation Report</strong>
                                    <p>Approved valuer's report</p>
                                </div>
                            </div>
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>Approved Building Plan</strong>
                                    <p>Municipality/Panchayat approval</p>
                                </div>
                            </div>
                            <div className="document-item">
                                <span className="doc-check">✓</span>
                                <div>
                                    <strong>NOC from Society</strong>
                                    <p>If applicable for apartments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fees and Charges Section */}
            <section className="property-fees-section">
                <div className="section-heading">
                    <span className="eyebrow">Transparent Pricing</span>
                    <h2>Fees & Charges</h2>
                    <p>No hidden charges - complete transparency in all our dealings</p>
                </div>

                <div className="fees-table-modern">
                    <div className="fees-row fees-header">
                        <div className="fees-label">Particulars</div>
                        <div className="fees-value">Charges</div>
                    </div>

                    <div className="fees-row">
                        <div className="fees-label">
                            <span className="fees-icon">📊</span>
                            <div>
                                <strong>Interest Rate</strong>
                                <p>Based on profile & property</p>
                            </div>
                        </div>
                        <div className="fees-value">
                            <strong>8.50% - 16% p.a.</strong>
                        </div>
                    </div>

                    <div className="fees-row">
                        <div className="fees-label">
                            <span className="fees-icon">⚙️</span>
                            <div>
                                <strong>Processing Fee</strong>
                                <p>One-time fee</p>
                            </div>
                        </div>
                        <div className="fees-value">
                            <strong>Up to 2% + GST</strong>
                            <span>Of loan amount</span>
                        </div>
                    </div>

                    <div className="fees-row">
                        <div className="fees-label">
                            <span className="fees-icon">📄</span>
                            <div>
                                <strong>Legal & Technical Charges</strong>
                                <p>For property evaluation</p>
                            </div>
                        </div>
                        <div className="fees-value">
                            <strong>₹5,000 - ₹25,000</strong>
                            <span>Based on property value</span>
                        </div>
                    </div>

                    <div className="fees-row">
                        <div className="fees-label">
                            <span className="fees-icon">🔄</span>
                            <div>
                                <strong>Prepayment Charges</strong>
                                <p>For early closure</p>
                            </div>
                        </div>
                        <div className="fees-value">
                            <strong>2% - 4% + GST</strong>
                            <span>On outstanding principal</span>
                        </div>
                    </div>

                    <div className="fees-row">
                        <div className="fees-label">
                            <span className="fees-icon">⚠️</span>
                            <div>
                                <strong>Late Payment Charges</strong>
                                <p>Per day penalty</p>
                            </div>
                        </div>
                        <div className="fees-value">
                            <strong>₹500 - ₹2,000</strong>
                            <span>Per installment</span>
                        </div>
                    </div>

                    <div className="fees-row">
                        <div className="fees-label">
                            <span className="fees-icon">🏛️</span>
                            <div>
                                <strong>Stamp Duty & Registration</strong>
                                <p>As per state regulations</p>
                            </div>
                        </div>
                        <div className="fees-value">
                            <strong>As Applicable</strong>
                            <span>State-wise variation</span>
                        </div>
                    </div>

                    <div className="fees-row">
                        <div className="fees-label">
                            <span className="fees-icon">💳</span>
                            <div>
                                <strong>Cheque Bounce Charges</strong>
                                <p>Per bounced instrument</p>
                            </div>
                        </div>
                        <div className="fees-value">
                            <strong>₹500 + GST</strong>
                        </div>
                    </div>
                </div>

                <p className="fees-note">
                    * All charges are indicative and subject to change. Final rates will be communicated at the time of sanction.
                    Terms and conditions apply.
                </p>
            </section>

            {/* CTA Section */}
            <section className="property-cta-section">
                <div className="property-cta-card">
                    <div className="cta-icon-large">🏡</div>
                    <h2>Ready to Unlock Your Property's Value?</h2>
                    <p>Get instant approval and competitive interest rates. Apply now or talk to our expert advisors.</p>
                    <div className="property-cta-buttons">
                        <Link to="/support/apply" className="primary-btn large">
                            Apply Now →
                        </Link>
                        <Link to="/support" className="ghost-btn large">
                            Talk to Expert
                        </Link>
                    </div>
                    <div className="cta-assurance">
                        <span>✓ 100% Paperless Process</span>
                        <span>✓ Quick Disbursal in 48 Hours</span>
                        <span>✓ Doorstep Service Available</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoanAgainstPropertyPage;
