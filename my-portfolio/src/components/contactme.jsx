import React, { useState } from 'react';
import './contactme.css';

const Contact = () => {
    // State for managing form input
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to backend or perform other actions
        console.log('Form data:', formData);
        // Reset form fields
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact-me">
            <div className="contact-me-content">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="4"
                            required
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;