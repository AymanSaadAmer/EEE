import './Clients.css';

const industries = [
  {
    title: 'Municipal Wastewater Authorities',
    desc: 'Government bodies and public utilities responsible for collecting and treating domestic wastewater. We support feasibility studies, design reviews, commissioning, and operational improvement for municipal treatment infrastructure.',
    services: ['Design Review', 'Commissioning Support', 'Performance Optimization', 'Technical Advisory'],
  },
  {
    title: 'Industrial Facilities',
    desc: 'Manufacturing plants, food and beverage producers, pharmaceutical manufacturers, and other industrial operators subject to wastewater discharge standards. We help these clients achieve compliance while minimizing treatment costs.',
    services: ['Treatment Feasibility', 'Process Troubleshooting', 'Sludge Management', 'Compliance Advisory'],
  },
  {
    title: 'EPC Contractors',
    desc: 'Engineering, procurement, and construction companies delivering water and wastewater infrastructure on behalf of public and private clients. We integrate as specialist process support within the contractor\'s delivery team.',
    services: ['P&ID Review', 'Process Engineering Support', 'Commissioning Oversight', 'Performance Testing'],
  },
  {
    title: 'Engineering Consultancies',
    desc: 'Design firms and consulting engineers who require specialist process expertise beyond their core team capabilities. We provide peer review, independent verification, and specialist input on complex process challenges.',
    services: ['Peer Review', 'Specialist Process Input', 'Technology Evaluation', 'Expert Opinion'],
  },
  {
    title: 'Private Investors & Developers',
    desc: 'Private sector clients developing water or wastewater infrastructure under BOT, BOOT, or similar concession arrangements. We provide technical due diligence, independent engineer services, and performance monitoring support.',
    services: ['Technical Due Diligence', 'Independent Engineer', 'Bid Evaluation', 'Performance Monitoring'],
  },
  {
    title: 'International Development Organizations',
    desc: 'NGOs, development banks, and bilateral aid organizations funding water and sanitation infrastructure in developing markets. We provide technically rigorous assessment and advisory support for infrastructure investment programs.',
    services: ['Technical Assessment', 'Project Advisory', 'Training & Capacity Building'],
  },
];

const testimonialPlaceholders = [
  { quote: '"EEE provided exactly the type of direct, practical engineering support that our commissioning team needed. Problems were diagnosed and resolved efficiently."', name: 'Senior Engineer', company: 'EPC Contractor, Gulf Region' },
  { quote: '"The design review identified several critical issues that would have caused significant delays if discovered during construction. Outstanding technical judgment."', name: 'Project Director', company: 'Municipal Water Authority' },
  { quote: '"What sets EEE apart is the combination of deep technical knowledge and practical field experience. The recommendations work in reality, not just on paper."', name: 'Operations Manager', company: 'Industrial Facility, MENA' },
];

export default function Clients() {
  return (
    <main>
      <section className="page-header">
        <div className="page-header__overlay" />
        <div className="container page-header__inner">
          <span className="eyebrow eyebrow--light">Who We Serve</span>
          <h1 className="headline-xl">Clients & Industries</h1>
          <p className="body-lg body-white" style={{ maxWidth: 580, marginTop: 16 }}>
            EEE works with clients across the full spectrum of the water and wastewater sector — from municipal authorities to industrial operators to EPC contractors.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Industries Served</span>
            <div className="divider divider--center" />
            <h2 className="headline-lg">Who Works With EEE</h2>
          </div>
          <div className="grid-3">
            {industries.map((ind, i) => (
              <div key={i} className="industry-card">
                <div className="industry-card__num">0{i + 1}</div>
                <h3 className="headline-sm industry-card__title">{ind.title}</h3>
                <p className="body-md" style={{ marginBottom: 20 }}>{ind.desc}</p>
                <div className="industry-card__services">
                  {ind.services.map((s, j) => (
                    <span key={j} className="industry-service-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO PLACEHOLDERS */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">Client Logos</span>
            <div className="divider divider--center" />
            <h2 className="headline-lg">Trusted By</h2>
            <p className="body-md" style={{ marginTop: 12, maxWidth: 440, margin: '12px auto 0' }}>
              Client logos will be displayed here. We work with municipal authorities, EPC contractors, and industrial operators across the MENA region.
            </p>
          </div>
          <div className="logo-placeholder-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="logo-placeholder">
                <span>Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">What Clients Say</span>
            <div className="divider divider--center" />
            <h2 className="headline-lg">Client Feedback</h2>
          </div>
          <div className="grid-3">
            {testimonialPlaceholders.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-card__quote">"</div>
                <p className="testimonial-card__text">{t.quote.replace(/^"|"$/g, '')}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name[0]}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__company">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
