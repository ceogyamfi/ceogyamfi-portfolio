import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

const MAX_VISIBLE_TAGS = 4;

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const visibleTags = project.tags.slice(0, MAX_VISIBLE_TAGS);
  const extraCount = project.tags.length - MAX_VISIBLE_TAGS;

  return (
    <article
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
      style={{
        background: "rgba(0,0,0,0.55)",
        border: "1px solid var(--glass-border)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      }}
    >
      {/* Full-card nav link behind everything */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-[1]"
        aria-label={project.title}
      />

      {/* Screenshot preview */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "200px", background: "rgba(255,255,255,0.03)" }}
      >
        {/* Browser chrome bar */}
        <div
          className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2"
          style={{
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,87,0.7)" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,188,46,0.7)" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(40,200,64,0.7)" }} />
        </div>

        {project.imageUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(0,0,0,0) 60%)" }}
          >
            <span
              className="text-4xl font-800 tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                color: "rgba(249,115,22,0.2)",
              }}
            >
              {project.title[0]}
            </span>
          </div>
        )}

        {/* Gradient fade to card bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.55))" }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="text-lg mb-1.5 group-hover:text-accent transition-colors"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--foreground)" }}
        >
          {project.title}
        </h3>

        <p
          className="text-xs leading-relaxed mb-4 line-clamp-2 flex-1"
          style={{ color: "var(--muted-foreground)", fontStyle: "italic" }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "var(--muted-foreground)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {tag}
            </span>
          ))}
          {extraCount > 0 && (
            <span
              className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{ color: "var(--accent)" }}
            >
              +{extraCount}
            </span>
          )}
        </div>

        {/* Buttons — z-[2] to intercept clicks above card link */}
        <div className="relative z-[2] flex gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all hover:opacity-90"
              style={{
                background: "var(--foreground)",
                color: "var(--bg)",
                fontFamily: "var(--font-display)",
              }}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          )}

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all hover:opacity-90"
              style={{
                background: "rgba(255,255,255,0.07)",
                color: "var(--muted-foreground)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontFamily: "var(--font-display)",
              }}
            >
              <Code2 size={12} /> View Source
            </a>
          ) : !project.liveUrl ? (
            <span
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold"
              style={{
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.05)",
                fontFamily: "var(--font-display)",
                cursor: "default",
              }}
            >
              <Code2 size={12} /> Private Repo
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
