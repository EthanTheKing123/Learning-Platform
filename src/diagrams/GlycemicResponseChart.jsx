// Diagram: GlycemicResponseChart
// Line chart contrasting the blood-glucose response to a high-GI food (sharp
// spike, then an overshoot/crash) against a low-GI food (gradual rise,
// gradual decline) over a 2-hour window. Used by "Carbs, Simple/Complex,
// Glycemic Index" (3.1) in Applied Nutrition.
// Self-contained: only needs `accent` and `ink`. To add a new diagram, copy
// this file's shape, then register it in src/diagrams/index.js.
import React from "react";

export default function GlycemicResponseChart({ accent = "#D9791F", ink = "#17213A" }) {
  // Rough, illustrative shapes — not real patient data — for teaching the pattern.
  const highGI = "0,110 20,95 40,40 55,25 70,35 90,80 110,120 140,118 180,112 220,108";
  const lowGI = "0,110 40,95 80,80 120,72 160,70 200,74 220,80 260,88";
  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "16px 12px" }}>
      <svg viewBox="0 0 300 140" style={{ width: "100%", height: "auto" }}>
        <text x="0" y="12" fontSize="9" fill="#9C99A6">Blood glucose</text>
        <line x1="0" y1="110" x2="270" y2="110" stroke="#E3E1DA" strokeWidth="1" />
        <text x="0" y="122" fontSize="9" fill="#9C99A6">Baseline</text>
        <polyline points={highGI} fill="none" stroke="#D8465F" strokeWidth="2.5" strokeLinejoin="round" />
        <polyline points={lowGI} fill="none" stroke="#1C9450" strokeWidth="2.5" strokeLinejoin="round" strokeDasharray="0" />
        <text x="255" y="118" fontSize="9" fill="#B0AEC4">2h →</text>
      </svg>
      <div style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: 4 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11.5, fontWeight: 700, color: ink }}>
          <span style={{ width: 14, height: 3, background: "#D8465F", display: "inline-block", borderRadius: 2 }} /> High-GI food
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11.5, fontWeight: 700, color: ink }}>
          <span style={{ width: 14, height: 3, background: "#1C9450", display: "inline-block", borderRadius: 2 }} /> Low-GI food
        </span>
      </div>
      <p style={{ fontSize: 12, color: "#9C99A6", margin: "6px 0 0", textAlign: "center" }}>
        High-GI foods digest fast, spiking blood glucose sharply before often overshooting back down. Low-GI foods release glucose more gradually, avoiding the spike-and-crash pattern.
      </p>
    </div>
  );
}
