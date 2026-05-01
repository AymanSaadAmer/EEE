import { Link } from 'react-router-dom';
import { Layers, Settings, Wrench, Filter, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 'design-review',
    icon: <Layers size={32} />,
    title: 'Design Review',
    tagline: 'Catch costly errors before they reach the construction phase.',
    what: 'We conduct independent, systematic reviews of process and engineering designs for water and wastewater treatment systems. Our review covers process flow diagrams, equipment sizing, hydraulic profiles, chemical dosing systems, and compliance with applicable standards.',
    problems: [
      'Process designs based on incorrect or oversimplified assumptions',
      'Undersized or oversized treatment units and equipment',
      'Hydraulic bottlenecks not identified at design stage',
      'Non-compliance with local discharge standards or client specifications',
      'Missing or inadequate contingency provisions',
    ],
    value: 'Early identification of design deficiencies prevents costly re-engineering during construction or commissioning. An independent review provides your team and stakeholders with confidence in the design before capital is committed.',
  },
  {
    id: 'commissioning',
    icon: <Settings size={32} />,
    title: 'Commissioning & Start-up Support',
    tagline: 'From mechanical completion to stable operation — we are with you on site.',
    what: 'We provide hands-on technical support throughout the commissioning and start-up phases of new or upgraded treatment plants. This includes pre-commissioning verification, sequential system testing, biological seeding and process conditioning, performance testing, and punch list management.',
    problems: [
      'Poor planning of commissioning sequences leading to delays',
      'Difficulty achieving stable biological processes during start-up',
      'Equipment and instrumentation performance not matching design expectations',
      'Lack of experienced process engineers during critical commissioning milestones',
      'Insufficient documentation for knowledge transfer to O&M teams',
    ],
    value: 'Proper commissioning support reduces start-up delays, minimizes equipment damage, and ensures the plant reaches its design performance efficiently. We bring structured methodology and practical experience to every commissioning engagement.',
  },
  {
    id: 'troubleshooting',
    icon: <Wrench size={32} />,
    title: 'Troubleshooting & Optimization',
    tagline: 'Systematic diagnosis and lasting solutions for underperforming plants.',
    what: 'We apply a structured diagnostic approach to identify root causes of treatment performance problems — from effluent quality failures and biological instability to mechanical inefficiencies and energy overconsumption. We then develop and implement corrective action plans.',
    problems: [
      'Effluent quality consistently failing regulatory discharge limits',
      'Unstable biological processes (bulking, foaming, poor settling)',
      'High energy consumption relative to plant capacity',
      'Excessive chemical usage without commensurate performance benefit',
      'Operational teams unable to diagnose and resolve recurring issues',
    ],
    value: 'Systematic troubleshooting eliminates the trial-and-error approach and gets your plant performing reliably. We do not sell equipment — our only objective is restoring and improving plant performance.',
  },
  {
    id: 'sludge',
    icon: <Filter size={32} />,
    title: 'Sludge Dewatering Solutions',
    tagline: 'Maximize sludge cake dryness and minimize disposal costs.',
    what: 'We provide specialist consulting for sludge handling and dewatering operations, including equipment selection guidance (centrifuges, belt filter presses, screw presses), polymer optimization, sludge thickening evaluation, and operational improvement programs.',
    problems: [
      'Poor sludge cake dryness increasing disposal volumes and costs',
      'Excessive polymer consumption with insufficient return',
      'Dewatering equipment not achieving rated throughput',
      'Inconsistent sludge feed characteristics causing operational instability',
      'Uncertainty in selecting appropriate dewatering technology for new projects',
    ],
    value: 'Optimized sludge dewatering directly reduces operational costs and environmental impact. Even small improvements in cake dryness translate to significant savings in disposal and transport costs over the long term.',
  },
  {
    id: 'advisory',
    icon: <BookOpen size={32} />,
    title: 'Technical Advisory',
    tagline: 'Senior engineering judgment available when you need it most.',
    what: 'We serve as a technical resource for clients at any stage of a project or operation. This includes technology selection guidance, bid evaluation support, regulatory compliance strategy, due diligence reviews, expert witness support, and ongoing technical mentoring for operations teams.',
    problems: [
      'Lack of internal specialist expertise for critical technical decisions',
      'Need for independent review of contractor proposals or claims',
      'Uncertainty in technology selection for new or upgraded facilities',
      'Requirement for expert technical support in regulatory or contractual disputes',
      'Operations teams lacking structured technical development support',
    ],
    value: 'Access to senior technical expertise without the overhead of a permanent hire. We integrate with your team to provide the specific support you need, when you need it.',
  },
];

export default function Services() {
  return (
    <main>
      <section className="page-header">
        <div className="page-header__overlay" />
        <div className="container page-header__inner">
          <span className="eyebrow eyebrow--light">What We Offer</span>
          <h1 className="headline-xl">Engineering Services</h1>
          <p className="body-lg body-white" style={{ maxWidth: 580, marginTop: 16 }}>
            Specialist consulting and technical services across the full water and wastewater treatment lifecycle — from initial design through long-term operation.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`} className="services-nav-pill">{s.title}</a>
            ))}
          </div>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`section ${i % 2 !== 0 ? 'section-bg' : ''}`}>
          <div className="container">
            <div className="service-detail-grid">
              <div className="service-detail-left">
                <div className="service-detail-icon">{s.icon}</div>
                <span className="eyebrow">{`Service 0${i + 1}`}</span>
                <div className="divider" />
                <h2 className="headline-lg" style={{ marginBottom: 12 }}>{s.title}</h2>
                <p className="service-detail-tagline">{s.tagline}</p>

                <div className="service-detail-block">
                  <h4 className="service-detail-block__title">What We Do</h4>
                  <p className="body-md">{s.what}</p>
                </div>

                <div className="service-detail-block">
                  <h4 className="service-detail-block__title">Value to You</h4>
                  <p className="body-md">{s.value}</p>
                </div>

                <Link to="/contact" className="btn btn-primary" style={{ marginTop: 8 }}>
                  Discuss This Service <ArrowRight size={16} />
                </Link>
              </div>

              <div className="service-detail-right">
                <div className="problems-card">
                  <h4 className="problems-card__title">Problems We Solve</h4>
                  <ul className="problems-list">
                    {s.problems.map((p, j) => (
                      <li key={j} className="problems-list__item">
                        <CheckCircle size={16} className="problems-list__icon" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow eyebrow--light">Ready to Start?</span>
          <div className="divider divider--center" style={{ background: 'rgba(255,255,255,0.2)' }} />
          <h2 className="headline-lg headline-lg--white" style={{ marginBottom: 16 }}>
            Tell Us About Your Project
          </h2>
          <p className="body-lg body-white" style={{ maxWidth: 500, margin: '0 auto 36px' }}>
            Whether you have a specific challenge or are at an early stage of planning, we are happy to have a direct technical conversation.
          </p>
          <Link to="/contact" className="btn btn-green">Request a Consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
