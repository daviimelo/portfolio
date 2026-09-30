interface SectionProps { t: Record<string, string>; }

export default function Skills({ t }: SectionProps) {
  return (
    <section className="section" id="skills">
      <p className="eyebrow reveal">{t['skills.eyebrow']}</p>
      <h2 className="section-title reveal">{t['skills.title']}</h2>
      <div className="skills-grid stagger-group">
        <div className="skill-group reveal" style={{ '--i': 0 } as React.CSSProperties}>
          <h3>{t['skills.g2']}</h3>
          <ul className="tag-list">
            <li>ReactJS</li><li>TypeScript</li><li>HTML/CSS</li><li>Java / Spring Boot</li><li>Python</li>
          </ul>
        </div>
        <div className="skill-group reveal" style={{ '--i': 1 } as React.CSSProperties}>
          <h3>{t['skills.g1']}</h3>
          <ul className="tag-list">
            <li>React Native</li><li>Expo</li><li>TypeScript</li><li>Axios</li>
          </ul>
        </div>
        <div className="skill-group reveal" style={{ '--i': 2 } as React.CSSProperties}>
          <h3>{t['skills.g3']}</h3>
          <ul className="tag-list">
            <li>PostgreSQL</li><li>MySQL</li><li>MongoDB</li>
          </ul>
        </div>
        <div className="skill-group reveal" style={{ '--i': 3 } as React.CSSProperties}>
          <h3>{t['skills.g4']} & {t['skills.g5']}</h3>
          <ul className="tag-list">
            <li>Clean Architecture</li><li>SOLID</li><li>Git / GitHub</li><li>Docker</li><li>Figma</li>
          </ul>
        </div>
      </div>
    </section>
  );
}