import React from 'react';
import { skills, siteInfo } from '../../Mock';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1>About Me</h1>
              <p className="lead">
                Hi! I'm Vibgyor, a passionate graphic designer with over 10 years of experience 
                transforming brands through creative visual solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="section my-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                alt="Design Process" 
              />
            </div>
            <div className="story-content">
              <h2>My Journey as a Graphic Designer</h2>
              <p>
                My passion for design began over a decade ago when I discovered the power of visual 
                communication. What started as a hobby quickly evolved into a fulfilling career helping 
                businesses stand out in competitive markets.
              </p>
              <p>
                Throughout my journey, I've had the privilege of working with diverse clients across various 
                industries—from startups looking to establish their brand identity to established companies 
                seeking fresh, innovative packaging solutions.
              </p>
              <p>
                I believe that great design is more than just aesthetics—it's about solving problems, 
                communicating messages effectively, and creating memorable experiences that resonate with 
                target audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Software Expertise</h2>
            <p>Tools I use to bring creative visions to life</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="section creative-process">
        <div className="container">
          <div className="section-header">
            <h2>My Creative Process</h2>
            <p>How I transform your ideas into stunning designs</p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3>Discovery & Research</h3>
              <p>
                Understanding your brand, target audience, competitors, and project goals through 
                detailed consultation and market research.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">02</div>
              <h3>Concept Development</h3>
              <p>
                Creating multiple design concepts based on insights gathered, exploring different 
                visual directions and creative approaches.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">03</div>
              <h3>Design Refinement</h3>
              <p>
                Refining the chosen concept through iterative feedback, ensuring every detail 
                aligns with your vision and objectives.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">04</div>
              <h3>Final Delivery</h3>
              <p>
                Delivering print-ready files in all required formats, complete with specifications 
                and ongoing support for implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="section experience-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Experience Highlights</h2>
          </div>
          <div className="experience-grid">
            <div className="experience-card card">
              <h3>Senior Graphic Designer</h3>
              <p className="exp-company">Freelance / Self-Employed</p>
              <p className="exp-period">2018 - Present</p>
              <p>
                Providing comprehensive design services to clients worldwide, specializing in packaging, 
                branding, and digital graphics. Successfully completed 500+ projects with 98% client 
                satisfaction rate.
              </p>
            </div>
            <div className="experience-card card">
              <h3>Lead Designer</h3>
              <p className="exp-company">Creative Agency</p>
              <p className="exp-period">2015 - 2018</p>
              <p>
                Led design team in creating brand identities and marketing materials for Fortune 500 
                clients. Mentored junior designers and established design workflow processes.
              </p>
            </div>
            <div className="experience-card card">
              <h3>Graphic Designer</h3>
              <p className="exp-company">Marketing Studio</p>
              <p className="exp-period">2013 - 2015</p>
              <p>
                Developed print and digital designs for diverse clients across retail, technology, and 
                healthcare industries. Specialized in packaging and promotional materials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
