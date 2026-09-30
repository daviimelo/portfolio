import "./style.css"

interface SectionProps { t: Record<string, string>; }

export default function Experience({ t }: SectionProps) {
  return (
    <section className="section" id="experiencia">
      <p className="eyebrow reveal">{t['exp.eyebrow']}</p>
      <h2 className="section-title reveal">{t['exp.title']}</h2>
      <ol className="timeline stagger-group">
        {[1, 2, 3].map((num, i) => (
          <li key={num} className="timeline-item reveal" style={{ '--i': i } as React.CSSProperties}>
            <span className="timeline-date">{t[`exp.item${num}.date`]}</span>
            <h3 className="timeline-role">{t[`exp.item${num}.role`]}</h3>
            <p className="timeline-place">{t[`exp.item${num}.place`]}</p>
            <p className="timeline-desc">{t[`exp.item${num}.desc`]}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}