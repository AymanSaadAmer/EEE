import { Link } from 'react-router-dom';
import {
  Layers, Settings, Wrench, Filter, BookOpen, ArrowRight,
  CheckCircle, Award, Users, Zap, ChevronRight
} from 'lucide-react';
import './Home.css';

const services = [
  { icon: <Layers size={28} />, title: 'Design Review', desc: 'Independent review of engineering designs for water and wastewater treatment systems, identifying gaps before construction begins.' },
  { icon: <Settings size={28} />, title: 'Commissioning & Start-up', desc: 'Hands-on commissioning support for treatment plants, ensuring systems perform to design parameters from day one.' },
  { icon: <Wrench size={28} />, title: 'Troubleshooting & Optimization', desc: 'Root-cause analysis and practical solutions for underperforming treatment processes and operational challenges.' },
  { icon: <Filter size={28} />, title: 'Sludge Dewatering Solutions', desc: 'Specialized expertise in sludge handling, dewatering equipment selection, and operational optimization.' },
  { icon: <BookOpen size={28} />, title: 'Technical Advisory', desc: 'Strategic consulting across project lifecycle — from feasibility through operation — backed by deep field experience.' },
];

const stats = [
  { value: '15+', label: 'Years Field Experience' },
  { value: '30+', label: 'Projects Delivered' },
  { value: '10+', label: 'Countries of Operation' },
  { value: '100%', label: 'Client Satisfaction Focus' },
];

const whyUs = [
  { title: 'Real Field Experience', desc: 'Our expertise comes from the plant floor, not just the office. We have commissioned, troubleshot, and optimized treatment systems across diverse project types.' },
  { title: 'Engineering Realism', desc: 'We provide solutions that work in practice. No theoretical overengineering — just efficient, implementable answers to real engineering problems.' },
  { title: 'Independent Perspective', desc: 'As independent consultants, our only commitment is to engineering excellence and your project success. No equipment bias, no hidden agendas.' },
  { title: 'Regional Understanding', desc: 'Deep experience with projects in the Middle East and North Africa, understanding local constraints, standards, and operational realities.' },
];

