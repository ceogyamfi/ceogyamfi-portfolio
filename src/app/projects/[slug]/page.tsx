import { notFound } from "next/navigation";
import { renderMDX } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink, ArrowLeft } from "lucide-react";
import BrowserMockup from "@/components/projects/BrowserMockup";
import type { Metadata } from "next";
import { getProject, getAllProjects } from "@/data/projects";

export const revalidate = false;

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

function getVideoEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com") || u.hostname.includes("youtu.be")) {
      const id = u.searchParams.get("v") ?? u.pathname.split("/").pop();
      const t = u.searchParams.get("t");
      return `https://www.youtube.com/embed/${id}${t ? `?start=${t}` : ""}`;
    }
    if (u.hostname.includes("loom.com")) {
      const id = u.pathname.split("/").pop();
      return `https://www.loom.com/embed/${id}`;
    }
    return null;
  } catch {
    return null;
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const content = await renderMDX(project.body);
  const videoEmbedUrl = project.videoUrl ? getVideoEmbedUrl(project.videoUrl) : null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm mb-8 transition-colors hover:text-accent"
        style={{ color: "var(--muted-foreground)" }}
      >
        <ArrowLeft size={14} /> Back to projects
      </Link>

      <header className="mb-10">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs"
              style={{
                background: "var(--accent-dim)",
                color: "var(--accent)",
                border: "1px solid rgba(249,115,22,0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h1
          className="text-3xl sm:text-4xl font-800 tracking-tight mb-2"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
        >
          {project.title}
        </h1>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted-foreground)" }}>
          {project.description}
        </p>
        <div className="flex items-center gap-4 text-sm flex-wrap">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              style={{ color: "var(--muted-foreground)" }}>
              <ExternalLink size={14} /> Live site
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              style={{ color: "var(--muted-foreground)" }}>
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>{" "}
              Source code
            </a>
          )}
          <span className="ml-auto text-xs" style={{ color: "var(--muted-foreground)" }}>
            {formatDate(project.createdAt)}
          </span>
        </div>
      </header>

      {/* Video embed */}
      {videoEmbedUrl && (
        <div className="mb-10">
          <p className="text-xs font-medium mb-2 tracking-widest uppercase"
            style={{ color: "var(--muted-foreground)", letterSpacing: "0.1em" }}>
            Demo
          </p>
          <div className="rounded-xl overflow-hidden aspect-video glass">
            <iframe
              src={videoEmbedUrl}
              title={`${project.title} demo`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <div className="mb-10 space-y-4">
          <p className="text-xs font-medium mb-2 tracking-widest uppercase"
            style={{ color: "var(--muted-foreground)", letterSpacing: "0.1em" }}>
            Screenshots
          </p>
          {project.screenshots.map((src, i) => (
            <BrowserMockup
              key={i}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              url={project.liveUrl ?? undefined}
            />
          ))}
        </div>
      )}

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        {content}
      </article>
    </div>
  );
}
