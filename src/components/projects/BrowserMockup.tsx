interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
}

export default function BrowserMockup({ src, alt, url }: BrowserMockupProps) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(0,0,0,0.5)",
        border: "1px solid var(--glass-border)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid var(--glass-border)" }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ background: "rgba(255,95,87,0.7)" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "rgba(255,188,46,0.7)" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "rgba(40,200,64,0.7)" }} />
        </div>
        {/* URL bar */}
        {url && (
          <div
            className="flex-1 text-center text-xs rounded-md px-3 py-1 truncate max-w-xs mx-auto"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "var(--muted-foreground)",
              border: "1px solid var(--glass-border)",
            }}
          >
            {url}
          </div>
        )}
      </div>
      {/* Screenshot */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
    </div>
  );
}
