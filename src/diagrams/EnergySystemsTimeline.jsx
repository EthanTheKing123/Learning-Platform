// Diagram: EnergySystemsTimeline
// Shows the three muscle energy systems and roughly when each one dominates
// during effort — ATP-PCr (0-10s, explosive), anaerobic glycolysis (~10s-2min),
// aerobic (~2min+) — to anchor exactly where creatine's ATP-PCr boost matters.
// Used by "Creatine — The Most-Studied Supplement" (6.1) in Applied Nutrition.
// Self-contained: only needs `accent` and `ink`. To add a new diagram, copy
// this file's shape, then register it in src/diagrams/index.js.
import React from "react";

const SYSTEMS = [
  { label: "ATP-PCr", range: "0–10 sec", desc: "Explosive efforts — a heavy lift, a sprint start", width: 60, color: "#D8465F" },
  { label: "Anaerobic glycolysis", range: "~10 sec – 2 min", desc: "Sustained high intensity — a 400m sprint", width: 160, color: "#D9791F" },
  { label: "Aerobic", range: "2 min +", desc: "Endurance efforts — distance running, cycling", width: 240, color: "#1C9450" },
];

export default function EnergySystemsTimeline({ accent = "#D9791F", ink = "#17213A" }) {
  let x = 0;
  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "16px 12px" }}>
      <svg viewBox="0 0 460 60" style={{ width: "100%", height: "auto" }}>
        {SYSTEMS.map((s) => {
          const seg = (
            <g key={s.label}>
              <rect x={x} y="6" width={s.width} height="30" fill={s.color} opacity="0.85" />
              <text x={x + s.width / 2} y="25" fontSize="10" fontWeight="800" fill="#fff" textAnchor="middle">{s.label}</text>
            </g>
          );
          x += s.width;
          return seg;
        })}
        <text x="0" y="50" fontSize="9" fill="#9C99A6">Effort begins</text>
        <text x="440" y="50" fontSize="9" fill="#9C99A6" textAnchor="end">Sustained effort →</text>
      </svg>
      {SYSTEMS.map((s) => (
        <p key={s.label} style={{ fontSize: 11.5, margin: "6px 0 0", textAlign: "left" }}>
          <span style={{ fontWeight: 800, color: s.color }}>{s.label} ({s.range}):</span>{" "}
          <span style={{ color: "#5A5870" }}>{s.desc}</span>
        </p>
      ))}
      <p style={{ fontSize: 12, color: "#9C99A6", margin: "8px 0 0", textAlign: "center" }}>
        Creatine boosts the ATP-PCr system specifically — this is why its benefits show up most in short, maximal-effort work, not endurance pacing.
      </p>
    </div>
  );
}
