import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations, Language } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Language>(
    (localStorage.getItem('portfolio-lang') as Language) || 'pt'
  );

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
  }, [lang]);

  const t = translations[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="noise-overlay" aria-hidden="true"></div>
      <Header lang={lang} setLang={setLang} t={t} />
      <main id="top">
        <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}