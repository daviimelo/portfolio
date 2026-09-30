interface SectionProps { t: Record<string, string>; }

export default function About({ t }: SectionProps) {
  return (
    <section className="section" id="sobre">
      <p className="eyebrow reveal">{t['about.eyebrow']}</p>
      <h2 className="section-title reveal">{t['about.title']}</h2>
      <div className="about-grid">
        <p className="about-text reveal">{t['about.text']}</p>
        <dl className="fact-list reveal">
          <div className="fact">
            <dt>{t['about.fact1.label']}</dt>
            <dd>{t['about.fact1.value']}</dd>
          </div>
          <div className="fact">
            <dt>{t['about.fact2.label']}</dt>
            <dd>{t['about.fact2.value']}</dd>
          </div>
          <div className="fact">
            <dt>{t['about.fact3.label']}</dt>
            <dd>ReactJS · React Native · TypeScript</dd>
          </div>
          <div className="fact">
            <dt>{t['about.fact4.label']}</dt>
            <dd>{t['about.fact4.value']}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}