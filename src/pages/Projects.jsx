import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    type: 'Municipal WWTP',
    country: 'Saudi Arabia',
    capacity: '50,000 m³/day',
    title: 'Large-Scale Activated Sludge WWTP — Commissioning & Start-up',
    scope: 'Led commissioning of a major municipal wastewater treatment plant, including fine bubble aeration system verification, biological seeding strategy, sludge handling system start-up, and effluent quality achievement.',
    achievements: [
      'Achieved stable nitrification within 60% of projected timeline',
      'Resolved aeration system imbalance causing unequal distribution across basins',
      'Developed operational manual and trained O&M team of 12 operators',
      'Effluent quality met discharge standards ahead of performance testing period',
    ],
  },
  {
    type: 'Industrial WWTP',
    country: 'Egypt',
    capacity: '8,000 m³/day',
    title: 'Food Processing Facility — Troubleshooting & Process Optimization',
    scope: 'Diagnosed and resolved chronic biological treatment failures at an industrial wastewater plant treating high-strength organic effluent. Implemented process modifications and operational control improvements.',
    achievements: [
      'Identified excessive organic loading as root cause of repeated system collapse',
      'Designed and implemented equalization strategy to stabilize organic load',
      'Reduced effluent COD by 65% within 8 weeks of corrective actions',
      'Reduced polymer consumption by 30% through revised dosing protocol',
    ],
  },
  {
    type: 'Municipal WWTP',
    country: 'Jordan',
    capacity: '25,000 m³/day',
    title: 'WWTP Expansion — Design Review & Technical Advisory',
    scope: 'Independent design review for a capacity expansion project, including review of biological treatment upgrade, secondary clarifier design, and sludge treatment train modifications.',
    achievements: [
      'Identified undersizing of secondary clarifiers under peak flow conditions',
      'Flagged inadequate sludge recirculation pump capacity in original design',
      'Recommended process modifications that reduced capital cost by approximately 8%',
      'Provided review report that formed basis for contractor negotiation',
    ],
  },
  {
    type: 'Sludge Management',
    country: 'UAE',
    capacity: '180 tonnes DS/day',
    title: 'Sludge Dewatering Optimization — Centrifuge Performance Improvement',
    scope: 'Assessment and optimization of a centrifuge dewatering operation that was consistently underperforming on cake dryness targets, leading to high disposal costs.',
    achievements: [
      'Increased average cake dry solids content from 18% to 26%',
      'Reduced polymer consumption by 22% through optimized dosing protocol',
      'Identified mechanical issue with scroll speed differential causing performance loss',
      'Estimated annual disposal cost saving of USD 280,000',
    ],
  },
  {
    type: 'EPC Project Support',
    country: 'Kuwait',
    capacity: '30,000 m³/day',
    title: 'WWTP EPC Project — Process Engineering & Commissioning Support',
    scope: 'Embedded process engineering support for an EPC contractor during detailed design and commissioning phases of a new municipal WWTP. Responsibilities included P&ID review, equipment selection review, and commissioning oversight.',
    achievements: [
      'Completed P&ID review identifying 47 process-critical mark-ups',
      'Supported selection of MBR over conventional AS based on site footprint analysis',
      'Provided on-site commissioning presence during critical 12-week start-up period',
      'Plant achieved performance guarantee parameters within contract milestones',
    ],
  },
  {
    type: 'Industrial Facility',
    country: 'Morocco',
    capacity: '3,500 m³/day',
    title: 'Pharmaceutical Facility — Wastewater Treatment Feasibility & Advisory',
    scope: 'Technical advisory for the owner of a pharmaceutical manufacturing facility requiring a fit-for-purpose wastewater treatment solution that met stringent discharge requirements.',
    achievements: [
      'Developed treatment concept for complex pharmaceutical wastewater matrix',
      'Evaluated three technology options and provided comparative technical assessment',
      'Produced detailed technical specification for vendor RFQ process',
      'Supported owner through contractor bid evaluation and selection',
    ],
  },
];

export default function Projects() {
  return (
    <main>
      <section className="page-header">
        <div className="page-header__overlay" />
        <div className="container page-header__inner">
          <span className="eyebrow eyebrow--light">Track Record</span>
          <h1 className="headline-xl">Projects & Experience</h1>
          <p className="body-lg body-white" style={{ maxWidth: 580, marginTop: 16 }}>
            A selection of representative projects demonstrating the range and depth of EEE's engineering experience across the MENA region.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="projects-intro">
            <p className="body-lg">
              All projects listed below are representative of actual assignments. Client identities and specific locations are anonymized where confidentiality is required. The scope descriptions and results reflect real engineering work and outcomes.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-card__header">
                  <div className="project-card__meta">
                    <span className="project-card__type">{p.type}</span>
                    <span className="project-card__location">
                      <MapPin size={12} />{p.country}
                    </span>
                  </div>
                  <span className="project-card__capacity">{p.capacity}</span>
                </div>
                <h3 className="headline-sm project-card__title">{p.title}</h3>
                <p className="body-md project-card__scope">{p.scope}</p>
                <div className="project-card__achievements">
                  <h5 className="project-card__achievements-title">Key Achievements</h5>
                  <ul className="project-achievements-list">
                    {p.achievements.map((a, j) => (
                      <li key={j}>
                        <CheckCircle size={14} />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="headline-lg headline-lg--white" style={{ marginBottom: 16 }}>
            Have a Similar Challenge?
          </h2>
          <p className="body-lg body-white" style={{ maxWidth: 480, margin: '0 auto 36px' }}>
            Every project is unique. Let us understand your specific situation and explain how we can help.
          </p>
          <Link to="/contact" className="btn btn-primary">Start the Conversation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
