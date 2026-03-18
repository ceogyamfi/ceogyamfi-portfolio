import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Sample project
  await prisma.project.upsert({
    where: { slug: "portfolio-site" },
    update: {},
    create: {
      title: "Portfolio Site",
      slug: "portfolio-site",
      description: "My personal portfolio built with Next.js, Prisma, and PostgreSQL.",
      body: `## Overview\n\nThis is my personal portfolio site showcasing my work and writing.\n\n## Tech Stack\n\n- **Framework**: Next.js 14 App Router\n- **Database**: PostgreSQL (NeonDB) via Prisma\n- **Styling**: Tailwind CSS\n- **Auth**: NextAuth.js\n\n## Key Features\n\n- Projects showcase with MDX content\n- Blog with tag filtering\n- Contact form with email delivery\n- Admin CMS panel`,
      tags: ["nextjs", "typescript", "postgresql", "tailwindcss"],
      liveUrl: "https://ceogyamfi.com",
      repoUrl: "https://github.com/ceogyamfi/portfolio",
      featured: true,
      published: true,
    },
  });

  // Sample blog post
  await prisma.blogPost.upsert({
    where: { slug: "hello-world" },
    update: {},
    create: {
      title: "Hello World",
      slug: "hello-world",
      excerpt: "My first blog post — an introduction to who I am and what I'll be writing about.",
      body: `## Welcome\n\nHello! I'm Gyamfi, and this is my corner of the internet.\n\n## What to Expect\n\nI'll be writing about:\n\n- Software engineering\n- Building products\n- Lessons from shipping code\n\n## A Code Snippet\n\n\`\`\`typescript\nconst greet = (name: string) => \`Hello, \${name}!\`;\nconsole.log(greet("world"));\n\`\`\`\n\nStay tuned for more.`,
      tags: ["personal", "intro"],
      published: true,
      publishedAt: new Date(),
    },
  });

  // Aurae — luxury fragrance e-commerce
  await prisma.project.upsert({
    where: { slug: "aurae" },
    update: {},
    create: {
      title: "Aurae",
      slug: "aurae",
      description:
        "A luxury fragrance e-commerce platform. Curated scents without designer markups — powered by React, Supabase, and Stripe.",
      body: `## Overview\n\nAurae is a full-stack e-commerce SPA built around one philosophy: luxury within reach. Curated fragrances, zero middlemen.\n\n## Tech Stack\n\n- **Frontend**: React 18 + TypeScript + Vite\n- **Backend**: Supabase (PostgreSQL, Auth, Storage, Edge Functions)\n- **Payments**: Stripe PaymentIntent API\n- **Animations**: Framer Motion\n- **Styling**: Tailwind CSS\n\n## Key Features\n\n- Dynamic product catalog with scent family filtering\n- Product pages with top/middle/base note pyramids\n- Persistent cart with Zustand state management\n- Custom dark-themed Stripe checkout UI\n- Admin dashboard: product CRUD, order tracking, revenue analytics\n- Supabase Edge Functions (Deno) for secure server-side payment processing\n- Row Level Security policies for data protection\n\n## Design\n\nGlassmorphic design system with Framer Motion page transitions, staggered grid animations, and a scroll-morphing navbar.`,
      tags: ["react", "typescript", "supabase", "stripe", "framer-motion", "tailwindcss", "postgresql"],
      liveUrl: null,
      repoUrl: "https://github.com/ceogyamfi/aurae",
      featured: true,
      published: true,
    },
  });

  // brief'd — AI-powered company research hub
  await prisma.project.upsert({
    where: { slug: "briefd" },
    update: {},
    create: {
      title: "brief'd",
      slug: "briefd",
      description:
        "An AI-powered company research hub for job seekers. Search any company and get an intelligence dashboard with news, culture signals, leadership profiles, and interview prep.",
      body: `## Overview\n\nbrief'd helps job seekers walk into interviews prepared. Search any company and get a synthesized intelligence report in seconds.\n\n## Tech Stack\n\n- **Frontend**: React + Vite + Tailwind CSS\n- **Backend**: Node.js + Express (monorepo)\n- **AI**: Anthropic Claude API (Haiku for chat, Sonnet for analysis)\n- **Data**: Cheerio web scraping, RSS feed parsing, Axios\n- **Export**: Puppeteer PDF generation\n\n## Key Features\n\n- Multi-source data aggregation in parallel (web scraping, RSS, APIs)\n- AI-powered synthesis combining news, culture signals, and leadership data\n- Targeted interview prep questions generated per company\n- Stateful chat with company context preservation\n- PDF export for offline reference\n- Rate limiting middleware to prevent abuse\n\n## Architecture\n\nMonorepo with \`client/\` and \`server/\` workspaces. Backend orchestrates multiple data sources concurrently and feeds results to Claude for synthesis. Deployment-ready for Railway (backend) and Vercel (frontend).`,
      tags: ["react", "nodejs", "express", "anthropic", "typescript", "tailwindcss", "puppeteer"],
      liveUrl: null,
      repoUrl: null,
      featured: true,
      published: true,
    },
  });

  // ALIN — AI chatbot mobile app
  await prisma.project.upsert({
    where: { slug: "alin" },
    update: {},
    create: {
      title: "ALIN",
      slug: "alin",
      description:
        "Artificial Language Interface Network — a cross-platform AI chatbot mobile app built with Flutter and Google's Gemini API.",
      body: `## Overview\n\nALIN (Artificial Language Interface Network) is a cross-platform mobile application that delivers real-time AI-powered conversations using Google's Gemini API.\n\n## Tech Stack\n\n- **Framework**: Flutter + Dart\n- **AI**: Google Gemini API\n- **Target**: iOS + Android (cross-platform)\n\n## Key Features\n\n- Real-time AI-driven chat with Gemini\n- Responsive mobile-first UI\n- Modular architecture for future extensibility\n- Planned: Firebase/Supabase persistent chat history\n- Planned: User authentication and wellness features\n\n## Highlights\n\nDemonstrates practical integration of a production-grade LLM API into a mobile environment, with clean state management and a scalable component structure ready for feature expansion.`,
      tags: ["flutter", "dart", "gemini-api", "ai", "mobile", "cross-platform"],
      liveUrl: null,
      repoUrl: "https://github.com/ceogyamfi/ALIN",
      featured: false,
      published: true,
    },
  });

  console.log("✅ Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
