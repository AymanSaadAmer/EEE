import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Target, Eye, Shield } from 'lucide-react';
import './About.css';

const values = [
  { icon: <Shield size={22} />, title: 'Integrity', desc: 'We provide honest, independent assessments. Our recommendations serve the project — not vendor relationships or commercial incentives.' },
  { icon: <Target size={22} />, title: 'Technical Depth', desc: 'Surface-level answers are not our product. We invest the time to understand root causes and deliver solutions with engineering rigor.' },
  { icon: <CheckCircle size={22} />, title: 'Realism', desc: 'Every recommendation we make is implementable in the real world. We work within operational, budgetary, and site constraints.' },
  { icon: <Eye size={22} />, title: 'Efficiency', desc: 'We focus on what delivers results. Our field experience allows us to quickly identify the interventions that create the most impact.' },
];

const timeline = [
  { year: '2008–2013', role: 'Process Engineer – EPC Projects', detail: 'Design and commissioning of municipal and industrial wastewater treatment plants across MENA.' },
  { year: '2013–2017', role: 'Senior Process Engineer', detail: 'Lead engineer on large-scale WWTP projects. Specialization in biological treatment, sludge handling, and troubleshooting.' },
  { year: '2017–2021', role: 'Lead Commissioning Engineer', detail: 'Responsible for commissioning strategy, performance testing, and handover for multiple EPC projects.' },
  { year: '2021–2024', role: 'Technical Director / Principal Consultant', detail: 'Technical leadership for design review, optimization programs, and client advisory across 10+ countries.' },
  { year: '2024', role: 'Founder – EEE', detail: 'Established Environmental Engineering Experts to deliver independent, field-based consulting to clients across the water sector.' },
];

export default function About() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header__overlay" />
        <div className="container page-header__inner">
          <span className="eyebrow eyebrow--light">Our Story</span>
          <h1 className="headline-xl">About EEE</h1>
          <p className="body-lg body-white" style={{ maxWidth: 560, marginTop: 16 }}>
            Environmental Engineering Experts was built on a simple conviction: the best engineering advice comes from engineers who have done the work.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-portrait">
              <div className="founder-portrait__img">
                <div className="founder-portrait__placeholder">
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'rgba(255,255,255,0.3)' }}>EEE</span>
                </div>
                <div className="founder-portrait__badge">
                  <span>Founder & Principal Engineer</span>
                </div>
              </div>
            </div>
            <div className="founder-text">
              <span className="eyebrow">The Founder</span>
              <div className="divider" />
              <h2 className="headline-lg" style={{ marginBottom: 24 }}>Engineering Experience That Matters</h2>
              <p className="body-lg" style={{ marginBottom: 18 }}>
                EEE was founded by a process engineer with over 15 years of hands-on experience in water and wastewater treatment — the majority of it on live projects, active construction sites, and operating treatment plants.
              </p>
              <p className="body-md" style={{ marginBottom: 18 }}>
                The founder's career spans EPC project delivery, plant commissioning, process optimization, and technical consulting across the Middle East and North Africa. With deep expertise in biological treatment processes, sludge management, and system performance improvement, EEE was created to offer clients direct access to senior engineering judgment — without layers of overhead.
              </p>
              <p className="body-md" style={{ marginBottom: 32 }}>
                The philosophy is straightforward: understand the problem completely, apply engineering principles rigorously, and deliver solutions that actually work in the field. No shortcuts. No generic templates. Just reliable, practical engineering.
              </p>
              <Link to="/contact" className="btn btn-primary">Get in Touch <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Experience</span>
            <div className="divider divider--center" />
            <h2 className="headline-lg">Career Timeline</h2>
            <p className="body-lg" style={{ maxWidth: 520, margin: '16px auto 0' }}>
              A career built on field experience, project delivery, and continuous technical development.
            </p>
          </div>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__year">{t.year}</div>
                <div className="timeline__connector">
                  <div className="timeline__dot" />
                  {i < timeline.length - 1 && <div className="timeline__line" />}
                </div>
                <div className="timeline__content">
                  <h4 className="headline-sm">{t.role}</h4>
                  <p className="body-md" style={{ marginTop: 6 }}>{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="section section-dark">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <span className="eyebrow eyebrow--light">Our Purpose</span>
              <h3 className="headline-md headline-md--white" style={{ marginBottom: 16 }}>Mission</h3>
              <p className="body-lg body-white">
                To deliver practical, efficient, and reliable engineering solutions that help our clients achieve treatment performance, operational reliability, and regulatory compliance — on time and within budget.
              </p>
            </div>
            <div className="mv-divider" />
            <div className="mv-card">
              <span className="eyebrow eyebrow--light">Where We're Going</span>
              <h3 className="headline-md headline-md--white" style={{ marginBottom: 16 }}>Vision</h3>
              <p className="body-lg body-white">
                To become the most trusted independent technical partner for water and wastewater engineering in the MENA region — known for integrity, expertise, and results that speak for themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">What We Stand For</span>
            <div className="divider divider--center" />
            <h2 className="headline-lg">Core Values</h2>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon">{v.icon}</div>
                <h4 className="headline-sm" style={{ margin: '14px 0 10px' }}>{v.title}</h4>
                <p className="body-md">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
