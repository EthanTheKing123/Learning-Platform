// Diagram: RiskRewardLadder
// A diagonal staircase from low-risk/low-reward to high-risk/high-reward,
// making the point that entrepreneurs climb deliberately, with research
// as the climbing gear (Nature of Business, Lesson 1.4).
import React from "react";

const STEPS = [
  { label: "Savings account", sub: "Low risk, low reward", h: 40 },
  { label: "Small business", sub: "Moderate risk & reward", h: 90 },
  { label: "Start-up / new idea", sub: "High risk, high reward", h: 140 },
];

export default function RiskRewardLadder({ accent = "#2E7FD1", ink = "#17213A" }) {
  const stepW = 130, gap = 15, baseY = 190;

  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "18px 12px" }}>
      <svg viewBox="0 0 460 215" style={{ width: "100%", height: "auto" }}>
        {/* Axis labels */}
        <text x="8" y="12" fontSize="10" fontWeight="700" fill="#8A8FA0">Reward ↑</text>
        <text x="452" y="208" fontSize="10" fontWeight="700" fill="#8A8FA0" textAnchor="end">Risk →</text>

        {STEPS.map((s, i) => {
          const x = 25 + i * (stepW + gap);
          const y = baseY - s.h;
          const opacity = 0.45 + i * 0.275;
          return (
            <g key={s.label}>
              <rect x={x} y={y} width={stepW} height={s.h} rx="8" fill={accent} opacity={opacity} />
              <text x={x + stepW / 2} y={y - 8} fontSize="10.5" fontWeight="800" fill={ink} textAnchor="middle">{s.label}</text>
              <text x={x + stepW / 2} y={y + s.h / 2 + 4} fontSize="8.5" fill="#fff" textAnchor="middle" fontWeight="700">{s.sub}</text>
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: 12, color: "#9C99A6", margin: "6px 0 0", textAlign: "center" }}>
        Entrepreneurs climb this ladder deliberately — research is the climbing gear.
      </p>
    </div>
  );
}
