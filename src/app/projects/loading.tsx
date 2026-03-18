export default function ProjectsLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="h-8 w-32 bg-muted rounded animate-pulse mb-2" />
      <div className="h-4 w-48 bg-muted rounded animate-pulse mb-8" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-36 bg-muted rounded-lg animate-pulse" />
        ))}
      </div>
    </div>
  );
}
