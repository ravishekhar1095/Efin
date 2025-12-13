import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './SmallBusinessLoanPage.css';

const BUSINESS_CAROUSEL_IMAGES = [
    { src: '/business-loan-1.png', alt: 'Small Business Retail Shop' },
    { src: '/business-loan-2.png', alt: 'Business Owner Working' },
    { src: '/business-loan-3.png', alt: 'Business Warehouse Operations' },
    { src: '/business-loan-4.png', alt: 'Restaurant Business Owner' }
];

function SmallBusinessLoanPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % BUSINESS_CAROUSEL_IMAGES.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="page business-loan-page-modern">
            {/* Hero Section */}
            <section className="business-hero-modern">
                <div className="business-hero-grid">
                    <div className="business-hero-content">
                        <span className="business-badge">💼 Unsecured Business Loan</span>
                        <h1>
                            Grow Your <span className="gradient-text">Business</span>
                        </h1>
                        <p className="business-hero-description">
                            Elevate your business with an unsecured loan up to ₹5 lakhs. No collateral required,
                            flexible tenure of 3-36 months, and quick approval to fuel your entrepreneurial dreams.
                        </p>

                        {/* Key Highlights */}
                        <div className="business-highlights-grid">
                            <div className="highlight-chip-business">
                                <div className="chip-icon-business">💰</div>
                                <div className="chip-content">
                                    <strong>Up to ₹5 Lakhs</strong>
                                    <span>Loan Amount</span>
                                </div>
                            </div>
                            <div className="highlight-chip-business">
                                <div className="chip-icon-business">📊</div>
                                <div className="chip-content">
                                    <strong>12-30% p.a.</strong>
                                    <span>Interest Rate</span>
                                </div>
                            </div>
                            <div className="highlight-chip-business">
                                <div className="chip-icon-business">📅</div>
                                <div className="chip-content">
                                    <strong>3-36 Months</strong>
                                    <span>Flexible Tenure</span>
                                </div>
                            </div>
                        </div>

                        <div className="business-hero-cta">
                            <Link to="/support/apply" className="primary-btn large">
                                Apply for Business Loan →
                            </Link>
                            <Link to="/resources/eligibility-calculator" className="ghost-btn large">
                                Check Eligibility
                            </Link>
                        </div>

                        <div className="business-trust-badges">
                            <span>🏛️ RBI Registered</span>
                            <span>🔓 No Collateral</span>
                            <span>⚡ Quick Disbursal</span>
                        </div>
                    </div>

                    <div className="business-hero-visual">
                        <div className="business-carousel">
                            {BUSINESS_CAROUSEL_IMAGES.map((image, index) => (
                                <div
                                    key={index}
                                    className={`business-carousel-slide ${index === currentSlide ? 'active' : ''}`}
                                >
                                    <img src={image.src} alt={image.alt} />
                                </div>
                            ))}
                            <div className="business-carousel-dots">
                                {BUSINESS_CAROUSEL_IMAGES.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="business-uses-section">
                <div className="section-heading">
                    <span className="eyebrow">Power Your Business</span>
                    <h2>What Can You Use It For?</h2>
                    <p>Flexible business loans for every stage of your growth journey</p>
                </div>

                <div className="business-uses-grid">
                    <div className="business-use-card">
                        <div className="business-use-icon">💼</div>
                        <h3>Working Capital</h3>
                        <p>Cover day-to-day operational expenses and maintain smooth cash flow</p>
                    </div>

                    <div className="business-use-card">
                        <div className="business-use-icon">📦</div>
                        <h3>Inventory Purchase</h3>
                        <p>Stock up on inventory and raw materials for upcoming demand</p>
                    </div>

                    <div className="business-use-card">
                        <div className="business-use-icon">🛠️</div>
                        <h3>Equipment Purchase</h3>
                        <p>Invest in new machinery, tools, or technology for your business</p>
                    </div>

                    <div className="business-use-card">
                        <div className="business-use-icon">👥</div>
                        <h3>Hire Employees</h3>
                        <p>Expand your team and scale operations with skilled workforce</p>
                    </div>

                    <div className="business-use-card">
                        <div className="business-use-icon">📈</div>
                        <h3>Business Expansion</h3>
                        <p>Open new branches, enter new markets, or launch new products</p>
                    </div>

                    <div className="business-use-card">
                        <div className="business-use-icon">💳</div>
                        <h3>Debt Consolidation</h3>
                        <p>Consolidate multiple business debts into one manageable EMI</p>
                    </div>

                    <div className="business-use-card">
                        <div className="business-use-icon">📢</div>
                        <h3>Marketing & Promotion</h3>
                        <p>Fund advertising campaigns and brand building activities</p>
                    </div>

                    <div className="business-use-card">
                        <div className="business-use-icon">🏪</div>
                        <h3>Renovation & Upgrade</h3>
                        <p>Modernize your shop, office, or business premises</p>
                    </div>
                </div>
            </section>

            {/* Features Section - Bento Grid */}
            <section className="business-features-section">
                <div className="section-heading">
                    <span className="eyebrow">Why Choose Us</span>
                    <h2>Benefits for Your Business</h2>
                    <p>Experience hassle-free business lending with unmatched advantages</p>
                </div>

                <div className="business-features-bento">
                    <div className="feature-bento-business large">
                        <div className="feature-icon-large">🚀</div>
                        <h3>No Collateral Required</h3>
                        <p>Get funds without pledging any assets or property. Completely unsecured business loan designed for small businesses and MSMEs.</p>
                        <ul className="feature-checklist">
                            <li>✓ No security deposit needed</li>
                            <li>✓ No guarantor required</li>
                            <li>✓ Minimal documentation</li>
                        </ul>
                    </div>

                    <div className="feature-bento-business">
                        <div className="feature-icon">⚡</div>
                        <h3>Quick Approval</h3>
                        <p>Get approved in 24-48 hours with our streamlined process</p>
                    </div>

                    <div className="feature-bento-business">
                        <div className="feature-icon">💰</div>
                        <h3>Higher Loan Amount</h3>
                        <p>Access up to ₹5 lakhs to meet substantial business needs</p>
                    </div>

                    <div className="feature-bento-business accent">
                        <div className="feature-icon">📅</div>
                        <h3>Flexible Tenure</h3>
                        <p>Choose repayment period from 3-36 months that suits your cash flow</p>
                    </div>

                    <div className="feature-bento-business">
                        <div className="feature-icon">🎯</div>
                        <h3>Multiple Purposes</h3>
                        <p>Use for working capital, inventory, equipment, or expansion</p>
                    </div>

                    <div className="feature-bento-business">
                        <div className="feature-icon">📱</div>
                        <h3>100% Digital</h3>
                        <p>Apply online from anywhere - complete paperless process</p>
                    </div>
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="business-eligibility-modern">
                <div className="section-heading">
                    <span className="eyebrow">Who Can Apply</span>
                    <h2>Eligibility Criteria</h2>
                    <p>Simple requirements to get your business loan approved</p>
                </div>

                <div className="eligibility-business-grid">
                    <div className="eligibility-business-card">
                        <div className="eligibility-business-icon">🇮🇳</div>
                        <h4>Nationality</h4>
                        <p>Indian Citizen</p>
                    </div>

                    <div className="eligibility-business-card">
                        <div className="eligibility-business-icon">🏢</div>
                        <h4>Business Vintage</h4>
                        <p>At least 3 years of business operation</p>
                    </div>

                    <div className="eligibility-business-card">
                        <div className="eligibility-business-icon">📊</div>
                        <h4>CIBIL Score</h4>
                        <p>680 or higher for better rates</p>
                    </div>

                    <div className="eligibility-business-card">
                        <div className="eligibility-business-icon">💼</div>
                        <h4>Work Status</h4>
                        <p>Self-Employed / Business Owner</p>
                    </div>

                    <div className="eligibility-business-card">
                        <div className="eligibility-business-icon">🎂</div>
                        <h4>Age Criteria</h4>
                        <p>24 to 58 years</p>
                    </div>

                    <div className="eligibility-business-card">
                        <div className="eligibility-business-icon">💰</div>
                        <h4>Annual Turnover</h4>
                        <p>Minimum ₹10 lakhs per annum</p>
                    </div>
                </div>
            </section>

            {/* Documents Required */}
            <section className="business-documents-section">
                <div className="section-heading">
                    <span className="eyebrow">Required Documents</span>
                    <h2>Documents Checklist</h2>
                    <p>Keep these documents ready for quick loan processing</p>
                </div>

                <div className="business-documents-grid">
                    <div className="document-category-business">
                        <div className="doc-category-header-business">
                            <div className="doc-category-icon-business">🆔</div>
                            <h3>KYC Documents</h3>
                        </div>
                        <div className="doc-list-business">
                            <div className="doc-item-business">
                                <span className="doc-bullet-business">✓</span>
                                <div>
                                    <strong>Aadhaar Card</strong>
                                    <p>For identity verification</p>
                                </div>
                            </div>
                            <div className="doc-item-business">
                                <span className="doc-bullet-business">✓</span>
                                <div>
                                    <strong>PAN Card</strong>
                                    <p>Mandatory for all applicants</p>
                                </div>
                            </div>
                            <div className="doc-item-business">
                                <span className="doc-bullet-business">✓</span>
                                <div>
                                    <strong>Passport / Voter ID</strong>
                                    <p>Additional ID proof</p>
                                </div>
                            </div>
                            <div className="doc-item-business">
                                <span className="doc-bullet-business">✓</span>
                                <div>
                                    <strong>NREGA Job Card</strong>
                                    <p>Acceptable ID document</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="document-category-business highlight">
                        <div className="doc-category-header-business">
                            <div className="doc-category-icon-business">🏪</div>
                            <h3>Business Proof</h3>
                        </div>
                        <div className="doc-list-business">
                            <div className="doc-item-business">
                                <span className="doc-bullet-business">✓</span>
                                <div>
                                    <strong>Business Registration</strong>
                                    <p>GST, Shop Act, or Trade License</p>
                                </div>
                            </div>
                            <div className="doc-item-business">
                                <span className="doc-bullet-business">✓</span>
                                <div>
                                    <strong>Ownership Proof</strong>
                                    <p>Partnership deed or proprietorship proof</p>
                                </div>
                            </div>
                            <div className="doc-item-business">
                                <span className="doc-bullet-business">✓</span>
                                <div>
                                    <strong>Business Address</strong>
                                    <p>Utility bills or rent agreement</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="document-category-business">
                        <div className="doc-category-header-business">
                            <div className="doc-category-icon-business">📄</div>
                            <h3>Financial Documents</h3>
                        </div>
                        <div className="doc-list-business">
                            <div className="doc-item-business">
                                <span className="doc-bullet-business">✓</span>
                                <div>
                                    <strong>Bank Statements</strong>
                                    <p>Last 3 months business account</p>
                                </div>
                            </div>
                            <div className="doc-item-business">
                                <span className="doc-bullet-business">✓</span>
                                <div>
                                    <strong>ITR Documents</strong>
                                    <p>Last 2 years with computation</p>
                                </div>
                            </div>
                            <div className="doc-item-business">
                                <span className="doc-bullet-business">✓</span>
                                <div>
                                    <strong>GST Returns</strong>
                                    <p>Latest filed returns if applicable</p>
                                </div>
                            </div>
                            <div className="doc-item-business">
                                <span className="doc-bullet-business">✓</span>
                                <div>
                                    <strong>Financial Statements</strong>
                                    <p>Balance sheet and P&L statement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fees and Charges */}
            <section className="business-fees-section">
                <div className="section-heading">
                    <span className="eyebrow">Transparent Pricing</span>
                    <h2>Fees & Charges</h2>
                    <p>Complete clarity on all costs - no hidden charges</p>
                </div>

                <div className="business-fees-table">
                    <div className="fees-row-business fees-header-business">
                        <div className="fees-label-business">Particulars</div>
                        <div className="fees-value-business">Charges</div>
                    </div>

                    <div className="fees-row-business">
                        <div className="fees-label-business">
                            <span className="fees-icon-business">📊</span>
                            <div>
                                <strong>Interest Rate</strong>
                                <p>Per annum</p>
                            </div>
                        </div>
                        <div className="fees-value-business">
                            <strong>12% - 30% p.a.</strong>
                        </div>
                    </div>

                    <div className="fees-row-business">
                        <div className="fees-label-business">
                            <span className="fees-icon-business">⚙️</span>
                            <div>
                                <strong>Processing Fee</strong>
                                <p>One-time charge</p>
                            </div>
                        </div>
                        <div className="fees-value-business">
                            <strong>Up to 4% + GST</strong>
                            <span>Of loan amount</span>
                        </div>
                    </div>

                    <div className="fees-row-business">
                        <div className="fees-label-business">
                            <span className="fees-icon-business">💳</span>
                            <div>
                                <strong>Bounce Charges</strong>
                                <p>Per repayment default</p>
                            </div>
                        </div>
                        <div className="fees-value-business">
                            <strong>₹1,500</strong>
                            <span>Per bounce</span>
                        </div>
                    </div>

                    <div className="fees-row-business">
                        <div className="fees-label-business">
                            <span className="fees-icon-business">⚠️</span>
                            <div>
                                <strong>Penal Charges</strong>
                                <p>Delay in payment</p>
                            </div>
                        </div>
                        <div className="fees-value-business">
                            <strong>₹40 per day</strong>
                            <span>Per installment</span>
                        </div>
                    </div>

                    <div className="fees-row-business">
                        <div className="fees-label-business">
                            <span className="fees-icon-business">📄</span>
                            <div>
                                <strong>Document Processing</strong>
                                <p>Including GST</p>
                            </div>
                        </div>
                        <div className="fees-value-business">
                            <strong>₹2,500</strong>
                        </div>
                    </div>

                    <div className="fees-row-business">
                        <div className="fees-label-business">
                            <span className="fees-icon-business">🔄</span>
                            <div>
                                <strong>Prepayment Charges</strong>
                                <p>Early closure</p>
                            </div>
                        </div>
                        <div className="fees-value-business">
                            <strong>Up to 4.72% + GST</strong>
                            <span>On outstanding amount</span>
                        </div>
                    </div>

                    <div className="fees-row-business">
                        <div className="fees-label-business">
                            <span className="fees-icon-business">🏛️</span>
                            <div>
                                <strong>Stamp Duty</strong>
                                <p>State-wise variation</p>
                            </div>
                        </div>
                        <div className="fees-value-business">
                            <strong>As per state</strong>
                        </div>
                    </div>
                </div>

                <p className="fees-note-business">
                    * All charges are indicative and subject to change. Final rates communicated at sanction. Terms & conditions apply.
                </p>
            </section>

            {/* CTA Section */}
            <section className="business-cta-section">
                <div className="business-cta-card">
                    <div className="cta-icon-large">💼</div>
                    <h2>Ready to Grow Your Business?</h2>
                    <p>Join thousands of small business owners who trust E-Fin for quick business financing</p>
                    <div className="business-cta-buttons">
                        <Link to="/support/apply" className="primary-btn large">
                            Apply for Business Loan →
                        </Link>
                        <Link to="/support" className="ghost-btn large">
                            Talk to Business Advisor
                        </Link>
                    </div>
                    <div className="cta-features-list-business">
                        <span>✓ No Collateral</span>
                        <span>✓ Quick Approval</span>
                        <span>✓ Flexible Terms</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SmallBusinessLoanPage;
