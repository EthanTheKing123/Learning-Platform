// Diagram: SizeBands
// The ABS business size classification, shown to scale as a stacked bar —
// the visual point IS the diagram: the SME mass vs the large-business
// sliver (Nature of Business, Lesson 2.1). Figures per ABS, June 2026 —
// keep these numbers identical to the smeFunnel diagram, its companion.
import React from "react";

const TOTAL = 2814778;
const BANDS = [
  { label: "Non-employing + Micro + Small", sub: "1–19 employees", count: 2741087, color: 1 },
  { label: "Medium", sub: "20–199 employees · 68,325", count: 68325, color: 2 },
  { label: "Large", sub: "200+ employees · 5,366", count: 5366, color: 3 },
];

export default function SizeBands({ accent = "#2E7FD1", ink = "#17213A" }) {
  const barWidth = 420;
  let cursor = 0;
  const shades = [accent, "#7FA8DB", "#C7D8ED"];

  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "18px 12px" }}>
      <svg viewBox="0 0 460 165" style={{ width: "100%", height: "auto" }}>
        {BANDS.map((b, i) => {
          const w = Math.max(6, (b.count / TOTAL) * barWidth);
          const x = 20 + cursor;
          cursor += w;
          return (
            <g key={b.label}>
              <rect x={x} y="20" width={w} height="50" fill={shades[i]} />
            </g>
          );
        })}
        <rect x="20" y="20" width={barWidth} height="50" fill="none" stroke={ink} strokeWidth="1.5" />

        {/* Labels below, since the medium/large slivers are too thin to label inline */}
        <text x="230" y="90" fontSize="11" fontWeight="800" fill={ink} textAnchor="middle">97% of Australian businesses are small</text>
        <text x="230" y="104" fontSize="11" fontWeight="800" fill={ink} textAnchor="middle">(fewer than 20 employees)</text>
        <g>
          <rect x="20" y="122" width="10" height="10" fill={shades[1]} />
          <text x="34" y="131" fontSize="9.5" fill={ink}>Medium: 68,325</text>
          <rect x="220" y="122" width="10" height="10" fill={shades[2]} />
          <text x="234" y="131" fontSize="9.5" fill={ink}>Large: 5,366</text>
        </g>
        <text x="230" y="152" fontSize="9" fill="#8A8FA0" textAnchor="middle">Total: 2,814,778 businesses (ABS, June 2026)</text>
      </svg>
    </div>
  );
}
