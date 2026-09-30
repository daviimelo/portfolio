interface SectionProps { t: Record<string, string>; }

export default function Footer({ t }: SectionProps) {
  return (
    <footer className="footer">
      <p>{t['footer.note']}</p>
      <p className="footer-year">© {new Date().getFullYear()} Davi Melo Nascimento</p>
    </footer>
  );
}