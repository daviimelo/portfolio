import { useState } from 'react';
import { Language } from '../data/translations';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Record<string, string>;
}

export default function Header({ lang, setLang, t }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt');
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav" id="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">DM<span className="nav-logo-dot">.</span></a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          <a href="#sobre" onClick={closeMenu}>{t['nav.about']}</a>
          <a href="#experiencia" onClick={closeMenu}>{t['nav.experience']}</a>
          <a href="#projetos" onClick={closeMenu}>{t['nav.projects']}</a>
          <a href="#skills" onClick={closeMenu}>{t['nav.skills']}</a>
          <a href="#contato" onClick={closeMenu}>{t['nav.contact']}</a>
        </nav>
        <div className="nav-actions">
          <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
            <span className="lang-prompt">$</span> lang<span className="lang-eq">=</span>
            <span id="langValue">{lang}</span>
          </button>
          <button className="nav-burger" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}