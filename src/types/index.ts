export type ActionResult<T = unknown> =
  | { success: true; data: T }
  | { success: false; error: string };

export interface ProjectSummary {
  id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  imageUrl: string | null;
  featured: boolean;
  published: boolean;
  createdAt: Date;
}

export interface BlogPostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  publishedAt: Date | null;
  createdAt: Date;
}

export interface MessageSummary {
  id: string;
  name: string;
  email: string;
  subject: string;
  body: string;
  read: boolean;
  createdAt: Date;
}
