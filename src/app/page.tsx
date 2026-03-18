import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
import { ArrowRight, Zap, ExternalLink } from "lucide-react";
import CodeWindow from "@/components/CodeWindow";
import CyclingWord from "@/components/CyclingWord";
import { getFeaturedProjects } from "@/data/projects";

const pressArticles = [
  {
    outlet: "RIT News",
    title: "RIT students build platform to revolutionize healthcare staffing",
    url: "https://www.rit.edu/news/rit-students-build-platform-revolutionize-healthcare-staffing",
  },
  {
    outlet: "RIT AES Newsletter",
    title: "AES Summer Experience 2025",
    url: "https://www.rit.edu/aes/newsletter/september-2025/story/aes-summer-experience-2025",
  },
  {
    outlet: "Ramsey Family Innovation Award",
    title: "First-ever winners — RIT Business Accelerator Program",
    url: "https://sarahramseystrong.org/rit-ramsey-family-innovation-award/",
  },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

      {/* Hero */}
      <section className="mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs" style={{ color: "var(--accent)" }}>
              <Zap size={11} fill="currentColor" />
              <span style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}>
                Open to new opportunities
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl font-800 tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Think. Build.
              <br />
              <span className="text-gradient">Impact.</span>
            </h1>

            <p className="text-base max-w-md mb-10 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              I&apos;m Gyamfi — a <CyclingWord /> passionate about
              data, healthcare, and turning ideas into products that move the needle.
            </p>

            <div className="flex items-center gap-3 flex-wrap mb-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
                  color: "#fff",
                  boxShadow: "0 0 20px var(--accent-glow)",
                  fontFamily: "var(--font-display)",
                }}
              >
                View work <ArrowRight size={15} />
              </Link>
              <a
                href="https://drive.google.com/file/d/1tFHLtxUytjfKjjY-9QSYvTcX62Hd2Jm5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass glass-hover transition-all duration-200"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-display)" }}
              >
                Get Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ceogyamfi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl glass glass-hover transition-all duration-200 hover:scale-[1.08]"
                style={{ color: "var(--muted-foreground)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/gyamfiboakye/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl glass glass-hover transition-all duration-200 hover:scale-[1.08]"
                style={{ color: "var(--muted-foreground)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — code window */}
          <div className="hidden lg:block">
            <CodeWindow />
          </div>

        </div>
      </section>

      {/* Press */}
      <section className="mb-16">
        <h2
          className="text-sm font-600 tracking-widest uppercase mb-4"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--muted-foreground)", letterSpacing: "0.12em" }}
        >
          As seen in
        </h2>
        <div className="flex flex-wrap gap-3">
          {pressArticles.map(({ outlet, title, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-3 glass glass-hover rounded-xl px-4 py-3 transition-all duration-200 hover:scale-[1.01]"
              style={{ maxWidth: "420px" }}
            >
              <ExternalLink size={13} className="shrink-0 mt-0.5 group-hover:text-accent transition-colors" style={{ color: "var(--accent)" }} />
              <div>
                <p className="text-xs font-medium" style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}>{outlet}</p>
                <p className="text-xs leading-snug mt-0.5" style={{ color: "var(--muted-foreground)" }}>{title}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-sm font-600 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--muted-foreground)", letterSpacing: "0.12em" }}
            >
              Selected Work
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-xs transition-colors"
              style={{ color: "var(--accent)" }}
            >
              All projects <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
