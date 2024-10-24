// src/components/Contact.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        setSuccessMessage("Message sent successfully!");
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });
        console.log('Email successfully sent:', response);
      })
      .catch((err) => {
        setErrorMessage("Failed to send message. Please try again.");
        console.error('Email sending failed:', err);
      });
    }
  };
  

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you! Feel free to reach out using the email or form below.</p>
        
        {/* Email Icon with Hover Effect */}
        <div className="contact-info">
          <div className="email-icon">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="hover-email">mrudula3.n@gmail.com</span>
          </div>
        </div>

        {/* Success & Error Messages */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {formErrors.name && <p className="error-text">{formErrors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            {formErrors.email && <p className="error-text">{formErrors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
            ></textarea>
            {formErrors.message && <p className="error-text">{formErrors.message}</p>}
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
