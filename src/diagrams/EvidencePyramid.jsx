// Diagram: EvidencePyramid
// Shows the hierarchy of evidence strength, weakest at the bottom (widest)
// to strongest at the top (narrowest) — used by the "Reading Nutrition
// Claims Critically" gate lesson in Applied Nutrition.
// Self-contained: only needs `accent` and `ink` from the course, same
// contract as every other diagram in this folder. To add a new diagram,
// copy this file's shape, then register it in src/diagrams/index.js.
import React from "react";

const LEVELS = [
  { label: "Anecdote / testimonial", width: 440 },
  { label: "Expert opinion", width: 380 },
  { label: "Observational study", width: 320 },
  { label: "Randomised controlled trial", width: 250 },
  { label: "Systematic review / meta-analysis", width: 170 },
];

export default function EvidencePyramid({ accent = "#D9791F", ink = "#17213A" }) {
  const rowHeight = 34;
  const gap = 6;
  const totalHeight = LEVELS.length * (rowHeight + gap);

  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "16px 12px" }}>
      <svg viewBox={`0 0 460 ${totalHeight + 14}`} style={{ width: "100%", height: "auto" }}>
        {LEVELS.map((level, i) => {
          const y = i * (rowHeight + gap);
          const x = (460 - level.width) / 2;
          // Strength increases toward the top — fade the fill from light to full accent.
          const strength = (i + 1) / LEVELS.length;
          const opacity = 0.25 + strength * 0.6;
          return (
            <g key={level.label}>
              <rect x={x} y={y} width={level.width} height={rowHeight} rx={8} fill={accent} opacity={opacity} />
              <text x="230" y={y + rowHeight / 2 + 4} fontSize="11" fontWeight="700" fill={i >= LEVELS.length - 2 ? "#fff" : ink} textAnchor="middle">
                {level.label}
              </text>
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: 12, color: "#9C99A6", margin: "4px 0 0", textAlign: "center" }}>
        Wider = weaker evidence, more common in marketing. Narrower = stronger evidence, harder (and more expensive) to produce.
      </p>
    </div>
  );
}
