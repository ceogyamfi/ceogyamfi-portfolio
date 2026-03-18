import ProjectCard from "@/components/projects/ProjectCard";
import TagFilter from "@/components/projects/TagFilter";
import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllProjects, getAllTags } from "@/data/projects";

export const metadata: Metadata = { title: "Projects" };

interface ProjectsPageProps {
  searchParams: { tag?: string };
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const activeTag = searchParams.tag;
  const allTags = getAllTags();
  const projects = getAllProjects().filter((p) =>
    activeTag ? p.tags.includes(activeTag) : true
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-4xl sm:text-5xl font-800 tracking-tight mb-2"
        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
      >
        Projects
      </h1>
      <p className="text-sm mb-10" style={{ color: "var(--muted-foreground)" }}>
        Things I&apos;ve built.
      </p>

      {allTags.length > 0 && (
        <div className="mb-8">
          <Suspense>
            <TagFilter tags={allTags} activeTag={activeTag} />
          </Suspense>
        </div>
      )}

      {projects.length === 0 ? (
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          No projects found{activeTag ? ` for "${activeTag}"` : ""}.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
