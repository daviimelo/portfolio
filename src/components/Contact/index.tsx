import './style.css';

interface SectionProps { t: Record<string, string>; }

export default function Contact({ t }: SectionProps) {
  return (
    <section className="section section-contact" id="contato">
      <p className="eyebrow reveal">{t['contact.eyebrow']}</p>
      <h2 className="section-title reveal">{t['contact.title']}</h2>
      <p className="contact-text reveal">{t['contact.text']}</p>
      <div className="contact-links stagger-group">
        <a href="mailto:davimelonsmt@gmail.com" className="contact-card reveal" style={{ '--i': 0 } as React.CSSProperties}>
          <span className="contact-label">Email</span>
          <span className="contact-value">davimelonsmt@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/davimelodev/" target="_blank" rel="noopener noreferrer" className="contact-card reveal" style={{ '--i': 1 } as React.CSSProperties}>
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">/in/davimelodev</span>
        </a>
        <a href="https://github.com/daviimelo" target="_blank" rel="noopener noreferrer" className="contact-card reveal" style={{ '--i': 2 } as React.CSSProperties}>
          <span className="contact-label">GitHub</span>
          <span className="contact-value">@daviimelo</span>
        </a>
      </div>
    </section>
  );
}