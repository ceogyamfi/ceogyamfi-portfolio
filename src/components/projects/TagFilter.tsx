"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface TagFilterProps {
  tags: string[];
  activeTag?: string;
}

export default function TagFilter({ tags, activeTag }: TagFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleTag(tag: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (tag === activeTag) {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTag(tag)}
          aria-pressed={tag === activeTag}
          className="px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200"
          style={
            tag === activeTag
              ? {
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                  border: "1px solid rgba(129,140,248,0.3)",
                }
              : {
                  background: "var(--glass)",
                  color: "var(--muted-foreground)",
                  border: "1px solid var(--glass-border)",
                }
          }
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
