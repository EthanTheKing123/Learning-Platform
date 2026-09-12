// Diagram: CommonDeficienciesChart
// A qualitative "how often this comes up" chart for the nutrients most
// commonly discussed as shortfalls in developed-world diets — deliberately
// NOT precise epidemiological percentages (those vary hugely by population
// and diet), just a relative-concern visual to anchor the lesson. Used by
// "Common Deficiencies and Their Signs" (4.3) in Applied Nutrition.
// Self-contained: only needs `accent` and `ink`. To add a new diagram, copy
// this file's shape, then register it in src/diagrams/index.js.
import React from "react";

const ITEMS = [
  { label: "Iron", note: "especially menstruating women", level: 5 },
  { label: "Vitamin D", note: "low-sunlight regions/seasons", level: 5 },
  { label: "Vitamin B12", note: "vegans, older adults", level: 4 },
  { label: "Magnesium", note: "common shortfall in Western diets", level: 3 },
  { label: "Calcium", note: "low dairy/fortified-food intake", level: 3 },
  { label: "Iodine", note: "diets low in iodised salt/seafood", level: 2 },
];

export default function CommonDeficienciesChart({ accent = "#D9791F", ink = "#17213A" }) {
  const rowH = 32;
  const maxLevel = 5;
  const barMax = 250;
  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "16px 12px" }}>
      <svg viewBox={`0 0 460 ${ITEMS.length * rowH + 14}`} style={{ width: "100%", height: "auto" }}>
        {ITEMS.map((item, i) => {
          const y = i * rowH + 6;
          const w = (item.level / maxLevel) * barMax;
          return (
            <g key={item.label}>
              <text x="0" y={y + 8} fontSize="11" fontWeight="700" fill={ink}>{item.label}</text>
              <rect x="105" y={y} width={barMax} height="16" rx="8" fill="#E7E5EE" />
              <rect x="105" y={y} width={w} height="16" rx="8" fill={accent} opacity="0.85" />
              <text x={105 + barMax + 8} y={y + 12} fontSize="9.5" fill="#9C99A6">{item.note}</text>
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: 12, color: "#9C99A6", margin: "4px 0 0", textAlign: "center" }}>
        These bars show how often each nutrient comes up as a common shortfall in nutrition guidance — not exact statistics, since real rates vary hugely by individual diet and population.
      </p>
    </div>
  );
}
