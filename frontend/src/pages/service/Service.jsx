import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Layout, Share2, Palette, FileText, Box, Check } from 'lucide-react';
import { services, faqs } from '../../Mock';
import './Service.css';

const iconMap = {
  Package,
  Layout,
  Share2,
  Palette,
  FileText,
  Box
};

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>My Design Services</h1>
            <p className="lead">
              Comprehensive graphic design solutions tailored to elevate your brand and drive business success
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section services-detail">
        <div className="container">
          <div className="services-detail-grid">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Package;
              return (
                <div key={service.id} className="service-detail-card card">
                  <div className="service-detail-header">
                    <div className="service-detail-icon">
                      <IconComponent size={36} />
                    </div>
                    <div>
                      <h2>{service.title}</h2>
                      <p className="service-price">{service.price}</p>
                    </div>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <Check size={18} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="btn btn-primary">
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="section pricing-note" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="pricing-note-content">
            <h2>Flexible Pricing Options</h2>
            <p>
              Every project is unique. The prices listed are starting rates and may vary based on project 
              complexity, timeline, and specific requirements. Contact me for a detailed quote tailored to 
              your needs.
            </p>
            <div className="pricing-features">
              <div className="pricing-feature">
                <h4>Custom Packages</h4>
                <p>Flexible packages designed for your specific needs and budget</p>
              </div>
              <div className="pricing-feature">
                <h4>Monthly Retainers</h4>
                <p>Ongoing design support with discounted rates for regular clients</p>
              </div>
              <div className="pricing-feature">
                <h4>Rush Services</h4>
                <p>Need it fast? Express delivery available for urgent projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about working with me</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Bring Your Project to Life?</h2>
            <p>
              Let's discuss your design needs and create something amazing together. 
              Get in touch for a free consultation.
            </p>
            <Link to="/contact" className="btn btn-secondary">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