const blogPreviews = [
  { tag: 'Process', title: 'Diagnosing Filamentous Bulking in Activated Sludge Systems', excerpt: 'Filamentous bacteria are among the most common causes of poor sludge settleability. Learn how to identify root causes and implement lasting solutions.', date: 'March 2025' },
  { tag: 'Commissioning', title: 'Five Critical Checks Before Starting Up a WWTP', excerpt: 'Commissioning failures are expensive and avoidable. Here are the systematic checks every plant startup should include.', date: 'February 2025' },
  { tag: 'Sludge', title: 'Optimizing Belt Filter Press Performance: A Practical Guide', excerpt: 'Consistent sludge cake dryness and polymer dosing efficiency are achievable with the right operational approach.', date: 'January 2025' },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg-grid" />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <div className="hero__badge fade-up">
            <span className="hero__badge-dot" />
            Water & Wastewater Engineering Specialists
          </div>
          <h1 className="headline-xl fade-up fade-up-1">
            Practical Engineering Solutions<br />
            for Water &amp; Wastewater<br />
            <em className="hero__italic">Challenges</em>
          </h1>
          <p className="body-lg body-white fade-up fade-up-2" style={{ maxWidth: 600, marginTop: 24 }}>
            EEE delivers hands-on technical consulting and engineering services for treatment plants, EPC contractors, and industrial facilities — grounded in real-world field expertise.
          </p>
          <div className="hero__actions fade-up fade-up-3">
            <Link to="/contact" className="btn btn-primary">Request Consultation <ArrowRight size={16} /></Link>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
          </div>
          <div className="hero__trust fade-up fade-up-4">
            <CheckCircle size={15} /><span>Independent & Unbiased</span>
            <CheckCircle size={15} /><span>EPC & O&M Experience</span>
            <CheckCircle size={15} /><span>Regional Field Expertise</span>
          </div>
        </div>
        <div className="hero__stats">
          <div className="container">
            <div className="hero__stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="hero__stat">
                  <div className="hero__stat-value">{s.value}</div>
                  <div className="hero__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">What We Do</span>
            <div className="divider divider--center" />
            <h2 className="headline-lg">Engineering Services</h2>
            <p className="body-lg" style={{ maxWidth: 560, margin: '16px auto 0' }}>
              From initial design review to long-term operational support, EEE provides specialist consulting across the full treatment plant lifecycle.
            </p>
          </div>
          <div className="grid-3">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="headline-sm" style={{ marginBottom: 12 }}>{s.title}</h3>
                <p className="body-md">{s.desc}</p>
                <Link to="/services" className="service-card__link">
                  Learn more <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link to="/services" className="btn btn-primary">View All Services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* WHY EEE */}
      <section className="section section-bg">
        <div className="container">
          <div className="why-grid">
            <div className="why-left">
              <span className="eyebrow">Why EEE</span>
              <div className="divider" />
              <h2 className="headline-lg">Engineering Authority Built in the Field</h2>
              <p className="body-lg" style={{ marginTop: 20, marginBottom: 32 }}>
                EEE was founded by a senior process engineer with extensive experience in EPC projects, plant commissioning, and performance optimization across the MENA region. Our approach is defined by one principle: solutions must work in the real world.
              </p>
              <Link to="/about" className="btn btn-primary">Meet Our Team <ArrowRight size={16} /></Link>
            </div>
            <div className="why-right">
              {whyUs.map((w, i) => (
                <div key={i} className="why-item">
                  <div className="why-item__num">0{i + 1}</div>
                  <div>
                    <h4 className="headline-sm" style={{ marginBottom: 6 }}>{w.title}</h4>
                    <p className="body-md">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">Sectors Served</span>
            <div className="divider divider--center" />
            <h2 className="headline-lg">Who We Work With</h2>
          </div>
          <div className="sectors-grid">
            {[
              { icon: <Users size={32} />, label: 'Municipal WWTP', desc: 'Local authorities and utilities managing wastewater collection and treatment systems.' },
              { icon: <Zap size={32} />, label: 'Industrial Facilities', desc: 'Manufacturers, food processors, and industrial operators with wastewater compliance needs.' },
              { icon: <Award size={32} />, label: 'EPC Contractors', desc: 'Engineering, procurement, and construction firms needing specialist process support.' },
              { icon: <BookOpen size={32} />, label: 'Engineering Firms', desc: 'Design consultancies and engineering offices seeking peer review or specialist input.' },
            ].map((s, i) => (
              <div key={i} className="sector-card">
                <div className="sector-card__icon">{s.icon}</div>
                <h4 className="headline-sm">{s.label}</h4>
                <p className="body-md" style={{ marginTop: 8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="container cta-banner__inner">
          <div>
            <h2 className="headline-lg headline-lg--white">Have a Plant Challenge?</h2>
            <p className="body-lg body-white" style={{ marginTop: 12, maxWidth: 480 }}>
              Talk to an engineer who has been on the plant floor. We provide direct, no-nonsense technical advice.
            </p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn-primary">Request Consultation <ArrowRight size={16} /></Link>
            <Link to="/projects" className="btn btn-outline">View Our Projects</Link>
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="eyebrow">Technical Knowledge</span>
              <div className="divider" />
              <h2 className="headline-lg">Latest Insights</h2>
            </div>
            <Link to="/insights" className="btn btn-primary">All Articles <ArrowRight size={16} /></Link>
          </div>
          <div className="grid-3">
            {blogPreviews.map((b, i) => (
              <div key={i} className="blog-preview-card">
                <div className="blog-preview-card__tag">{b.tag}</div>
                <h3 className="headline-sm blog-preview-card__title">{b.title}</h3>
                <p className="body-md blog-preview-card__excerpt">{b.excerpt}</p>
                <div className="blog-preview-card__footer">
                  <span className="blog-preview-card__date">{b.date}</span>
                  <Link to="/insights" className="blog-preview-card__link">Read more <ChevronRight size={13} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
