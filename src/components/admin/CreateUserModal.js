import { useState } from 'react';
import './CreateUserModal.css';

function CreateUserModal({ isOpen, onClose, onSuccess, createdBy }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!formData.email || !formData.password || !formData.firstName || !formData.lastName) {
            setError('Email, password, first name and last name are required');
            return;
        }

        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:5001/api/admin/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    createdBy
                })
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                setError(data.message || 'Failed to create user');
                setIsLoading(false);
                return;
            }

            // Success
            setIsLoading(false);
            setFormData({ email: '', password: '', firstName: '', lastName: '', phone: '' });
            onSuccess(data.data);
            onClose();

        } catch (error) {
            setIsLoading(false);
            setError('Unable to connect to server');
            console.error('Create user error:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content create-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>👤 Create User Account</h2>
                    <button className="modal-close-btn" onClick={onClose}>×</button>
                </div>

                {error && (
                    <div className="modal-error">
                        ⚠️ {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="create-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name *</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Rajesh"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name *</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Kumar"
                                required
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="user@example.com"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number (Optional)</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password *</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Minimum 8 characters"
                            required
                            disabled={isLoading}
                            minLength="8"
                        />
                        <small className="form-hint">User will be able to change this password after first login</small>
                    </div>

                    <div className="modal-actions">
                        <button
                            type="button"
                            className="btn btn-cancel"
                            onClick={onClose}
                            disabled={isLoading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span className="spinner"></span>
                                    Creating...
                                </>
                            ) : (
                                '✅ Create User'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateUserModal;
