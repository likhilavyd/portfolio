import "../styles/Contact.css";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending message...');
    
    try {
      // Using Formspree for form handling
      // To make this work: 1) Sign up at formspree.io 2) Replace YOUR_FORM_ID with your actual form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus('✅ Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback to mailto if form service fails
      const mailtoLink = `mailto:likhilavyd.work@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      setFormStatus('📧 Opening your email client...');
    }
    
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Let's connect! Whether you have a project in mind, want to collaborate, or just want to say hello.
      </p>
      
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <h3 className="form-title">Send Me a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
            </div>
            
            <button type="submit" className="form-submit">
              📨 Send Message
            </button>
            
            {formStatus && (
              <p className="form-status">{formStatus}</p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h3 className="info-title">Let's Connect</h3>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">📧</div>
              <div className="method-content">
                <span className="method-label">Email</span>
                <a href="mailto:likhilavyd.work@gmail.com" className="method-link">
                  likhilavyd.work@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">💼</div>
              <div className="method-content">
                <span className="method-label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/likhila-vydana-aab074325" target="_blank" rel="noopener noreferrer" className="method-link">
                  linkedin.com/in/likhilavydana
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">🐙</div>
              <div className="method-content">
                <span className="method-label">GitHub</span>
                <a href="https://github.com/likhilavyd" target="_blank" rel="noopener noreferrer" className="method-link">
                  github.com/likhilavyd
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">💻</div>
              <div className="method-content">
                <span className="method-label">LeetCode</span>
                <a href="https://leetcode.com/u/likhila19/" target="_blank" rel="noopener noreferrer" className="method-link">
                  leetcode.com/u/likhila19
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">🚀</div>
              <div className="method-content">
                <span className="method-label">Response Time</span>
                <span className="method-text">Usually within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;