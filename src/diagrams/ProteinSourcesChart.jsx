// Diagram: ProteinSourcesChart
// Compares which common protein sources supply all 9 essential amino acids
// (EAAs) on their own vs. which are typically low in one or more — and shows
// that combining two "incomplete" plant sources covers the gap. Used by
// "Complete vs Incomplete, Animal vs Plant Sources" (2.2) in Applied Nutrition.
// Self-contained: only needs `accent` and `ink`. To add a new diagram, copy
// this file's shape, then register it in src/diagrams/index.js.
import React from "react";

const SOURCES = [
  { label: "Eggs", complete: true },
  { label: "Chicken", complete: true },
  { label: "Soy / Tofu", complete: true },
  { label: "Rice (alone)", complete: false },
  { label: "Beans (alone)", complete: false },
  { label: "Rice + Beans", complete: true },
];

export default function ProteinSourcesChart({ accent = "#D9791F", ink = "#17213A" }) {
  const rowH = 30;
  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "16px 12px" }}>
      <svg viewBox={`0 0 460 ${SOURCES.length * rowH + 20}`} style={{ width: "100%", height: "auto" }}>
        {SOURCES.map((s, i) => {
          const y = i * rowH + 6;
          const color = s.complete ? "#1C9450" : "#D8465F";
          return (
            <g key={s.label}>
              <rect x="0" y={y} width="460" height={rowH - 6} rx="8" fill={color} opacity="0.12" />
              <text x="16" y={y + (rowH - 6) / 2 + 4} fontSize="12" fontWeight="700" fill={ink}>{s.label}</text>
              <text x="444" y={y + (rowH - 6) / 2 + 4} fontSize="11" fontWeight="800" fill={color} textAnchor="end">
                {s.complete ? "Complete" : "Incomplete alone"}
              </text>
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: 12, color: "#9C99A6", margin: "4px 0 0", textAlign: "center" }}>
        "Incomplete" doesn't mean low-quality — it means low in one or more of the 9 essential amino acids on its own. Pairing complementary plant sources (like rice + beans) covers the gap.
      </p>
    </div>
  );
}
