"use client";

import { useEffect, useState } from "react";

const words = ["Builder.", "Analyst.", "Innovator.", "Creator.", "Problem Solver."];

export default function CyclingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setVisible(false);
      timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2400);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <span
      style={{
        color: "var(--accent)",
        fontWeight: 800,
        display: "inline-block",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(6px)",
      }}
    >
      {words[index]}
    </span>
  );
}
