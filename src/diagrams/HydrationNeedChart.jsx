// Diagram: HydrationNeedChart
// Shows how a commonly cited baseline fluid-intake estimate (~30-35mL per kg
// of body weight) scales with body weight, then how activity/heat pushes
// needs higher still — framed as an estimate, not a precise prescription,
// since real needs vary by individual and conditions. Used by "How Much
// Water You Actually Need" (5.1) in Applied Nutrition.
// Self-contained: only needs `accent` and `ink`. To add a new diagram, copy
// this file's shape, then register it in src/diagrams/index.js.
import React from "react";

const WEIGHTS = [50, 65, 80, 95];

export default function HydrationNeedChart({ accent = "#D9791F", ink = "#17213A" }) {
  const chartHeight = 120;
  const maxL = 4.2; // upper bound for scaling (95kg x ~35ml/kg + activity buffer)
  const barW = 46;
  const gap = 40;
  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "16px 12px" }}>
      <svg viewBox={`0 0 460 ${chartHeight + 50}`} style={{ width: "100%", height: "auto" }}>
        {WEIGHTS.map((kg, i) => {
          const baseline = (kg * 0.033); // ~33ml/kg baseline estimate, in litres
          const active = baseline * 1.4; // rough allowance for an active/hot day
          const x = 30 + i * (barW * 2 + gap);
          const baseH = (baseline / maxL) * chartHeight;
          const activeH = (active / maxL) * chartHeight;
          return (
            <g key={kg}>
              <rect x={x} y={chartHeight - activeH + 20} width={barW} height={activeH} rx="6" fill={accent} opacity="0.3" />
              <rect x={x} y={chartHeight - baseH + 20} width={barW} height={baseH} rx="6" fill={accent} opacity="0.9" />
              <text x={x + barW / 2} y={chartHeight + 38} fontSize="10.5" fontWeight="700" fill={ink} textAnchor="middle">{kg}kg</text>
            </g>
          );
        })}
      </svg>
      <div style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: -6 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: ink }}>
          <span style={{ width: 12, height: 12, background: accent, opacity: 0.9, display: "inline-block", borderRadius: 3 }} /> Baseline (~33ml/kg)
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: ink }}>
          <span style={{ width: 12, height: 12, background: accent, opacity: 0.3, display: "inline-block", borderRadius: 3 }} /> Active / hot day
        </span>
      </div>
      <p style={{ fontSize: 12, color: "#9C99A6", margin: "6px 0 0", textAlign: "center" }}>
        A commonly cited estimate, not a precise prescription — actual needs shift with climate, sweat rate, and individual physiology.
      </p>
    </div>
  );
}
