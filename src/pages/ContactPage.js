import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="page contact-page-modern">
            {/* Hero Section */}
            <section className="contact-hero-modern">
                <div className="contact-hero-content">
                    <span className="contact-badge">📧 Get In Touch</span>
                    <h1>
                        We'd Love to <span className="gradient-text">Hear From You</span>
                    </h1>
                    <p className="contact-hero-description">
                        Have questions about our loan products? Need assistance with your application?
                        Our team is here to help you every step of the way.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="contact-main-section">
                <div className="contact-container">
                    {/* Contact Information */}
                    <div className="contact-info-side">
                        <div className="contact-info-card">
                            <h2>Contact Information</h2>
                            <p className="info-subtitle">Reach out to us through any of these channels</p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="method-icon-contact">📞</div>
                                    <div className="method-details">
                                        <strong>Phone</strong>
                                        <a href="tel:+919997842548">+91-9997842548</a>
                                        <span className="method-note">Mon-Sat, 9:00 AM - 6:00 PM</span>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon-contact">✉️</div>
                                    <div className="method-details">
                                        <strong>Email</strong>
                                        <a href="mailto:Care@efin.co.in">Care@efin.co.in</a>
                                        <span className="method-note">We'll respond within 24 hours</span>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon-contact">💬</div>
                                    <div className="method-details">
                                        <strong>WhatsApp</strong>
                                        <a href="https://wa.me/919997842548" target="_blank" rel="noopener noreferrer">
                                            Chat with us
                                        </a>
                                        <span className="method-note">Instant messaging support</span>
                                    </div>
                                </div>
                            </div>

                            <div className="office-locations">
                                <h3>Our Offices</h3>

                                <div className="office-card">
                                    <div className="office-icon">📍</div>
                                    <div>
                                        <strong>Corporate Office</strong>
                                        <p>
                                            C-74, Sector 63<br />
                                            Noida, Uttar Pradesh 201301
                                        </p>
                                    </div>
                                </div>

                                <div className="office-card">
                                    <div className="office-icon">📍</div>
                                    <div>
                                        <strong>Registerd Office</strong>
                                        <p>
                                            302, Pratap Chambers, Karol Bagh<br />
                                            New Delhi - 110005
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-connect">
                                <h3>Connect With Us</h3>
                                <div className="social-links-contact">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                        <img src="https://img.icons8.com/color/48/facebook.png" alt="Facebook" />
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
                                    </a>
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                        <img src="https://img.icons8.com/color/48/twitter--v1.png" alt="Twitter" />
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <img src="https://img.icons8.com/color/48/instagram-new.png" alt="Instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-side">
                        <div className="contact-form-card-main">
                            <h2>Send Us a Message</h2>
                            <p className="form-subtitle">Fill out the form below and we'll get back to you soon</p>

                            <form className="contact-form-main" onSubmit={handleSubmit}>
                                <div className="form-group-contact">
                                    <label htmlFor="name">Your Name <span className="required">*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                <div className="form-group-contact">
                                    <label htmlFor="email">Email Address <span className="required">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group-contact">
                                    <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        required
                                    />
                                </div>

                                <div className="form-group-contact">
                                    <label htmlFor="subject">Subject <span className="required">*</span></label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Loan Application">Loan Application</option>
                                        <option value="Existing Loan">Existing Loan Support</option>
                                        <option value="Documentation">Documentation Query</option>
                                        <option value="Payment Issue">Payment Issue</option>
                                        <option value="Feedback">Feedback</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group-contact full-width">
                                    <label htmlFor="message">Your Message <span className="required">*</span></label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us how we can help you..."
                                        rows="5"
                                        required
                                    />
                                </div>

                                <button type="submit" className="contact-submit-btn">
                                    Send Message →
                                </button>

                                {submitted && (
                                    <div className="form-success-contact">
                                        <span className="success-icon-contact">✓</span>
                                        <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="contact-quick-links-section">
                <h3>Looking for Something Specific?</h3>
                <div className="quick-links-grid">
                    <Link to="/support/apply" className="quick-link-card">
                        <div className="quick-link-icon">📝</div>
                        <strong>Apply for a Loan</strong>
                        <p>Start your loan application process</p>
                    </Link>

                    <Link to="/support" className="quick-link-card">
                        <div className="quick-link-icon">🛟</div>
                        <strong>Support Center</strong>
                        <p>Get help with existing applications</p>
                    </Link>

                    <Link to="/about/careers" className="quick-link-card">
                        <div className="quick-link-icon">💼</div>
                        <strong>Careers</strong>
                        <p>Join our growing team</p>
                    </Link>

                    <Link to="/policies/grievance-redressal" className="quick-link-card">
                        <div className="quick-link-icon">⚖️</div>
                        <strong>Grievance Redressal</strong>
                        <p>File a complaint or concern</p>
                    </Link>
                </div>
            </section>

            {/* Map Section */}
            <section className="contact-map-section">
                <h3>Visit Our Office</h3>
                <div className="map-container">
                    <iframe
                        title="E-Fin Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.633845616866!2d77.3706301!3d28.6238324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff26d89b9e9%3A0x8b10fba59a26d81a!2sC-74%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
