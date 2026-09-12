// Diagram: MacroBreakdown
// Shows the Acceptable Macronutrient Distribution Range (AMDR) — the
// evidence-based percentage-of-calories band for carbs/protein/fat — as a
// single stacked bar, with micronutrients called out separately since they
// don't contribute calories. Used by "Macronutrients vs Micronutrients" (1.1)
// in Applied Nutrition.
// Self-contained: only needs `accent` and `ink`. To add a new diagram, copy
// this file's shape, then register it in src/diagrams/index.js.
import React from "react";

// AMDR ranges (% of total daily calories), shown as their midpoint for the bar.
const SEGMENTS = [
  { label: "Carbohydrate", range: "45–65%", mid: 55, color: "#2E7FD1" },
  { label: "Fat", range: "20–35%", mid: 27, color: "#D9791F" },
  { label: "Protein", range: "10–35%", mid: 18, color: "#1C9450" },
];

export default function MacroBreakdown({ accent = "#D9791F", ink = "#17213A" }) {
  const barWidth = 420;
  let x = 20;
  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "16px 12px" }}>
      <svg viewBox="0 0 460 150" style={{ width: "100%", height: "auto" }}>
        <text x="20" y="16" fontSize="10" fontWeight="700" fill="#9C99A6">SHARE OF DAILY CALORIES (AMDR)</text>
        {SEGMENTS.map((s) => {
          const w = (s.mid / 100) * barWidth;
          const seg = (
            <g key={s.label}>
              <rect x={x} y="26" width={w} height="34" fill={s.color} opacity="0.85" rx="4" />
              <text x={x + w / 2} y="47" fontSize="10" fontWeight="700" fill="#fff" textAnchor="middle">{s.label}</text>
            </g>
          );
          x += w;
          return seg;
        })}
        {SEGMENTS.map((s, i) => (
          <g key={s.label + "-legend"}>
            <rect x="20" y={72 + i * 22} width="12" height="12" fill={s.color} opacity="0.85" rx="3" />
            <text x="38" y={82 + i * 22} fontSize="11" fill={ink} fontWeight="700">{s.label}</text>
            <text x="150" y={82 + i * 22} fontSize="11" fill="#9C99A6">{s.range} of calories</text>
          </g>
        ))}
      </svg>
      <p style={{ fontSize: 12, color: "#9C99A6", margin: "4px 0 0", textAlign: "center" }}>
        These are the Acceptable Macronutrient Distribution Ranges — wide bands, not a single "correct" split. Micronutrients (vitamins/minerals) sit outside this chart entirely since they provide no calories.
      </p>
    </div>
  );
}
