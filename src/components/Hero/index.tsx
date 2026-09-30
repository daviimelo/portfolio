import "./style.css"

interface SectionProps { t: Record<string, string>; }

export default function Hero({ t }: SectionProps) {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow hero-anim" style={{ '--d': 0 } as React.CSSProperties}>{t['hero.eyebrow']}</p>
        <h1 className="hero-name hero-anim" style={{ '--d': 1 } as React.CSSProperties}>Davi Melo<br />Nascimento</h1>
        <p className="hero-role hero-anim" style={{ '--d': 2 } as React.CSSProperties}>{t['hero.role']}</p>
        <p className="hero-intro hero-anim" style={{ '--d': 3 } as React.CSSProperties}>{t['hero.intro']}</p>
        <div className="hero-cta hero-anim" style={{ '--d': 4 } as React.CSSProperties}>
          <a href="#projetos" className="btn btn-primary">{t['hero.cta1']}</a>
          <a href="#contato" className="btn btn-ghost">{t['hero.cta2']}</a>
        </div>
      </div>
      <div className="hero-photo hero-anim" style={{ '--d': 2 } as React.CSSProperties}>
        <div className="hero-photo-frame">
          <img src={`${import.meta.env.BASE_URL}assets/davi.png`} alt="Davi Melo Nascimento" />
        </div>
      </div>
    </section>
  );
}