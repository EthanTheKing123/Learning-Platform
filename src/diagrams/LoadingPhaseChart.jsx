// Diagram: LoadingPhaseChart
// A simple bar chart contrasting a creatine loading phase (days 1-5) against
// the lower ongoing maintenance dose (day 6+) — used by the "Should Maya
// Take Creatine?" case-study lesson in Applied Nutrition.
// Self-contained: only needs `accent` and `ink`. To add a new diagram, copy
// this file's shape, then register it in src/diagrams/index.js.
import React from "react";

const DAYS = [
  { label: "D1", grams: 20 },
  { label: "D2", grams: 20 },
  { label: "D3", grams: 20 },
  { label: "D4", grams: 20 },
  { label: "D5", grams: 20 },
  { label: "D6+", grams: 5 },
];

export default function LoadingPhaseChart({ accent = "#D9791F", ink = "#17213A" }) {
  const chartHeight = 130;
  const maxGrams = 20;
  const barWidth = 48;
  const gap = 20;

  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "16px 12px" }}>
      <svg viewBox={`0 0 460 ${chartHeight + 40}`} style={{ width: "100%", height: "auto" }}>
        {DAYS.map((d, i) => {
          const barHeight = (d.grams / maxGrams) * chartHeight;
          const x = 20 + i * (barWidth + gap);
          const y = chartHeight - barHeight + 10;
          const isMaintenance = i === DAYS.length - 1;
          return (
            <g key={d.label}>
              <rect x={x} y={y} width={barWidth} height={barHeight} rx={6} fill={isMaintenance ? "#9C99A6" : accent} />
              <text x={x + barWidth / 2} y={y - 6} fontSize="11" fontWeight="800" fill={ink} textAnchor="middle">{d.grams}g</text>
              <text x={x + barWidth / 2} y={chartHeight + 28} fontSize="10" fill="#9C99A6" textAnchor="middle">{d.label}</text>
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: 12, color: "#9C99A6", margin: "4px 0 0", textAlign: "center" }}>
        The loading phase (orange) saturates muscle stores faster; the maintenance dose (grey) sustains them. Skipping loading just reaches the same saturation point more slowly.
      </p>
    </div>
  );
}
