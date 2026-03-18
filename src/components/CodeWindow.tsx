"use client";

import { useRef, useState } from "react";

export default function CodeWindow() {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0–1
    const y = (e.clientY - rect.top) / rect.height;  // 0–1
    const rotateX = (0.5 - y) * 18;   // tilt up/down ±9deg
    const rotateY = (x - 0.5) * 22;   // tilt left/right ±11deg
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`);
    setGlare({ x: x * 100, y: y * 100, opacity: 0.08 });
  }

  function handleMouseLeave() {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    setGlare((g) => ({ ...g, opacity: 0 }));
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.12s ease-out",
        transformStyle: "preserve-3d",
        cursor: "default",
        borderRadius: "1rem",
        position: "relative",
      }}
    >
      {/* Glare overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "1rem",
          pointerEvents: "none",
          zIndex: 2,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 70%)`,
          transition: "opacity 0.12s ease-out",
        }}
      />

      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "rgba(0,0,0,0.6)",
          border: "1px solid var(--glass-border)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid var(--glass-border)" }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full" style={{ background: "rgba(255,95,87,0.8)" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "rgba(255,188,46,0.8)" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "rgba(40,200,64,0.8)" }} />
          </div>
          <span className="text-xs" style={{ color: "var(--muted-foreground)", opacity: 0.5, fontFamily: "monospace" }}>
            Portfolio.ts
          </span>
          <div className="w-12" />
        </div>

        {/* Code */}
        <div className="px-5 py-6 font-mono leading-7" style={{ fontSize: "13px" }}>
          <Line><Kw>const</Kw> <Pl>developer</Pl> <Pu>=</Pu> <Pu>{"{"}</Pu></Line>
          <Line indent><Pr>name</Pr><Pu>:</Pu> <Str>&apos;Gyamfi Boakye&apos;</Str><Pu>,</Pu></Line>
          <Line indent><Pr>role</Pr><Pu>:</Pu> <Str>&apos;Data Analyst &amp; Builder&apos;</Str><Pu>,</Pu></Line>
          <Line indent><Pr>skills</Pr><Pu>:</Pu> <Pu>[</Pu><Str>&apos;Python&apos;</Str><Pu>,</Pu> <Str>&apos;SQL&apos;</Str><Pu>,</Pu> <Str>&apos;React&apos;</Str><Pu>,</Pu> <Str>&apos;AI&apos;</Str><Pu>],</Pu></Line>
          <Line indent><Pr>passionate</Pr><Pu>:</Pu> <Kw>true</Kw><Pu>,</Pu></Line>
          <Line indent><Pr>focus</Pr><Pu>:</Pu> <Str>&apos;Healthcare &amp; Entrepreneurship&apos;</Str><Pu>,</Pu></Line>
          <Line indent><Pr>motto</Pr><Pu>:</Pu> <Str>&quot;Build with Purpose&quot;</Str><Pu>,</Pu></Line>
          <Line><Pu>{"}"}</Pu><Pu>;</Pu></Line>
          <Line>&nbsp;</Line>
          <Line><Pl>developer</Pl><Pu>.</Pu><Fn>showcase</Fn><Pu>()</Pu><Pu>;</Pu></Line>
        </div>
      </div>
    </div>
  );
}

function Line({ children, indent }: { children: React.ReactNode; indent?: boolean }) {
  return (
    <div style={{ paddingLeft: indent ? "1.5rem" : "0" }}>
      {children}
    </div>
  );
}

function Kw({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "var(--accent)" }}>{children} </span>;
}
function Pl({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#e2d9c5" }}>{children}</span>;
}
function Pr({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#93c5fd" }}>{children}</span>;
}
function Str({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#86efac" }}>{children}</span>;
}
function Pu({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "rgba(255,255,255,0.4)" }}>{children}</span>;
}
function Fn({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#fde68a" }}>{children}</span>;
}
