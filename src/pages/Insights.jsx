import { ChevronRight, Clock, Tag } from 'lucide-react';
import './Insights.css';

const articles = [
  {
    tag: 'Process Biology',
    title: 'Diagnosing Filamentous Bulking in Activated Sludge Systems',
    excerpt: 'Filamentous bacteria are among the most common causes of poor sludge settleability in activated sludge systems. This article walks through the diagnostic framework we use to identify specific filament types, understand their root causes, and implement lasting process corrections.',
    readTime: '8 min read',
    date: 'March 2025',
    featured: true,
    topics: ['Activated Sludge', 'SVI', 'Filamentous Bacteria', 'Biological Treatment'],
  },
  {
    tag: 'Commissioning',
    title: 'Five Critical Checks Before Starting Up a WWTP',
    excerpt: 'The commissioning phase is where design meets reality. Failures at this stage are expensive, damaging to equipment, and stressful for all parties. This article outlines the five systematic pre-commissioning checks that every new wastewater treatment plant start-up should include.',
    readTime: '6 min read',
    date: 'February 2025',
    featured: false,
    topics: ['WWTP Start-up', 'Commissioning Planning', 'Risk Management'],
  },
  {
    tag: 'Sludge Management',
    title: 'Optimizing Belt Filter Press Performance: A Practical Guide',
    excerpt: 'Consistent sludge cake dryness and efficient polymer consumption are achievable with the right approach to belt filter press operation. This guide covers feed sludge conditioning, belt tension and tracking, wash water management, and the key operational parameters to monitor.',
    readTime: '10 min read',
    date: 'January 2025',
    featured: false,
    topics: ['Belt Filter Press', 'Polymer Dosing', 'Cake Dryness', 'Dewatering'],
  },
  {
    tag: 'Process Design',
    title: 'Sequencing Batch Reactors vs Conventional AS: When to Choose Each',
    excerpt: 'SBR technology offers distinct advantages in certain applications, but it is frequently specified in contexts where conventional activated sludge would be more reliable and cost-effective. This article provides a clear comparative framework for technology selection.',
    readTime: '9 min read',
    date: 'December 2024',
    featured: false,
    topics: ['SBR', 'Activated Sludge', 'Technology Selection', 'Process Design'],
  },
  {
    tag: 'Operations',
    title: 'Understanding MLSS Control and Its Impact on Treatment Performance',
    excerpt: 'Mixed liquor suspended solids is one of the most important operational parameters in activated sludge systems, yet it is frequently mismanaged. This article explains the relationship between MLSS, sludge age, and treatment performance, and provides guidance on control strategy.',
    readTime: '7 min read',
    date: 'November 2024',
    featured: false,
    topics: ['MLSS', 'Sludge Age', 'SRT', 'Operational Control'],
  },
  {
    tag: 'Troubleshooting',
    title: 'Foam in Aeration Basins: Causes, Types, and Control Strategies',
    excerpt: 'Foam in activated sludge basins is a common operational problem with several distinct causes. Correctly identifying the foam type — whether from Nocardia, surfactants, young sludge, or other causes — is essential to selecting the right control strategy.',
    readTime: '8 min read',
    date: 'October 2024',
    featured: false,
    topics: ['Foaming', 'Nocardia', 'Aeration Basin', 'Troubleshooting'],
  },
];

const tags = ['All', 'Process Biology', 'Commissioning', 'Sludge Management', 'Process Design', 'Operations', 'Troubleshooting'];

export default function Insights() {
  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <main>
      <section className="page-header">
        <div className="page-header__overlay" />
        <div className="container page-header__inner">
          <span className="eyebrow eyebrow--light">Technical Knowledge</span>
          <h1 className="headline-xl">Insights & Articles</h1>
          <p className="body-lg body-white" style={{ maxWidth: 560, marginTop: 16 }}>
            Practical technical articles and case studies from our engineering practice. Written for process engineers, plant operators, and project teams.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* FEATURED */}
          {featured && (
            <div className="featured-article">
              <div className="featured-article__label">Featured Article</div>
              <div className="featured-article__inner">
                <div className="featured-article__content">
                  <span className="blog-tag">{featured.tag}</span>
                  <h2 className="headline-md" style={{ margin: '16px 0 16px' }}>{featured.title}</h2>
                  <p className="body-lg">{featured.excerpt}</p>
                  <div className="article-meta" style={{ marginTop: 24 }}>
                    <span><Clock size={13} />{featured.readTime}</span>
                    <span><Tag size={13} />{featured.date}</span>
                  </div>
                  <button className="btn btn-primary" style={{ marginTop: 28 }}>
                    Read Article <ChevronRight size={16} />
                  </button>
                </div>
                <div className="featured-article__visual">
                  <div className="featured-article__placeholder">
                    <div className="featured-article__topics">
                      {featured.topics.map((t, i) => (
                        <span key={i} className="topic-chip">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FILTERS */}
          <div className="insights-filters">
            {tags.map(t => (
              <button key={t} className={`filter-pill ${t === 'All' ? 'active' : ''}`}>{t}</button>
            ))}
          </div>

          {/* ARTICLES GRID */}
          <div className="articles-grid">
            {rest.map((a, i) => (
              <div key={i} className="article-card">
                <div className="article-card__header">
                  <span className="blog-tag">{a.tag}</span>
                </div>
                <h3 className="headline-sm article-card__title">{a.title}</h3>
                <p className="body-md article-card__excerpt">{a.excerpt}</p>
                <div className="article-card__topics">
                  {a.topics.slice(0, 2).map((t, j) => (
                    <span key={j} className="topic-chip-sm">{t}</span>
                  ))}
                </div>
                <div className="article-card__footer">
                  <div className="article-meta">
                    <span><Clock size={12} />{a.readTime}</span>
                    <span>{a.date}</span>
                  </div>
                  <button className="article-read-btn">Read <ChevronRight size={13} /></button>
                </div>
              </div>
            ))}
          </div>

          <div className="insights-coming-soon">
            <p>More technical articles are published regularly. Topics include process optimization, equipment selection, regulatory compliance, and operational management.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
