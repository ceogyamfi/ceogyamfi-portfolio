"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function InteractiveAvatar() {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)"
  );
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [glow, setGlow] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 16;
    const rotateY = (x - 0.5) * 20;
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`
    );
    setGlare({ x: x * 100, y: y * 100, opacity: 0.12 });
    setGlow(true);
  }

  function handleMouseLeave() {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
    setGlare((g) => ({ ...g, opacity: 0 }));
    setGlow(false);
  }

  return (
    <div className="relative flex justify-center lg:justify-end">
      {/* Ambient glow behind the card */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "-20px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)",
          opacity: glow ? 0.5 : 0.15,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Tilt card */}
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transition: "transform 0.12s ease-out",
          transformStyle: "preserve-3d",
          position: "relative",
          zIndex: 1,
          cursor: "default",
          borderRadius: "1.25rem",
          width: "280px",
          height: "340px",
        }}
      >
        {/* Glare overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "1.25rem",
            pointerEvents: "none",
            zIndex: 3,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 65%)`,
            transition: "background 0.08s ease-out",
          }}
        />

        {/* Image */}
        <div
          style={{
            borderRadius: "1.25rem",
            overflow: "hidden",
            width: "100%",
            height: "100%",
            border: "1px solid var(--glass-border)",
            boxShadow: glow
              ? "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px var(--glass-border), 0 0 40px var(--accent-glow)"
              : "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px var(--glass-border)",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <Image
            src="/me.JPEG"
            alt="Gyamfi Boakye"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
        </div>

        {/* Floating name badge */}
        <div
          style={{
            position: "absolute",
            bottom: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 4,
            background: "rgba(10,11,20,0.9)",
            backdropFilter: "blur(16px)",
            border: "1px solid var(--glass-border)",
            borderRadius: "9999px",
            padding: "6px 16px",
            whiteSpace: "nowrap",
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--accent)",
            fontFamily: "var(--font-display)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          Gyamfi Boakye
        </div>
      </div>
    </div>
  );
}
