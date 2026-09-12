// Diagram: FastingTimelineChart
// Shows the broad metabolic shift across a fasting window: insulin/blood
// glucose declining from their post-meal peak while reliance on stored fat
// for fuel gradually increases — illustrative curves, not precise patient
// data. Used by "Fasting" (7.5) in Applied Nutrition.
// Self-contained: only needs `accent` and `ink`. To add a new diagram, copy
// this file's shape, then register it in src/diagrams/index.js.
import React from "react";

export default function FastingTimelineChart({ accent = "#D9791F", ink = "#17213A" }) {
  const insulin = "0,20 40,60 90,95 140,108 190,114 240,117";
  const fatUse = "0,120 40,110 90,90 140,65 190,40 240,22";
  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "16px 12px" }}>
      <svg viewBox="0 0 260 140" style={{ width: "100%", height: "auto" }}>
        <text x="0" y="12" fontSize="9" fill="#9C99A6">Relative level</text>
        <polyline points={insulin} fill="none" stroke="#D8465F" strokeWidth="2.5" strokeLinejoin="round" />
        <polyline points={fatUse} fill="none" stroke="#1C9450" strokeWidth="2.5" strokeLinejoin="round" />
        <text x="0" y="132" fontSize="9" fill="#9C99A6">Last meal</text>
        <text x="200" y="132" fontSize="9" fill="#9C99A6">8-16 hrs fasted</text>
      </svg>
      <div style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: 4 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11.5, fontWeight: 700, color: ink }}>
          <span style={{ width: 14, height: 3, background: "#D8465F", display: "inline-block", borderRadius: 2 }} /> Insulin / blood glucose
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11.5, fontWeight: 700, color: ink }}>
          <span style={{ width: 14, height: 3, background: "#1C9450", display: "inline-block", borderRadius: 2 }} /> Reliance on fat for fuel
        </span>
      </div>
      <p style={{ fontSize: 12, color: "#9C99A6", margin: "6px 0 0", textAlign: "center" }}>
        As hours pass without eating, insulin and blood glucose fall from their post-meal peak while the body increasingly shifts toward using stored fat for energy.
      </p>
    </div>
  );
}
