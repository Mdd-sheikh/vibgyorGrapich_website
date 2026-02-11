import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { siteInfo } from '../../Mock';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be connected to backend later
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get In Touch</h1>
            <p className="lead">
              Ready to start your project? Let's discuss how I can help bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="container">
            <h2>Professional Graphic Design Services in Kolkata</h2>
            <p>
              I provide professional graphic design services including packaging design,
              logo design, branding, banner design, social media graphics, and print materials.
              Based in Kolkata, West Bengal, I work with clients across India and internationally.
            </p>

            <p>
              Whether you're a startup looking for brand identity or an established
              business needing creative packaging solutions, I deliver strategic,
              high-quality design solutions tailored to your audience.
            </p>
          </div>
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Me a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={submitted}>
                  {submitted ? 'Message Sent!' : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-info-card card">
                <div className="contact-info-icon">
                  <Mail size={28} />
                </div>
                <h3>Email</h3>
                <p>{siteInfo.email}</p>
                <a href={`mailto:${siteInfo.email}`} className="contact-link">
                  Send Email
                </a>
              </div>

              <div className="contact-info-card card">
                <div className="contact-info-icon">
                  <Phone size={28} />
                </div>
                <h3>Phone</h3>
                <p>{siteInfo.phone}</p>
                <a href={`tel:${siteInfo.phone}`} className="contact-link">
                  Call Now
                </a>
              </div>

              <div className="contact-info-card card">
                <div className="contact-info-icon">
                  <MapPin size={28} />
                </div>
                <h3>Location</h3>
                <p>{siteInfo.location}</p>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${siteInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary whatsapp-btn"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="map-section">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094491!2d88.04952462812499!3d22.677509699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
