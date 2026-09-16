// Diagram: LocationCircles
// Three concentric circles — Local, National, Global — with real business
// examples at each scale (Nature of Business, Lesson 2.2).
import React from "react";

export default function LocationCircles({ accent = "#2E7FD1", ink = "#17213A" }) {
  const cx = 150, cy = 105;

  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "18px 12px" }}>
      <svg viewBox="0 0 460 210" style={{ width: "100%", height: "auto" }}>
        <circle cx={cx} cy={cy} r="95" fill={accent} opacity="0.12" />
        <circle cx={cx} cy={cy} r="65" fill={accent} opacity="0.22" />
        <circle cx={cx} cy={cy} r="35" fill={accent} opacity="0.85" />

        <text x={cx} y={cy - 4} fontSize="10.5" fontWeight="800" fill="#fff" textAnchor="middle">Local</text>
        <text x={cx} y={cy + 10} fontSize="8" fill="#fff" textAnchor="middle">the Bondi café</text>

        <text x={cx} y={cy - 50} fontSize="10.5" fontWeight="800" fill={ink} textAnchor="middle">National</text>
        <text x={cx} y={cy - 37} fontSize="8" fill={ink} textAnchor="middle">Boost Juice · JB Hi-Fi</text>

        <text x={cx} y={cy - 80} fontSize="10.5" fontWeight="800" fill={ink} textAnchor="middle">Global</text>
        <text x={cx} y={cy - 67} fontSize="8" fill={ink} textAnchor="middle">Nike · McDonald's · Atlassian</text>

        <foreignObject x="265" y="70" width="170" height="90">
          <div style={{ fontSize: 11, color: "#5A5870", fontWeight: 600, lineHeight: 1.5, fontFamily: "sans-serif" }}>
            E-commerce blurs the rings — a home Etsy store can be <strong>born global</strong> from day one.
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
