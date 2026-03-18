export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  tags: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  imageUrl: string | null;
  screenshots: string[];
  videoUrl: string | null;
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "briefd",
    title: "brief'd",
    description:
      "A full-stack AI-powered company research hub for job seekers — aggregating real-time news, culture signals, leadership profiles, and interview prep into a single dashboard.",
    body: `## Overview

brief'd is a company research tool built for job seekers who want to walk into interviews prepared. Instead of spending hours across LinkedIn, Glassdoor, Reddit, and Google News, brief'd pulls it all together in one place and uses Claude AI to synthesize it into clear, actionable intelligence.

## What it does

- Aggregates real-time data from RSS feeds, Reddit, LinkedIn, and Glassdoor
- Synthesizes everything via Claude Sonnet (Anthropic API) into a readable brief
- In-dashboard AI chat with full company context loaded
- PDF export via Puppeteer
- Rate limiting middleware to prevent abuse

## Stack

React · Node.js · Express · Claude AI (Anthropic) · Tailwind CSS · Railway · Vercel
`,
    tags: ["react", "node.js", "express", "ai", "anthropic", "tailwind"],
    liveUrl: null,
    repoUrl: "https://github.com/ceogyamfi/briefd",
    imageUrl: "/briefd.png",
    screenshots: [],
    videoUrl: null,
    featured: true,
    published: true,
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-01"),
  },
  {
    id: "2",
    slug: "aurae",
    title: "Aurae",
    description:
      "A full-stack e-commerce web app with product browsing, cart management, and end-to-end Stripe checkout — built with React, Supabase, and Framer Motion.",
    body: `## Overview

Aurae is a modern e-commerce experience built from scratch. The focus was on crafting a polished, animated storefront with a real payment flow and a solid backend.

## Features

- Product browsing with real-time inventory via Supabase
- Cart management with Zustand for global state
- End-to-end Stripe checkout with order confirmation
- Animated UI with Framer Motion and a particle background hero section
- Protected routes and an admin panel
- Supabase for database, auth, and real-time data

## Stack

React (TypeScript) · Supabase · Stripe · Tailwind CSS · Framer Motion · Zustand
`,
    tags: ["react", "typescript", "supabase", "stripe", "framer motion"],
    liveUrl: null,
    repoUrl: "https://github.com/ceogyamfi/aurae",
    imageUrl: "/aurae landin.png",
    screenshots: [],
    videoUrl: null,
    featured: true,
    published: true,
    createdAt: new Date("2025-06-01"),
    updatedAt: new Date("2025-06-01"),
  },
  {
    id: "3",
    slug: "alin",
    title: "ALIN",
    description:
      "A Flutter mobile app powered by Google Gemini API — an AI conversational assistant with a clean, minimal interface.",
    body: `## Overview

ALIN is a Flutter-based mobile AI assistant that integrates Google's Gemini API for natural language conversations. Built as an exploration of cross-platform mobile development and AI integration.

## Features

- Real-time AI chat powered by Gemini API
- Clean, minimal Flutter UI
- Cross-platform (iOS & Android)
- Stateful conversation management

## Stack

Flutter · Dart · Google Gemini API
`,
    tags: ["flutter", "dart", "gemini", "ai", "mobile"],
    liveUrl: null,
    repoUrl: "https://github.com/ceogyamfi/ALIN",
    imageUrl: null,
    screenshots: [],
    videoUrl: null,
    featured: true,
    published: true,
    createdAt: new Date("2025-01-01"),
    updatedAt: new Date("2025-01-01"),
  },
  {
    id: "4",
    slug: "oncall",
    title: "OnCall",
    description:
      "A healthcare staffing platform built to address nursing shortages — first-ever winners of the RIT Ramsey Family Innovation Award. Featured in RIT News.",
    body: `## Overview

OnCall was built during the RIT Business Accelerator Program to tackle a real problem: nursing shortages and the inefficiency of healthcare staffing. The platform connects healthcare facilities with available nursing staff in real time.

## Awards

Our team were the **first-ever winners** of the [RIT – Ramsey Family Innovation Award](https://sarahramseystrong.org/rit-ramsey-family-innovation-award/) — given to the team with the most promising and innovative venture in the cohort.

## Press

This project was featured in [RIT News](https://www.rit.edu/news/rit-students-build-platform-revolutionize-healthcare-staffing) for its potential impact on healthcare staffing.

## Cohort Demo Day

Watch our pitch and demo at the cohort showcase (our segment starts at 1:04:20).

## My Role

- Conducted market research to validate solutions for nursing shortages
- Led development of the landing page using React and Tailwind CSS
- Proposed and implemented enhancements based on user feedback

## Stack

React · Tailwind CSS
`,
    tags: ["react", "tailwind", "healthcare", "startup"],
    liveUrl: "https://oncall.health/OnCall",
    repoUrl: null,
    imageUrl: "/oncalllanding.png",
    screenshots: [],
    videoUrl: "https://www.youtube.com/watch?v=LbvdiUrGbg0&t=3860",
    featured: false,
    published: true,
    createdAt: new Date("2024-05-01"),
    updatedAt: new Date("2024-05-01"),
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.published);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.published && p.featured);
}

export function getAllProjects(): Project[] {
  return projects.filter((p) => p.published);
}

export function getAllTags(): string[] {
  return Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
}
