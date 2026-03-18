import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-32 text-center">
      <p
        className="text-8xl font-800 text-gradient mb-4"
        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
      >
        404
      </p>
      <p className="text-sm mb-8" style={{ color: "var(--muted-foreground)" }}>
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]"
        style={{
          background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
          color: "#fff",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
        }}
      >
        Go home
      </Link>
    </div>
  );
}
