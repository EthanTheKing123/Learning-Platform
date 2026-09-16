// Diagram: TransformationSystem
// "Business as an Open System" — inputs flow through a transformation
// process into outputs, with a feedback loop back to inputs. The course's
// foundational diagram (Nature of Business, Lessons 1.1, 1.2).
// Self-contained: only needs `accent` and `ink`, same contract as every
// other diagram in this folder. To add a new diagram, copy this file's
// shape, then register it in src/diagrams/index.js.
import React from "react";

export default function TransformationSystem({ accent = "#2E7FD1", ink = "#17213A" }) {
  const boxY = 50;
  const boxH = 90;

  return (
    <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "18px 12px" }}>
      <svg viewBox="0 0 460 200" style={{ width: "100%", height: "auto" }}>
        {/* Inputs */}
        <rect x="10" y={boxY} width="120" height={boxH} rx="10" fill="#fff" stroke={accent} strokeWidth="2" />
        <text x="70" y={boxY + 20} fontSize="12" fontWeight="800" fill={accent} textAnchor="middle">INPUTS</text>
        {["Natural resources", "Labour", "Capital", "Enterprise"].map((t, i) => (
          <text key={t} x="70" y={boxY + 38 + i * 13} fontSize="9.5" fill={ink} textAnchor="middle">{t}</text>
        ))}

        {/* Arrow 1 */}
        <line x1="132" y1={boxY + boxH / 2} x2="163" y2={boxY + boxH / 2} stroke={ink} strokeWidth="2" markerEnd="url(#arrowTS)" />

        {/* Transformation */}
        <rect x="168" y={boxY} width="130" height={boxH} rx="10" fill={accent} />
        <text x="233" y={boxY + 20} fontSize="12" fontWeight="800" fill="#fff" textAnchor="middle">TRANSFORMATION</text>
        {["Production", "Processing", "Service delivery"].map((t, i) => (
          <text key={t} x="233" y={boxY + 40 + i * 13} fontSize="9.5" fill="#fff" textAnchor="middle">{t}</text>
        ))}

        {/* Arrow 2 */}
        <line x1="300" y1={boxY + boxH / 2} x2="331" y2={boxY + boxH / 2} stroke={ink} strokeWidth="2" markerEnd="url(#arrowTS)" />

        {/* Outputs */}
        <rect x="336" y={boxY} width="114" height={boxH} rx="10" fill="#fff" stroke={accent} strokeWidth="2" />
        <text x="393" y={boxY + 20} fontSize="12" fontWeight="800" fill={accent} textAnchor="middle">OUTPUTS</text>
        {["Goods", "Services", "+ by-products:", "jobs, waste, tax"].map((t, i) => (
          <text key={t} x="393" y={boxY + 38 + i * 13} fontSize="9.5" fill={ink} textAnchor="middle">{t}</text>
        ))}

        {/* Feedback loop */}
        <path d="M 393 145 C 393 180, 70 180, 70 145" fill="none" stroke="#B0AEC4" strokeWidth="2" strokeDasharray="4,3" markerEnd="url(#arrowFeedback)" />
        <text x="230" y="196" fontSize="10.5" fill="#8A8FA0" textAnchor="middle">feedback: profit reinvested, resources replenished</text>

        <defs>
          <marker id="arrowTS" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill={ink} />
          </marker>
          <marker id="arrowFeedback" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#B0AEC4" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
