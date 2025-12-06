import { Link } from 'react-router-dom';
import './TwoWheelerLoanPage.css';
import twoWheelerBike from '../assets/two-wheeler-bike.png';

function TwoWheelerLoanPage() {
    return (
        <div className="page two-wheeler-page">
            {/* Hero Section */}
            <section className="tw-hero">
                <div className="tw-hero-content">
                    <span className="tw-badge">🏍️ Ride Your Dreams</span>
                    <h1>Two-Wheeler Loan</h1>
                    <p className="tw-hero-description">
                        Ride home your next bike or scooter with minimal down payment and flexible EMI options.
                    </p>
                    <p className="tw-loan-summary">
                        Fund petrol or electric two-wheelers with bundled insurance, fast approvals, and doorstep
                        documentation support. Loan up to <strong>₹5 Lakh</strong> with tenure of up to <strong>48 months</strong>.
                    </p>
                    <div className="tw-hero-cta">
                        <Link to="/support/apply" className="primary-btn">Apply for Loan</Link>
                        <Link to="/support" className="ghost-btn">Check Eligibility</Link>
                    </div>
                    <div className="tw-key-features">
                        <div className="tw-feature-badge">
                            <div className="tw-feature-icon">₹</div>
                            <div>
                                <strong>₹40K - ₹5L</strong>
                                <span>Loan Amount</span>
                            </div>
                        </div>
                        <div className="tw-feature-badge">
                            <div className="tw-feature-icon">📅</div>
                            <div>
                                <strong>6-48 Months</strong>
                                <span>Flexible Tenure</span>
                            </div>
                        </div>
                        <div className="tw-feature-badge">
                            <div className="tw-feature-icon">⚡</div>
                            <div>
                                <strong>&lt; 2 Hours</strong>
                                <span>Quick Approval</span>
                            </div>
                        </div>
                        <div className="tw-feature-badge">
                            <div className="tw-feature-icon">🛡️</div>
                            <div>
                                <strong>95% Financed</strong>
                                <span>Including Insurance</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-hero-visual">
                    <div className="tw-visual-card">
                        <div className="tw-illustration-wrapper">
                            <div className="tw-glow-effect"></div>
                            <img src={twoWheelerBike} alt="Two Wheeler Bike" className="tw-bike-image" />
                        </div>
                        <div className="tw-stats-grid">
                            <div className="tw-stat">
                                <strong>Fast</strong>
                                <span>Approval</span>
                            </div>
                            <div className="tw-stat">
                                <strong>Low EMI</strong>
                                <span>Starting ₹1,500</span>
                            </div>
                            <div className="tw-stat">
                                <strong>Minimal</strong>
                                <span>Documentation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="info-section tw-benefits-section">
                <div className="section-heading">
                    <p className="eyebrow">Why Choose Us?</p>
                    <h2>Benefits of Two-Wheeler Loan</h2>
                </div>
                <div className="tw-benefits-grid">
                    <div className="tw-benefit-card">
                        <div className="tw-benefit-icon">💰</div>
                        <h3>Up to 95% Financed</h3>
                        <p>Finance up to 95% of on-road price including insurance and registration</p>
                    </div>
                    <div className="tw-benefit-card">
                        <div className="tw-benefit-icon">⚡</div>
                        <h3>Quick Processing</h3>
                        <p>Get approval in less than 2 hours with minimal documentation</p>
                    </div>
                    <div className="tw-benefit-card">
                        <div className="tw-benefit-icon">📅</div>
                        <h3>Flexible EMI</h3>
                        <p>Choose EMI dates aligned to your salary cycle for convenience</p>
                    </div>
                    <div className="tw-benefit-card">
                        <div className="tw-benefit-icon">🎒</div>
                        <h3>Top-up Available</h3>
                        <p>Additional financing for riding gear, accessories, and safety equipment</p>
                    </div>
                    <div className="tw-benefit-card">
                        <div className="tw-benefit-icon">🔋</div>
                        <h3>EV Friendly</h3>
                        <p>Special rates and schemes for electric two-wheelers</p>
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria Section */}
            <section className="info-section tw-eligibility-section">
                <div className="section-heading">
                    <p className="eyebrow">Are You Eligible?</p>
                    <h2>Eligibility Criteria</h2>
                </div>
                <div className="tw-eligibility-wrapper">
                    <div className="tw-eligibility-grid">
                        <div className="tw-eligibility-card">
                            <div className="tw-eligibility-icon">🇮🇳</div>
                            <div className="tw-eligibility-content">
                                <h4>Nationality</h4>
                                <p>Indian Resident</p>
                            </div>
                        </div>
                        <div className="tw-eligibility-card">
                            <div className="tw-eligibility-icon">🎂</div>
                            <div className="tw-eligibility-content">
                                <h4>Age</h4>
                                <p>21 to 65 years</p>
                            </div>
                        </div>
                        <div className="tw-eligibility-card">
                            <div className="tw-eligibility-icon">💼</div>
                            <div className="tw-eligibility-content">
                                <h4>Employment</h4>
                                <p>Salaried or Self-Employed</p>
                            </div>
                        </div>
                        <div className="tw-eligibility-card">
                            <div className="tw-eligibility-icon">💵</div>
                            <div className="tw-eligibility-content">
                                <h4>Minimum Income</h4>
                                <p>₹12,000 per month</p>
                            </div>
                        </div>
                        <div className="tw-eligibility-card">
                            <div className="tw-eligibility-icon">📊</div>
                            <div className="tw-eligibility-content">
                                <h4>Credit Score</h4>
                                <p>650 or above (preferred)</p>
                            </div>
                        </div>
                    </div>
                    <div className="tw-eligibility-note">
                        <div className="tw-note-icon">ℹ️</div>
                        <p>Meeting these criteria improves your chances of quick approval and better interest rates</p>
                    </div>
                </div>
            </section>

            {/* Documents Required Section */}
            <section className="info-section tw-documents-section">
                <div className="section-heading">
                    <p className="eyebrow">Keep These Ready</p>
                    <h2>Documents Required</h2>
                </div>
                <div className="tw-documents-grid">
                    <div className="tw-document-card">
                        <div className="tw-doc-header">
                            <div className="tw-doc-icon">🪪</div>
                            <h4>Identity Proof</h4>
                        </div>
                        <ul className="tw-doc-list">
                            <li>PAN Card (Mandatory)</li>
                            <li>Aadhar Card</li>
                            <li>Passport</li>
                            <li>Voter ID Card</li>
                            <li>Driving License</li>
                        </ul>
                    </div>

                    <div className="tw-document-card">
                        <div className="tw-doc-header">
                            <div className="tw-doc-icon">🏠</div>
                            <h4>Address Proof</h4>
                        </div>
                        <ul className="tw-doc-list">
                            <li>Aadhar Card</li>
                            <li>Utility Bills (not older than 3 months)</li>
                            <li>Rent Agreement</li>
                            <li>Passport</li>
                        </ul>
                    </div>

                    <div className="tw-document-card">
                        <div className="tw-doc-header">
                            <div className="tw-doc-icon">💼</div>
                            <h4>Income Proof (Salaried)</h4>
                        </div>
                        <ul className="tw-doc-list">
                            <li>Last 3 months salary slips</li>
                            <li>Last 6 months bank statement</li>
                            <li>Employment certificate/letter</li>
                            <li>Form 16 (if available)</li>
                        </ul>
                    </div>

                    <div className="tw-document-card">
                        <div className="tw-doc-header">
                            <div className="tw-doc-icon">📊</div>
                            <h4>Income Proof (Self-Employed)</h4>
                        </div>
                        <ul className="tw-doc-list">
                            <li>Last 2 years ITR with computation</li>
                            <li>Last 6 months bank statement</li>
                            <li>Business proof documents</li>
                            <li>GST registration (if applicable)</li>
                        </ul>
                    </div>

                    <div className="tw-document-card">
                        <div className="tw-doc-header">
                            <div className="tw-doc-icon">🏦</div>
                            <h4>Financial Documents</h4>
                        </div>
                        <ul className="tw-doc-list">
                            <li>Bank account statement (Last 6 months)</li>
                            <li>Cancelled cheque or bank passbook</li>
                            <li>Post-dated cheques (PDCs)</li>
                        </ul>
                    </div>

                    <div className="tw-document-card highlighted">
                        <div className="tw-doc-header">
                            <div className="tw-doc-icon">📸</div>
                            <h4>Additional Documents</h4>
                        </div>
                        <ul className="tw-doc-list">
                            <li>Recent passport size photographs</li>
                            <li>Vehicle quotation/proforma invoice</li>
                            <li>Existing loan details (if any)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Fees and Charges Section */}
            <section className="info-section tw-fees-section">
                <div className="section-heading">
                    <p className="eyebrow">Transparent Pricing</p>
                    <h2>Applicable Fees and Charges</h2>
                </div>
                <div className="tw-fees-table-wrapper">
                    <table className="tw-fees-table">
                        <thead>
                            <tr>
                                <th>Type of Fees</th>
                                <th>Applicable Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Rate of Interest</strong>
                                </td>
                                <td>
                                    <span className="tw-highlight-rate">12% - 24% p.a.</span>
                                    <span className="tw-rate-note">(Varies based on credit profile)</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Processing Fees</strong>
                                </td>
                                <td>Up to 3% of the loan amount (Subject to minimum ₹1,500)<br />
                                    <span className="tw-fee-note">Inclusive of applicable taxes</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Down Payment</strong>
                                </td>
                                <td>Minimum 5% of on-road price<br />
                                    <span className="tw-fee-note">May vary based on vehicle model and eligibility</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>EMI Bounce Charges</strong>
                                </td>
                                <td>₹500 per bounce + applicable taxes</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Late Payment Charges</strong>
                                </td>
                                <td>₹500 per installment or 2% of overdue amount, whichever is higher</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Document Processing Charges</strong>
                                </td>
                                <td>₹500 - ₹1,000 (One-time, inclusive of applicable taxes)</td>
                            </tr>
                            <tr className="tw-zero-fee">
                                <td>
                                    <strong>Prepayment/Foreclosure Charges</strong>
                                </td>
                                <td>
                                    <span className="tw-zero-badge">NIL</span>
                                    <span className="tw-zero-subtext">Close your loan anytime without penalty after 6 months</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Part Payment Charges</strong>
                                </td>
                                <td>NIL (Minimum ₹5,000 per transaction)</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Stamp Duty & Registration</strong>
                                </td>
                                <td>As per state regulations (Deducted from loan amount)</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Insurance</strong>
                                </td>
                                <td>Comprehensive insurance mandatory (Can be financed)</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Duplicate Statement Charges</strong>
                                </td>
                                <td>₹100 per statement</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>NOC Charges</strong>
                                </td>
                                <td>₹500 (After loan closure)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="info-section tw-process-section">
                <div className="section-heading">
                    <p className="eyebrow">Simple Process</p>
                    <h2>How to Apply</h2>
                </div>
                <div className="tw-process-grid">
                    <div className="tw-process-step">
                        <div className="tw-step-number">1</div>
                        <div className="tw-step-content">
                            <h3>Choose Your Vehicle</h3>
                            <p>Select your dream bike from authorized dealers</p>
                        </div>
                    </div>
                    <div className="tw-process-step">
                        <div className="tw-step-number">2</div>
                        <div className="tw-step-content">
                            <h3>Apply Online</h3>
                            <p>Fill simple application form with basic details</p>
                        </div>
                    </div>
                    <div className="tw-process-step">
                        <div className="tw-step-number">3</div>
                        <div className="tw-step-content">
                            <h3>Quick Verification</h3>
                            <p>Submit documents for instant verification</p>
                        </div>
                    </div>
                    <div className="tw-process-step">
                        <div className="tw-step-number">4</div>
                        <div className="tw-step-content">
                            <h3>Get Approval</h3>
                            <p>Receive loan approval within 2 hours</p>
                        </div>
                    </div>
                    <div className="tw-process-step">
                        <div className="tw-step-number">5</div>
                        <div className="tw-step-content">
                            <h3>Pay Down Payment</h3>
                            <p>Make minimal down payment at the dealership</p>
                        </div>
                    </div>
                    <div className="tw-process-step">
                        <div className="tw-step-number">6</div>
                        <div className="tw-step-content">
                            <h3>Ride Home</h3>
                            <p>Take delivery and start your journey!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Loan Calculator Teaser */}
            <section className="info-section tw-calculator-teaser">
                <div className="tw-calculator-card">
                    <div className="tw-calculator-content">
                        <h2>Calculate Your EMI</h2>
                        <p>Use our EMI calculator to plan your budget and find the perfect loan amount</p>
                        <Link to="/calculators/two-three-wheeler-loan-calculator" className="primary-btn">
                            Calculate EMI
                        </Link>
                    </div>
                    <div className="tw-calculator-visual">
                        <div className="tw-calc-icon">📊</div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="tw-cta-section">
                <div className="tw-cta-card">
                    <div className="tw-cta-icon">🚀</div>
                    <h2>Ready to Ride Your Dream Bike?</h2>
                    <p>Apply now and get on the road with your new two-wheeler in no time</p>
                    <div className="tw-cta-buttons">
                        <Link to="/support/apply" className="primary-btn">Apply Now</Link>
                        <Link to="/support" className="ghost-btn">Contact Support</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TwoWheelerLoanPage;
