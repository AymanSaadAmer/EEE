import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const services = [
  'Design Review',
  'Commissioning & Start-up Support',
  'Troubleshooting & Optimization',
  'Sludge Dewatering Solutions',
  'Technical Advisory',
  'Other / General Inquiry',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <section className="page-header">
        <div className="page-header__overlay" />
        <div className="container page-header__inner">
          <span className="eyebrow eyebrow--light">Get in Touch</span>
          <h1 className="headline-xl">Contact EEE</h1>
          <p className="body-lg body-white" style={{ maxWidth: 520, marginTop: 16 }}>
            Whether you have a specific technical challenge or want to discuss how we can support your project, we welcome a direct conversation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* FORM */}
            <div className="contact-form-side">
              <span className="eyebrow">Send a Message</span>
              <div className="divider" />
              <h2 className="headline-md" style={{ marginBottom: 8 }}>Request a Consultation</h2>
              <p className="body-md" style={{ marginBottom: 36 }}>
                Complete the form below and we will respond within one business day. For urgent technical inquiries, please contact us directly by email or phone.
              </p>

              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon"><CheckCircle size={36} /></div>
                  <h3 className="headline-sm">Message Received</h3>
                  <p className="body-md" style={{ marginTop: 8 }}>
                    Thank you for contacting EEE. We will review your message and respond within one business day.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company / Organization</label>
                      <input className="form-input" name="company" value={form.company} onChange={handleChange} placeholder="Your organization" />
                    </div>
                  </div>
                  <div className="contact-form__row">
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input className="form-input" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input className="form-input" name="phone" value={form.phone} onChange={handleChange} placeholder="+000 000 000 000" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service of Interest</label>
                    <select className="form-input form-select" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Message / Project Description *</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Describe your project, challenge, or inquiry. The more context you provide, the more useful our initial response will be."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary contact-submit">
                    Send Message <Send size={15} />
                  </button>
                  <p className="contact-form__note">
                    Your information is kept confidential and will not be shared with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* INFO SIDE */}
            <div className="contact-info-side">
              <div className="contact-info-card">
                <h3 className="contact-info-card__title">Contact Information</h3>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-info-item__icon"><Mail size={18} /></div>
                    <div>
                      <div className="contact-info-item__label">Email</div>
                      <a href="mailto:info@eee-engineering.com" className="contact-info-item__value">
                        info@eee-engineering.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-item__icon"><Phone size={18} /></div>
                    <div>
                      <div className="contact-info-item__label">Phone</div>
                      <a href="tel:+0000000000" className="contact-info-item__value">+000 000 000 000</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-item__icon"><MapPin size={18} /></div>
                    <div>
                      <div className="contact-info-item__label">Region</div>
                      <span className="contact-info-item__value">Middle East & North Africa</span>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-item__icon"><Clock size={18} /></div>
                    <div>
                      <div className="contact-info-item__label">Response Time</div>
                      <span className="contact-info-item__value">Within 1 business day</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-what-to-expect">
                <h4 className="contact-what-to-expect__title">What to Expect</h4>
                <ol className="contact-steps">
                  {[
                    'We review your message and understand the context of your inquiry.',
                    'We respond within one business day with relevant questions or initial thoughts.',
                    'A short technical call is scheduled if appropriate to discuss scope.',
                    'We provide a clear proposal for how we can support your project.',
                  ].map((step, i) => (
                    <li key={i} className="contact-step">
                      <span className="contact-step__num">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="contact-languages">
                <h4 className="contact-languages__title">Languages</h4>
                <p className="body-md">We communicate in <strong>English</strong> and <strong>Arabic</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
