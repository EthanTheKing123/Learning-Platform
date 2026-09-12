// Diagram: GutDiversityDiagram
// A simple side-by-side illustrating the core concept in gut-health lessons:
// a more diverse mix of gut bacteria (many small, varied dots) vs. a less
// diverse gut dominated by fewer species (fewer, larger dots) — conceptual,
// not a claim about any specific health outcome. Used by "Gut Health & the
// Microbiome" (7.2) in Applied Nutrition.
// Self-contained: only needs `accent` and `ink`. To add a new diagram, copy
// this file's shape, then register it in src/diagrams/index.js.
import React from "react";

const PALETTE = ["#2E7FD1", "#1C9450", "#D9791F", "#D8465F", "#8B6FDE", "#E5C93A"];

// Deterministic pseudo-random layout so the diagram renders identically every time.
function seededDots(count, seed, maxR) {
  const dots = [];
  let s = seed;
  const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  for (let i = 0; i < count; i++) {
    dots.push({ cx: 10 + rand() * 180, cy: 10 + rand() * 100, r: 4 + rand() * maxR, color: PALETTE[i % PALETTE.length] });
  }
  return dots;
}

const diverse = seededDots(22, 7, 3);
const lessDiverse = seededDots(9, 13, 6);

export default function GutDiversityDiagram({ accent = "#D9791F", ink = "#17213A" }) {
  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "16px 12px" }}>
      <div style={{ display: "flex", gap: 16 }}>
        <div style={{ flex: 1 }}>
          <svg viewBox="0 0 200 120" style={{ width: "100%", height: "auto", background: "#fff", borderRadius: 12 }}>
            {diverse.map((d, i) => <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.color} opacity="0.8" />)}
          </svg>
          <p style={{ fontSize: 11.5, fontWeight: 800, color: ink, textAlign: "center", margin: "6px 0 0" }}>More diverse</p>
        </div>
        <div style={{ flex: 1 }}>
          <svg viewBox="0 0 200 120" style={{ width: "100%", height: "auto", background: "#fff", borderRadius: 12 }}>
            {lessDiverse.map((d, i) => <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.color} opacity="0.8" />)}
          </svg>
          <p style={{ fontSize: 11.5, fontWeight: 800, color: ink, textAlign: "center", margin: "6px 0 0" }}>Less diverse</p>
        </div>
      </div>
      <p style={{ fontSize: 12, color: "#9C99A6", margin: "8px 0 0", textAlign: "center" }}>
        Each dot represents a different bacterial species. A more diverse mix (left) is the pattern most gut-health research associates with a healthier microbiome, versus fewer species dominating (right).
      </p>
    </div>
  );
}
