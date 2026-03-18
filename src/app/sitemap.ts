import { MetadataRoute } from "next";
import { getAllProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
    { url: `${siteUrl}/projects`, lastModified: new Date() },
    { url: `${siteUrl}/contact`, lastModified: new Date() },
    ...getAllProjects().map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      lastModified: p.updatedAt,
    })),
  ];
}
