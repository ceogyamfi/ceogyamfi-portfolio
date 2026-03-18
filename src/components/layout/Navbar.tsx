"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="glass max-w-4xl mx-auto rounded-2xl px-5 flex items-center justify-between"
        style={{ height: "52px" }}
      >
        <Link
          href="/"
          className="font-700 text-sm tracking-tight transition-colors hover:text-accent"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--foreground)" }}
        >
          ceogyamfi
        </Link>

        <ul className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                    active
                      ? "text-accent bg-[var(--accent-dim)]"
                      : "hover:bg-[var(--glass)] hover:text-foreground"
                  )}
                  style={{ color: active ? "var(--accent)" : "var(--muted-foreground)" }}
                >
                  {label}
                  {active && (
                    <span
                      className="absolute w-1 h-1 rounded-full left-1/2 -translate-x-1/2"
                      style={{ bottom: "4px", background: "var(--accent)" }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
