import "./style.css"

interface SectionProps { t: Record<string, string>; }

export default function Projects({ t }: SectionProps) {
  return (
    <section className="section" id="projetos">
      <p className="eyebrow reveal">{t['projects.eyebrow']}</p>
      <h2 className="section-title reveal">{t['projects.title']}</h2>
      <div className="project-grid stagger-group">
        <article className="project-card reveal" style={{ '--i': 0 } as React.CSSProperties}>
          <div className="project-card-head">
            <h3>{t['projects.p1.title']}</h3>
          </div>
          <p className="project-desc">{t['projects.p1.desc']}</p>
          <ul className="tag-list">
            <li>ReactJS</li><li>TypeScript</li><li>Bootstrap</li><li>Node.js</li><li>JWT</li>
          </ul>
          <a href="https://github.com/daviimelo/BoardGameVault" target="_blank" rel="noopener noreferrer" className="project-link">
            <span>{t['projects.cta']}</span><span className="arrow">→</span>
          </a>
        </article>

        <article className="project-card reveal" style={{ '--i': 1 } as React.CSSProperties}>
          <div className="project-card-head">
            <h3>{t['projects.p2.title']}</h3>
          </div>
          <p className="project-desc">{t['projects.p2.desc']}</p>
          <ul className="tag-list">
            <li>React Native</li><li>TypeScript</li><li>Node.js</li><li>PostgreSQL</li>
          </ul>
          <a href="https://github.com/daviimelo/Tasks" target="_blank" rel="noopener noreferrer" className="project-link">
            <span>{t['projects.cta']}</span><span className="arrow">→</span>
          </a>
        </article>

        <article className="project-card reveal" style={{ '--i': 2 } as React.CSSProperties}>
          <div className="project-card-head">
            <h3>{t['projects.p3.title']}</h3>
            <span className="project-badge">
              <span className="badge-icon">★</span>
              <span>{t['projects.p3.badge']}</span>
            </span>
          </div>
          <p className="project-desc">{t['projects.p3.desc']}</p>
          <ul className="tag-list">
            <li>Java 17</li><li>Swing</li><li>SQLite</li><li>Maven</li>
          </ul>
          <a href="https://github.com/daviimelo/Monitores" target="_blank" rel="noopener noreferrer" className="project-link">
            <span>{t['projects.cta']}</span><span className="arrow">→</span>
          </a>
        </article>
      </div>
    </section>
  );
}