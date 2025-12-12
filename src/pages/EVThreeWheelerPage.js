import { Link } from 'react-router-dom';
import './EVThreeWheelerPage.css';
import evThreeWheeler from '../assets/ev-auto-purchase.png';

function EVThreeWheelerPage() {
    return (
        <div className="page ev-three-wheeler-page">
            {/* Hero Section */}
            <section className="ev-hero">
                <div className="ev-hero-content">
                    <span className="ev-badge">🔋 Electric Vehicle Financing</span>
                    <h1>EV 3-Wheeler Auto Loan</h1>
                    <p className="ev-hero-description">
                        For individuals to buy an electric three-wheeler to drive for commercial purpose.
                    </p>
                    <p className="ev-loan-summary">
                        Loan up to <strong>Rs. 2.25 Lakh</strong> for individuals to purchase a 3-wheeler electric auto
                        for business. With this loan, you borrow a fixed sum from us and repay it in equal weekly or
                        monthly installments over the loan tenure of up to <strong>36 months</strong>.
                    </p>
                    <div className="ev-hero-cta">
                        <Link to="/support/apply" className="primary-btn">Apply for Loan</Link>
                        <Link to="/support" className="ghost-btn">Check Eligibility</Link>
                    </div>
                    <div className="ev-key-features">
                        <div className="feature-badge">
                            <div className="feature-icon">₹</div>
                            <div>
                                <strong>Up to ₹2.25L</strong>
                                <span>Loan Amount</span>
                            </div>
                        </div>
                        <div className="feature-badge">
                            <div className="feature-icon">📅</div>
                            <div>
                                <strong>Up to 36 Months</strong>
                                <span>Flexible Tenure</span>
                            </div>
                        </div>
                        <div className="feature-badge">
                            <div className="feature-icon">🔋</div>
                            <div>
                                <strong>Electric Auto</strong>
                                <span>Go Green</span>
                            </div>
                        </div>
                        <div className="feature-badge">
                            <div className="feature-icon">💼</div>
                            <div>
                                <strong>Commercial Use</strong>
                                <span>Business Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ev-hero-visual">
                    <div className="ev-visual-card">
                        <div className="ev-illustration-wrapper">
                            <div className="ev-glow-effect"></div>
                            <img src={evThreeWheeler} alt="EV Three Wheeler Auto" className="ev-auto-image" />
                        </div>
                        <div className="ev-stats-grid">
                            <div className="ev-stat">
                                <strong>24%</strong>
                                <span>Flat Interest Rate</span>
                            </div>
                            <div className="ev-stat">
                                <strong>Quick</strong>
                                <span>Approval</span>
                            </div>
                            <div className="ev-stat">
                                <strong>Weekly/Monthly</strong>
                                <span>EMI Options</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose EV Auto Section */}
            <section className="info-section ev-benefits-section">
                <div className="section-heading">
                    <p className="eyebrow">Why Go Electric?</p>
                    <h2>Benefits of EV Auto Loan</h2>
                </div>
                <div className="ev-benefits-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">🌱</div>
                        <h3>Eco-Friendly</h3>
                        <p>Reduce carbon footprint and contribute to a cleaner environment</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">💰</div>
                        <h3>Cost Savings</h3>
                        <p>Lower running costs compared to petrol/diesel autos</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">⚡</div>
                        <h3>Low Maintenance</h3>
                        <p>Electric vehicles require minimal maintenance and repairs</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">📈</div>
                        <h3>Business Growth</h3>
                        <p>Increase your earnings with lower operational costs</p>
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria Section */}
            <section className="info-section ev-eligibility-section">
                <div className="section-heading">
                    <p className="eyebrow">Are You Eligible?</p>
                    <h2>Eligibility Criteria</h2>
                </div>
                <div className="ev-eligibility-wrapper">
                    <div className="ev-eligibility-grid">
                        <div className="ev-eligibility-card">
                            <div className="ev-eligibility-icon">🇮🇳</div>
                            <div className="ev-eligibility-content">
                                <h4>Nationality</h4>
                                <p>Indian</p>
                            </div>
                        </div>
                        <div className="ev-eligibility-card">
                            <div className="ev-eligibility-icon">🎂</div>
                            <div className="ev-eligibility-content">
                                <h4>Age</h4>
                                <p>21 to 40 years</p>
                            </div>
                        </div>
                        <div className="ev-eligibility-card">
                            <div className="ev-eligibility-icon">💵</div>
                            <div className="ev-eligibility-content">
                                <h4>Minimum Monthly Income</h4>
                                <p>Rs. 15,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="ev-eligibility-note">
                        <div className="note-icon">ℹ️</div>
                        <p>All criteria must be met to qualify for the EV 3-Wheeler Auto Loan</p>
                    </div>
                </div>
            </section>

            {/* Documents Required Section */}
            <section className="info-section ev-documents-section">
                <div className="section-heading">
                    <p className="eyebrow">Keep These Ready</p>
                    <h2>Documents Required</h2>
                </div>
                <div className="ev-documents-grid">
                    <div className="ev-document-card">
                        <div className="ev-doc-header">
                            <div className="ev-doc-icon">🪪</div>
                            <h4>Identity Proof</h4>
                        </div>
                        <ul className="ev-doc-list">
                            <li>PAN Card</li>
                            <li>Aadhar Card</li>
                            <li>Commercial Driving License</li>
                        </ul>
                    </div>

                    <div className="ev-document-card">
                        <div className="ev-doc-header">
                            <div className="ev-doc-icon">🏠</div>
                            <h4>Address Proof</h4>
                        </div>
                        <ul className="ev-doc-list">
                            <li>Utility Bill</li>
                            <li>Rent Agreement</li>
                            <li>Sale Deed</li>
                        </ul>
                        <p className="ev-doc-note">Minimum 2 years at same address required</p>
                    </div>

                    <div className="ev-document-card">
                        <div className="ev-doc-header">
                            <div className="ev-doc-icon">🏦</div>
                            <h4>Financial Documents</h4>
                        </div>
                        <ul className="ev-doc-list">
                            <li>Bank Statement (Last 6 months)</li>
                            <li>Three Security Cheques</li>
                        </ul>
                    </div>

                    <div className="ev-document-card">
                        <div className="ev-doc-header">
                            <div className="ev-doc-icon">📸</div>
                            <h4>Photographs</h4>
                        </div>
                        <ul className="ev-doc-list">
                            <li>2 Passport Size Photographs</li>
                        </ul>
                    </div>

                    <div className="ev-document-card">
                        <div className="ev-doc-header">
                            <div className="ev-doc-icon">🚗</div>
                            <h4>Vehicle Documents</h4>
                        </div>
                        <ul className="ev-doc-list">
                            <li>Vehicle Registration Certificate</li>
                            <li>Vehicle Insurance</li>
                        </ul>
                    </div>

                    <div className="ev-document-card highlighted">
                        <div className="ev-doc-header">
                            <div className="ev-doc-icon">✅</div>
                            <h4>Additional Requirements</h4>
                        </div>
                        <ul className="ev-doc-list">
                            <li>Compulsory Third-Party Guarantee</li>
                            <li>IOT/Tracking devices in vehicles (through approved vendor)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Fees and Charges Section */}
            <section className="info-section ev-fees-section">
                <div className="section-heading">
                    <p className="eyebrow">Transparent Pricing</p>
                    <h2>Applicable Fees and Charges</h2>
                </div>
                <div className="ev-fees-table-wrapper">
                    <table className="ev-fees-table">
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
                                    <span className="highlight-rate">24% Flat Interest Rate</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Processing Fees</strong>
                                </td>
                                <td>Up to 5% of the loan amount (Inclusive applicable taxes)</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>EMI Bounce Charges</strong>
                                </td>
                                <td>Rs. 500 per bounce will be levied</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Penal Charges</strong>
                                </td>
                                <td>Delay in payment of installment(s) shall attract Penal Charges of Rs. 20 per day per installment from the respective due date until the date of receipt of full installment(s) amount.</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Document Processing Charges</strong>
                                </td>
                                <td>Rs. 2,500 (Inclusive applicable taxes)</td>
                            </tr>
                            <tr className="zero-fee">
                                <td>
                                    <strong>Prepayment Charges</strong>
                                </td>
                                <td>
                                    <span className="zero-badge">NIL</span>
                                    <span className="zero-subtext">Close your loan anytime without penalty</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Stamp Duty</strong>
                                </td>
                                <td>Payable as per respective state and deducted upfront from the loan amount, if applicable.</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Duplicate NDC/NOC Charge</strong>
                                </td>
                                <td>Rs. 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="info-section ev-process-section">
                <div className="section-heading">
                    <p className="eyebrow">Simple Process</p>
                    <h2>How to Apply</h2>
                </div>
                <div className="ev-process-grid">
                    <div className="ev-process-step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Submit Application</h3>
                            <p>Fill out the online application form with your details</p>
                        </div>
                    </div>
                    <div className="ev-process-step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>Document Verification</h3>
                            <p>Upload required documents for quick verification</p>
                        </div>
                    </div>
                    <div className="ev-process-step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Loan Approval</h3>
                            <p>Get instant approval based on eligibility</p>
                        </div>
                    </div>
                    <div className="ev-process-step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h3>Vehicle Purchase</h3>
                            <p>Buy your EV auto and start your business journey</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="ev-cta-section">
                <div className="ev-cta-card">
                    <div className="ev-cta-icon">🚀</div>
                    <h2>Ready to Drive Your Own EV Auto?</h2>
                    <p>Apply now and get on the road to success with your electric three-wheeler</p>
                    <div className="ev-cta-buttons">
                        <Link to="/support/apply" className="primary-btn">Apply Now</Link>
                        <Link to="/support" className="ghost-btn">Contact Support</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EVThreeWheelerPage;
