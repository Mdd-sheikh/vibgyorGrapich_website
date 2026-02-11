import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Zap, RefreshCw, FileCheck, Sparkles, Headphones, Star } from 'lucide-react';
import { services, portfolioItems, testimonials, whyChooseMe, siteInfo } from '../../Mock';
import './Home.css';
import { useEffect } from 'react';

const iconMap = {
  Award,
  Zap,
  RefreshCw,
  FileCheck,
  Sparkles,
  Headphones
};





const Home = () => {

  useEffect(() => {
    if (window.adsbygoogle && typeof window.adsbygoogle.push === "function") {
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        console.log("Adsense already initialized");
      }
    }
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Professional Graphic Designer for Product & Packaging Design
              </h1>
              <p className="hero-description">
                Transforming ideas into stunning visual designs that captivate audiences and drive results.
                Specializing in packaging, branding, and digital graphics.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Hire Me <ArrowRight size={20} />
                </Link>
                <Link to="/portfolio" className="btn btn-outline">
                  View Portfolio
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
                alt="Graphic Design Workspace"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="ad-section">
        <div className="container">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-8178245553308553"
            data-ad-slot="8637269695"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <div className="section-header">
            <h2>My Services</h2>
            <p>Comprehensive design solutions for your business needs</p>
          </div>
          <div className="services-grid">
            {services.slice(0, 6).map((service) => {
              const IconComponent = iconMap[service.icon] || Award;
              return (
                <div key={service.id} className="service-card card">
                  <div className="service-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services" className="service-link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="section featured-portfolio" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Showcasing my recent design work</p>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.slice(0, 6).map((item) => (
              <div key={item.id} className="portfolio-item">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{item.category}</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/portfolio" className="btn btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="section why-choose">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Me</h2>
            <p>What makes my design services stand out</p>
          </div>
          <div className="why-grid">
            {whyChooseMe.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Award;
              return (
                <div key={index} className="why-card">
                  <div className="why-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>What my clients say about working with me</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--accent-secondary)" color="var(--accent-secondary)" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview / CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's collaborate to bring your vision to life. With 10+ years of experience in graphic design,
              I'm here to help elevate your brand.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <a
                href={`https://wa.me/${siteInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
