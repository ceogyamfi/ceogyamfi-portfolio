"use client";

export default function ProjectError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
      <p className="text-muted-foreground">Failed to load project.</p>
      <p className="text-xs text-muted-foreground mt-2">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:opacity-80"
        style={{
          background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
          color: "#fff",
        }}
      >
        Try again
      </button>
    </div>
  );
}
