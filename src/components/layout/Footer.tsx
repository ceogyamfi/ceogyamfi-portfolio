export default function Footer() {
  return (
    <footer className="mt-20 pb-6 px-4 sm:px-6">
      <div className="glass max-w-4xl mx-auto rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
          © {new Date().getFullYear()} ceogyamfi — Built with Next.js
        </p>
        <div className="flex items-center gap-5">
          {[
            { href: "https://github.com/ceogyamfi", label: "GitHub" },
            { href: "https://www.linkedin.com/in/gyamfiboakye/", label: "LinkedIn" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-foreground"
              style={{ color: "var(--muted-foreground)" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
