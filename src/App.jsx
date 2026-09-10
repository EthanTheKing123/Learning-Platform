import React, { useState, useEffect, useCallback, useRef } from "react";
import { Lock, Check, ChevronRight, Moon, ArrowLeft, X, Star, BookOpen, Sparkles, RotateCw, Home as HomeIcon, GraduationCap, Dumbbell, Brain } from "lucide-react";

// Maps the short string each course sets as `icon` (e.g. "brain") to the
// actual lucide component. Add a new line here whenever a new course wants
// an icon that isn't already in this list — the string in the course file
// never has to import anything itself.
const COURSE_ICONS = {
  moon: Moon,
  dumbbell: Dumbbell,
  brain: Brain,
};
function CourseIcon({ name, ...props }) {
  const Icon = COURSE_ICONS[name] || BookOpen; // falls back to BookOpen if a course forgets to set one
  return <Icon {...props} />;
}
import { COURSES } from "./courses/index.js";
import { loadProgress, saveProgress } from "./storage.js";
import { DIAGRAM_REGISTRY } from "./diagrams/index.js";

/* ============================================================
   SPACED REPETITION (Leitner-style "daily review" system)
   ============================================================
   Each completed lesson gets a review entry: { box, lastReviewed, nextDue }.
   Box 1-5, each with a growing gap — get the review question right and the
   lesson moves up a box (a longer wait next time); get it wrong and it
   drops back to Box 1 (due again tomorrow). A lesson only ENTERS this
   system once its whole module is complete (see completeLesson below),
   not the instant that one lesson finishes.
   This lives entirely in the existing progress object storage.js already
   saves to Firestore — storage.js itself needed zero changes, since
   loadProgress/saveProgress just persist whatever shape they're given. */
const REVIEW_BOX_DAYS = [1, 3, 7, 14, 30]; // index 0 = Box 1

function todayStr() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}
function addDays(dateStr, days) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}
function newReviewEntry() {
  const today = todayStr();
  return { box: 1, lastReviewed: today, nextDue: addDays(today, REVIEW_BOX_DAYS[0]) };
}
function advanceReviewEntry(entry, wasCorrect) {
  const today = todayStr();
  if (wasCorrect) {
    const nextBox = Math.min((entry?.box || 1) + 1, REVIEW_BOX_DAYS.length);
    return { box: nextBox, lastReviewed: today, nextDue: addDays(today, REVIEW_BOX_DAYS[nextBox - 1]) };
  }
  return { box: 1, lastReviewed: today, nextDue: addDays(today, REVIEW_BOX_DAYS[0]) };
}
// Every due lesson contributes ONE question to the single combined daily
// review quiz. Which question is picked shifts by the day (not random on
// every render), so revisiting a lesson tomorrow surfaces a different
// question from its existing quiz instead of the exact same one each time.
function pickReviewQuestion(lesson) {
  const quiz = lesson.quiz || [];
  if (quiz.length === 0) return null;
  const dayIndex = Math.floor(Date.now() / 86400000);
  return quiz[(dayIndex + lesson.id.length) % quiz.length];
}
function getDueReviews(courses, progressMap) {
  const today = todayStr();
  const due = [];
  courses.forEach((course) => {
    const review = progressMap[course.id]?.review || {};
    course.modules.forEach((module) => {
      module.lessons.forEach((lesson) => {
        const entry = review[lesson.id];
        if (entry && entry.nextDue <= today) due.push({ course, module, lesson });
      });
    });
  });
  return due;
}

// Picks readable text (white vs. navy) based on the background colour's brightness —
// used anywhere a dynamic/vibrant background hosts text or an icon.
function textOn(hex) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16), g = parseInt(c.substring(2, 4), 16), b = parseInt(c.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.62 ? "#17213A" : "#FFFFFF";
}

// Darkens a hex colour by a percentage — used for the chunky "3D" bottom-shadow on buttons.
function darken(hex, amount = 0.18) {
  const c = hex.replace("#", "");
  const r = Math.max(0, Math.round(parseInt(c.substring(0, 2), 16) * (1 - amount)));
  const g = Math.max(0, Math.round(parseInt(c.substring(2, 4), 16) * (1 - amount)));
  const b = Math.max(0, Math.round(parseInt(c.substring(4, 6), 16) * (1 - amount)));
  return `rgb(${r}, ${g}, ${b})`;
}

const FONT_DISPLAY = '"Baloo 2", "Nunito", ui-rounded, "Segoe UI", sans-serif';
const FONT_BODY = '"Nunito", ui-rounded, "Segoe UI", sans-serif';

const GLOBAL_STYLE = `
  .lp-btn { transition: transform 0.12s ease, box-shadow 0.12s ease; }
  .lp-btn:hover:not(:disabled) { transform: translateY(-2px); }
  .lp-btn:active:not(:disabled) { transform: translateY(2px) !important; box-shadow: 0 1px 0 rgba(0,0,0,0.15) !important; }
  .lp-node:hover:not(:disabled) { transform: scale(1.08) !important; }
  .lp-node.current { animation: lp-pulse 1.8s ease-in-out infinite; }
  .lp-card:hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(23,33,58,0.08); }
  .lp-card { transition: transform 0.15s ease, box-shadow 0.15s ease; }
  .lp-opt:hover:not(:disabled) { border-color: #C7C4B9; }
  @keyframes lp-pulse { 0%, 100% { box-shadow: 0 4px 0 rgba(0,0,0,0.15), 0 0 0 0 rgba(46,127,209,0.35); } 50% { box-shadow: 0 4px 0 rgba(0,0,0,0.15), 0 0 0 10px rgba(46,127,209,0); } }
  @keyframes lp-pop { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
  @keyframes lp-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
  .lp-pop { animation: lp-pop 0.22s ease; }
  .lp-float { animation: lp-float 4s ease-in-out infinite; }

  .lp-shell-wide { max-width: 640px; margin: 0 auto; padding: 28px 20px 70px; width: 100%; }
  .lp-shell-narrow { max-width: 640px; margin: 0 auto; padding: 20px 20px 80px; width: 100%; }
  @media (min-width: 860px) {
    .lp-shell-wide { max-width: 900px; padding: 44px 36px 90px; }
    .lp-shell-narrow { max-width: 720px; padding: 32px 24px 90px; }
  }
  @media (min-width: 1200px) {
    .lp-shell-wide { max-width: 1040px; }
    .lp-shell-narrow { max-width: 760px; }
  }
  /* Capped independently of the shell so a 1–2 item grid never balloons
     into oversized cards on a wide laptop screen — extra room becomes
     side margin instead, which is what makes it feel intentional rather
     than stretched. */
  .lp-grid { display: grid; grid-template-columns: 1fr; gap: 16px; max-width: 780px; margin: 0 auto; }
  @media (min-width: 860px) {
    .lp-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
  }
`;

/* ============================================================
   TEXT RENDERING — tiny **bold** parser so content data can stay
   plain strings instead of JSX.
   ============================================================ */

function Rich({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} style={{ fontWeight: 800 }}>{part.slice(2, -2)}</strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

function Block({ block, accent, ink }) {
  if (block.type === "h") {
    return <h3 style={{ fontSize: 19, fontWeight: 800, color: ink, margin: "28px 0 10px", fontFamily: FONT_DISPLAY }}>{block.text}</h3>;
  }
  if (block.type === "p") {
    return <p style={{ fontSize: 16, lineHeight: 1.7, color: "#2E3646", margin: "0 0 16px" }}><Rich text={block.text} /></p>;
  }
  if (block.type === "list") {
    return (
      <ul style={{ margin: "0 0 16px", paddingLeft: 20 }}>
        {block.items.map((it, i) => (
          <li key={i} style={{ fontSize: 16, lineHeight: 1.7, color: "#2E3646", marginBottom: 8 }}><Rich text={it} /></li>
        ))}
      </ul>
    );
  }
  if (block.type === "callout") {
    return (
      <div style={{ background: "#FFF7E0", borderLeft: `4px solid ${accent}`, padding: "14px 16px", borderRadius: 10, margin: "8px 0 20px" }}>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "#3A3220", margin: 0 }}><Rich text={block.text} /></p>
      </div>
    );
  }
  return null;
}

/* ============================================================
   TERM FLASHCARD — tap to flip
   ============================================================ */

function TermCard({ term, definition, accent, ink }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className="lp-btn"
      style={{
        display: "block", width: "100%", textAlign: "left", cursor: "pointer", margin: "0 0 12px",
        background: flipped ? "#FFF7E0" : "#F6F7FB", border: `2px solid ${flipped ? accent : "#EAEAF2"}`,
        borderRadius: 14, padding: "14px 16px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 14, fontWeight: 800, color: ink, margin: 0, textTransform: flipped ? "none" : "uppercase", letterSpacing: flipped ? 0 : 0.3 }}>
          {flipped ? "Definition" : term}
        </p>
        <RotateCw size={14} color="#B0AEC4" />
      </div>
      {flipped && <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#3A3220", margin: "8px 0 0" }}>{definition}</p>}
      {!flipped && <p style={{ fontSize: 12, color: "#ADAAC0", margin: "6px 0 0" }}>Tap to reveal definition</p>}
    </button>
  );
}

/* ============================================================
   DIAGRAMS — small built-in SVGs, referenced by "kind"
   ============================================================ */

function Diagram({ kind, accent, ink }) {
  const Registered = DIAGRAM_REGISTRY[kind];
  if (Registered) return <Registered accent={accent} ink={ink} />;
  if (kind === "hypnogram") {
    const points = "0,20 20,20 40,90 60,90 80,140 110,140 130,90 150,60 170,20 200,20 220,90 240,120 270,80 290,40 310,20 340,20 360,80 380,60 410,10 440,10";
    return (
      <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "16px 12px" }}>
        <svg viewBox="0 0 460 170" style={{ width: "100%", height: "auto" }}>
          <text x="0" y="14" fontSize="9" fill="#9C99A6">Awake</text>
          <text x="0" y="34" fontSize="9" fill="#9C99A6">REM</text>
          <text x="0" y="64" fontSize="9" fill="#9C99A6">N1</text>
          <text x="0" y="94" fontSize="9" fill="#9C99A6">N2</text>
          <text x="0" y="144" fontSize="9" fill="#9C99A6">N3</text>
          <polyline points={points} fill="none" stroke={accent} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          <text x="230" y="165" fontSize="10" fill="#B0AEC4" textAnchor="middle">Time across the night →</text>
        </svg>
        <p style={{ fontSize: 12, color: "#9C99A6", margin: "4px 0 0", textAlign: "center" }}>Note the deep dips (N3) early, and how the line lifts closer to REM/light sleep later on.</p>
      </div>
    );
  }
  if (kind === "cycle") {
    return (
      <div style={{ margin: "12px 0 22px", background: "#F6F7FB", borderRadius: 16, padding: "16px 12px" }}>
        <svg viewBox="0 0 460 130" style={{ width: "100%", height: "auto" }}>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <path d={`M ${i * 115 + 10} 30 Q ${i * 115 + 40} 110 ${i * 115 + 65} 100 T ${i * 115 + 115} 30`} fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
              <text x={i * 115 + 55} y="122" fontSize="9" fill="#9C99A6" textAnchor="middle">~90 min</text>
            </g>
          ))}
        </svg>
        <p style={{ fontSize: 12, color: "#9C99A6", margin: "4px 0 0", textAlign: "center" }}>Four repeating ~90-minute cycles across a night — each dip is a full pass through NREM into REM.</p>
      </div>
    );
  }
  return null;
}

/* ============================================================
   QUESTION TYPES
   Every quiz/check item can set `type` to change how it's answered:
     (none) / "mcq"  — single choice, tap one option           { q, options, correct, explain? }
     "truefalse"     — tap True or False                       { q, correct: true|false, explain? }
     "multi"         — select ALL that apply, then Check        { q, options, correct: [i, j], explain? }
     "type"          — type the answer in a text box            { q, accepted: ["word", "alt word"], explain? }
   ============================================================ */

function optionVisual(state) {
  // state: "idle" | "selected" | "correct" | "incorrect" | "muted"
  if (state === "correct") return { border: "#1C9450", bg: "#EAFAF0", color: "#166A3C" };
  if (state === "incorrect") return { border: "#D8465F", bg: "#FCEAEC", color: "#A23347" };
  if (state === "selected") return { border: "#2E7FD1", bg: "#EEF6FD", color: "#17213A" };
  if (state === "muted") return { border: "#EAEAF2", bg: "#fff", color: "#B0AEC4" };
  return { border: "#EAEAF2", bg: "#fff", color: "#2E3646" };
}

function OptionButton({ label, state, disabled, onClick, icon }) {
  const v = optionVisual(state);
  return (
    <button
      className="lp-opt"
      disabled={disabled}
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", textAlign: "left",
        padding: "14px 16px", marginBottom: 10, borderRadius: 14, border: `2px solid ${v.border}`, background: v.bg,
        cursor: disabled ? "default" : "pointer", fontSize: 15.5, color: v.color, fontWeight: 600,
      }}
    >
      <span>{label}</span>
      {icon}
    </button>
  );
}

function CheckButton({ disabled, onClick, label = "Check" }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="lp-btn"
      style={{
        width: "100%", padding: "15px 0", borderRadius: 14, border: "none", marginTop: 8,
        background: disabled ? "#E7E5EE" : "#17213A", color: "#fff", fontWeight: 800, fontSize: 16,
        cursor: disabled ? "default" : "pointer", fontFamily: FONT_DISPLAY,
        boxShadow: disabled ? "none" : `0 4px 0 ${darken("#17213A", 0.35)}`,
      }}
    >
      {label}
    </button>
  );
}

function FeedbackAndContinue({ isCorrect, explain, onContinue }) {
  return (
    <div className="lp-pop">
      {explain && (
        <div style={{ background: isCorrect ? "#EAFAF0" : "#FFF7E0", borderRadius: 12, padding: "12px 14px", marginTop: 4, marginBottom: 12 }}>
          <p style={{ fontSize: 14, color: isCorrect ? "#166A3C" : "#8A6A00", margin: 0, fontWeight: 600 }}>{isCorrect ? "Nice, that's right! " : "Not quite — "}{explain}</p>
        </div>
      )}
      <button
        onClick={onContinue}
        className="lp-btn"
        style={{ width: "100%", padding: "15px 0", borderRadius: 14, border: "none", background: "#17213A", color: "#fff", fontWeight: 800, fontSize: 16, cursor: "pointer", fontFamily: FONT_DISPLAY, boxShadow: `0 4px 0 ${darken("#17213A", 0.35)}` }}
      >
        Continue
      </button>
    </div>
  );
}

function SingleSelectQuestion({ data, onAnswered }) {
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const isCorrect = selected === data.correct;
  return (
    <div>
      <p style={{ fontSize: 19, fontWeight: 800, color: "#17213A", lineHeight: 1.4, marginBottom: 18, fontFamily: FONT_DISPLAY }}>{data.q}</p>
      {data.options.map((opt, oi) => {
        let state = "idle";
        if (confirmed && oi === data.correct) state = "correct";
        else if (confirmed && oi === selected) state = "incorrect";
        else if (!confirmed && oi === selected) state = "selected";
        return (
          <OptionButton
            key={oi}
            label={opt}
            state={state}
            disabled={confirmed}
            onClick={() => setSelected(oi)}
            icon={confirmed && oi === data.correct ? <Check size={18} color="#1C9450" /> : confirmed && oi === selected ? <X size={18} color="#D8465F" /> : null}
          />
        );
      })}
      {!confirmed ? (
        <CheckButton disabled={selected === null} onClick={() => setConfirmed(true)} />
      ) : (
        <FeedbackAndContinue isCorrect={isCorrect} explain={data.explain} onContinue={() => onAnswered(isCorrect)} />
      )}
    </div>
  );
}

function TrueFalseQuestion({ data, onAnswered }) {
  const [selected, setSelected] = useState(null); // true | false
  const [confirmed, setConfirmed] = useState(false);
  const isCorrect = selected === data.correct;
  const opts = [true, false];
  return (
    <div>
      <p style={{ fontSize: 19, fontWeight: 800, color: "#17213A", lineHeight: 1.4, marginBottom: 18, fontFamily: FONT_DISPLAY }}>{data.q}</p>
      <div style={{ display: "flex", gap: 10 }}>
        {opts.map((val) => {
          let state = "idle";
          if (confirmed && val === data.correct) state = "correct";
          else if (confirmed && val === selected) state = "incorrect";
          else if (!confirmed && val === selected) state = "selected";
          const v = optionVisual(state);
          return (
            <button
              key={String(val)}
              className="lp-opt"
              disabled={confirmed}
              onClick={() => setSelected(val)}
              style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "18px 0", borderRadius: 14, border: `2px solid ${v.border}`, background: v.bg, color: v.color, fontWeight: 800, fontSize: 16, cursor: confirmed ? "default" : "pointer", fontFamily: FONT_DISPLAY }}
            >
              {val ? "True" : "False"}
              {confirmed && val === data.correct && <Check size={18} color="#1C9450" />}
              {confirmed && val === selected && val !== data.correct && <X size={18} color="#D8465F" />}
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: 8 }}>
        {!confirmed ? (
          <CheckButton disabled={selected === null} onClick={() => setConfirmed(true)} />
        ) : (
          <FeedbackAndContinue isCorrect={isCorrect} explain={data.explain} onContinue={() => onAnswered(isCorrect)} />
        )}
      </div>
    </div>
  );
}

function MultiSelectQuestion({ data, onAnswered }) {
  const [selected, setSelected] = useState([]);
  const [confirmed, setConfirmed] = useState(false);
  const correctSet = [...data.correct].sort().join(",");
  const isCorrect = [...selected].sort().join(",") === correctSet;
  const toggle = (oi) => setSelected((prev) => (prev.includes(oi) ? prev.filter((x) => x !== oi) : [...prev, oi]));
  return (
    <div>
      <p style={{ fontSize: 19, fontWeight: 800, color: "#17213A", lineHeight: 1.4, marginBottom: 4, fontFamily: FONT_DISPLAY }}>{data.q}</p>
      <p style={{ fontSize: 12.5, color: "#9C99A6", fontWeight: 700, letterSpacing: 0.3, marginBottom: 14 }}>SELECT ALL THAT APPLY</p>
      {data.options.map((opt, oi) => {
        const isSel = selected.includes(oi);
        const isRight = data.correct.includes(oi);
        let state = "idle";
        if (confirmed && isRight) state = "correct";
        else if (confirmed && isSel && !isRight) state = "incorrect";
        else if (!confirmed && isSel) state = "selected";
        return (
          <OptionButton
            key={oi}
            label={opt}
            state={state}
            disabled={confirmed}
            onClick={() => toggle(oi)}
            icon={confirmed && isRight ? <Check size={18} color="#1C9450" /> : confirmed && isSel && !isRight ? <X size={18} color="#D8465F" /> : !confirmed ? (
              <span style={{ width: 18, height: 18, borderRadius: 6, border: `2px solid ${isSel ? "#2E7FD1" : "#D8D5E5"}`, background: isSel ? "#2E7FD1" : "transparent", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {isSel && <Check size={12} color="#fff" />}
              </span>
            ) : null}
          />
        );
      })}
      {!confirmed ? (
        <CheckButton disabled={selected.length === 0} onClick={() => setConfirmed(true)} />
      ) : (
        <FeedbackAndContinue isCorrect={isCorrect} explain={data.explain} onContinue={() => onAnswered(isCorrect)} />
      )}
    </div>
  );
}

function TypedQuestion({ data, onAnswered }) {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const accepted = (data.accepted || []).map((a) => a.trim().toLowerCase());
  const isCorrect = accepted.includes(value.trim().toLowerCase());
  return (
    <div>
      <p style={{ fontSize: 19, fontWeight: 800, color: "#17213A", lineHeight: 1.4, marginBottom: 4, fontFamily: FONT_DISPLAY }}>{data.q}</p>
      <p style={{ fontSize: 12.5, color: "#9C99A6", fontWeight: 700, letterSpacing: 0.3, marginBottom: 14 }}>TYPE YOUR ANSWER</p>
      <input
        type="text"
        value={value}
        disabled={confirmed}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter" && value.trim() && !confirmed) setConfirmed(true); }}
        placeholder="Your answer…"
        style={{
          width: "100%", boxSizing: "border-box", padding: "14px 16px", borderRadius: 14, marginBottom: 12, fontSize: 16, fontWeight: 600,
          border: `2px solid ${confirmed ? (isCorrect ? "#1C9450" : "#D8465F") : "#EAEAF2"}`,
          background: confirmed ? (isCorrect ? "#EAFAF0" : "#FCEAEC") : "#fff",
          color: confirmed ? (isCorrect ? "#166A3C" : "#A23347") : "#17213A", outline: "none",
        }}
      />
      {confirmed && !isCorrect && (
        <p style={{ fontSize: 13.5, color: "#8A8FA0", margin: "0 0 12px" }}>Accepted answer: <strong>{data.accepted[0]}</strong></p>
      )}
      {!confirmed ? (
        <CheckButton disabled={!value.trim()} onClick={() => setConfirmed(true)} />
      ) : (
        <FeedbackAndContinue isCorrect={isCorrect} explain={data.explain} onContinue={() => onAnswered(isCorrect)} />
      )}
    </div>
  );
}

function Question({ data, onAnswered }) {
  const qtype = data.type || "mcq";
  if (qtype === "truefalse") return <TrueFalseQuestion data={data} onAnswered={onAnswered} />;
  if (qtype === "multi") return <MultiSelectQuestion data={data} onAnswered={onAnswered} />;
  if (qtype === "type") return <TypedQuestion data={data} onAnswered={onAnswered} />;
  return <SingleSelectQuestion data={data} onAnswered={onAnswered} />;
}

/* ============================================================
   LESSON VIEW
   ============================================================ */

function buildSteps(lesson) {
  const steps = [];
  let current = null;
  const pushCurrent = () => { if (current && current.blocks.length) steps.push(current); current = null; };
  lesson.blocks.forEach((b) => {
    if (b.type === "check") {
      pushCurrent();
      // b.type ("check") marks its role in the lesson; b.qtype (mcq/truefalse/multi/type) is its answer format.
      steps.push({ type: "check", block: { ...b, type: b.qtype || "mcq" } });
      return;
    }
    if (!current) current = { type: "read", blocks: [] };
    current.blocks.push(b);
    if (b.type === "h" && current.blocks.length > 1) {
      const headingBlock = current.blocks.pop();
      pushCurrent();
      current = { type: "read", blocks: [headingBlock] };
    }
  });
  pushCurrent();
  lesson.quiz.forEach((q, i) => steps.push({ type: "quiz", q, index: i }));
  steps.push({ type: "results" });
  return steps;
}

function StarRow({ percent }) {
  const filled = percent >= 90 ? 3 : percent >= 66 ? 2 : percent > 0 ? 1 : 0;
  return (
    <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 6 }}>
      {[0, 1, 2].map((i) => (
        <Star key={i} size={26} color={i < filled ? "#D9791F" : "#E7E5EE"} fill={i < filled ? "#D9791F" : "#E7E5EE"} />
      ))}
    </div>
  );
}

function LessonView({ course, module, lesson, onBack, completed, lastScore, nextLesson, onMarkComplete, onGoModules, onGoHome, onGoNext }) {
  const [mode, setMode] = useState(completed ? "recap" : "lesson");
  const steps = React.useMemo(() => buildSteps(lesson), [lesson]);
  const quizStartIndex = steps.findIndex((s) => s.type === "quiz");
  const [stepIndex, setStepIndex] = useState(0);
  const [quizResults, setQuizResults] = useState({});
  const markedRef = useRef(false);

  const step = steps[stepIndex];
  const stepColor = (t) => (t === "read" ? "#2E7FD1" : t === "check" ? "#D8465F" : t === "quiz" ? "#1C9450" : "#D9791F");

  const goNext = () => setStepIndex((i) => Math.min(i + 1, steps.length - 1));

  const handleQuizAnswered = (qIndex, correct) => {
    setQuizResults((prev) => ({ ...prev, [qIndex]: correct }));
    goNext();
  };

  const score = Object.values(quizResults).filter(Boolean).length;
  const passed = score >= Math.ceil(lesson.quiz.length * 0.66);
  const percent = lesson.quiz.length ? Math.round((score / lesson.quiz.length) * 100) : 100;

  useEffect(() => {
    if (mode === "lesson" && step.type === "results" && passed && !markedRef.current) {
      markedRef.current = true;
      onMarkComplete(score, lesson.quiz.length);
    }
  }, [mode, step, passed, onMarkComplete]);

  const primaryBtn = (bg, label, onClick, extra) => (
    <button
      onClick={onClick}
      className="lp-btn"
      style={{ width: "100%", padding: "16px 0", borderRadius: 14, border: "none", background: bg, color: textOn(bg), fontWeight: 800, fontSize: 16, cursor: "pointer", fontFamily: FONT_DISPLAY, marginBottom: 10, boxShadow: `0 4px 0 ${darken(bg, 0.32)}`, ...extra }}
    >
      {label}
    </button>
  );
  const ghostBtn = (label, onClick, color = "#5A5F6E") => (
    <button onClick={onClick} style={{ width: "100%", padding: "13px 0", borderRadius: 14, border: "none", background: "transparent", color, fontWeight: 700, fontSize: 15, cursor: "pointer", marginBottom: 4 }}>
      {label}
    </button>
  );

  if (mode === "recap") {
    const lastPercent = lastScore && lastScore.total ? Math.round((lastScore.score / lastScore.total) * 100) : null;
    return (
      <div className="lp-shell-narrow">
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#8A8FA0", fontSize: 14, cursor: "pointer", marginBottom: 14, padding: 0, fontWeight: 700 }}>
          <ArrowLeft size={16} /> Module {module.number}
        </button>
        <div className="lp-pop" style={{ textAlign: "center", paddingTop: 24 }}>
          <div className="lp-float" style={{ width: 76, height: 76, borderRadius: "50%", background: "#EAFAF0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <Check size={34} color="#1C9450" />
          </div>
          <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.3, color: course.accent, marginBottom: 6 }}>LESSON {lesson.id}</p>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: course.ink, marginBottom: 10, fontFamily: FONT_DISPLAY }}>{lesson.title}</h1>
          {lastPercent !== null && <StarRow percent={lastPercent} />}
          <p style={{ fontSize: 15.5, color: "#8A8FA0", marginBottom: 28, fontWeight: 600 }}>
            {lastScore ? `You've already passed this — scored ${lastScore.score}/${lastScore.total} last time.` : "You've already completed this lesson."}
          </p>
          {primaryBtn(course.accent, "Redo the lesson", () => setMode("lesson"))}
          {ghostBtn("Back to modules", onGoModules)}
          {ghostBtn("Back to home", onGoHome)}
          <p style={{ fontSize: 12, color: "#B0AEC4", marginTop: 14, fontWeight: 600 }}>Redoing won't undo your progress — this lesson stays marked complete either way.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lp-shell-narrow">
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#8A8FA0", fontSize: 14, cursor: "pointer", marginBottom: 14, padding: 0, fontWeight: 700 }}>
        <ArrowLeft size={16} /> Module {module.number}
      </button>

      {step.type !== "results" && (
        <>
          <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
            {steps.slice(0, -1).map((s, i) => (
              <div key={i} style={{ flex: 1, height: 9, borderRadius: 5, background: i <= stepIndex ? stepColor(s.type) : "#EDEDF5", transition: "background 0.2s" }} />
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#B0AEC4", marginBottom: 20, fontWeight: 700 }}>{Math.min(stepIndex + 1, steps.length - 1)} of {steps.length - 1}</p>
        </>
      )}

      {step.type === "read" && (
        <div className="lp-pop">
          <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.3, color: course.accent, marginBottom: 6 }}>LESSON {lesson.id}</p>
          {lesson.kind && lesson.kind !== "standard" && (
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 800, letterSpacing: 0.4, textTransform: "uppercase", borderRadius: 999, padding: "3px 10px", marginBottom: 10, color: lesson.kind === "gate" ? "#B5620F" : "#6A4FC2", background: lesson.kind === "gate" ? "#FDF1E4" : "#F1EEFC" }}>
              {lesson.kind === "gate" ? "Quick Primer" : lesson.kind === "case-study" ? "Case Study" : lesson.kind}
            </span>
          )}
          <h1 style={{ fontSize: 25, fontWeight: 800, color: course.ink, lineHeight: 1.3, marginBottom: 18, fontFamily: FONT_DISPLAY }}>{lesson.title}</h1>
          {step.blocks.map((b, i) => {
            if (b.type === "term") return <TermCard key={i} term={b.term} definition={b.definition} accent={course.accent} ink={course.ink} />;
            if (b.type === "diagram") return <Diagram key={i} kind={b.kind} accent={course.accent} ink={course.ink} />;
            return <Block key={i} block={b} accent={course.accent} ink={course.ink} />;
          })}
          <button className="lp-btn" onClick={goNext} style={{ width: "100%", padding: "15px 0", borderRadius: 14, border: "none", background: course.accent, color: textOn(course.accent), fontWeight: 800, fontSize: 16, cursor: "pointer", marginTop: 8, fontFamily: FONT_DISPLAY, boxShadow: `0 4px 0 ${darken(course.accent, 0.3)}` }}>
            Continue
          </button>
        </div>
      )}

      {step.type === "check" && (
        <div className="lp-pop" key={`check-${stepIndex}`}>
          <p style={{ fontSize: 12.5, fontWeight: 800, color: "#D8465F", letterSpacing: 0.5, marginBottom: 12 }}>QUICK PAUSE</p>
          <Question data={step.block} onAnswered={goNext} />
        </div>
      )}

      {step.type === "quiz" && (
        <div className="lp-pop" key={`quiz-${stepIndex}`}>
          <p style={{ fontSize: 12.5, fontWeight: 800, color: "#1C9450", letterSpacing: 0.5, marginBottom: 12 }}>QUIZ · QUESTION {step.index + 1} OF {lesson.quiz.length}</p>
          <Question data={step.q} onAnswered={(correct) => handleQuizAnswered(step.index, correct)} />
        </div>
      )}

      {step.type === "results" && (
        <div className="lp-pop" style={{ textAlign: "center", paddingTop: 20 }}>
          <div className="lp-float" style={{ width: 84, height: 84, borderRadius: "50%", background: passed ? "#EAFAF0" : "#FFF7E0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            {passed ? <Check size={38} color="#1C9450" /> : <X size={38} color="#D9791F" />}
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: course.ink, marginBottom: 8, fontFamily: FONT_DISPLAY }}>{passed ? "Lesson complete!" : "Almost there"}</h2>
          {passed && <StarRow percent={percent} />}
          <p style={{ fontSize: 15.5, color: "#8A8FA0", marginBottom: 26, fontWeight: 600 }}>{score}/{lesson.quiz.length} correct{passed ? " — nice work!" : " — you need a couple more right to pass."}</p>

          {passed ? (
            <>
              {nextLesson ? (
                primaryBtn(course.accent, `Next: ${nextLesson.lesson.id} ${nextLesson.lesson.title} →`, () => onGoNext(score, lesson.quiz.length))
              ) : (
                primaryBtn("#1C9450", "You finished the course! 🎉", onGoModules)
              )}
              {ghostBtn("Back to modules", onGoModules)}
              {ghostBtn("Back to home", onGoHome)}
            </>
          ) : (
            <>
              {primaryBtn(course.ink, "Retry the quiz", () => { markedRef.current = false; setQuizResults({}); setStepIndex(quizStartIndex); })}
              {ghostBtn("Back to modules", onGoModules)}
            </>
          )}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   MODULE VIEW — list of lessons, sequential unlock
   ============================================================ */

function ModuleView({ course, module, completedLessons, onBack, onOpenLesson }) {
  return (
    <div className="lp-shell-wide">
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#8A8FA0", fontSize: 14, cursor: "pointer", marginBottom: 18, padding: 0, fontWeight: 700 }}>
        <ArrowLeft size={16} /> {course.title}
      </button>
      <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.3, color: course.accent, marginBottom: 6 }}>MODULE {module.number}</p>
      <h1 style={{ fontSize: 27, fontWeight: 800, color: course.ink, marginBottom: 8, fontFamily: FONT_DISPLAY }}>{module.title}</h1>
      <p style={{ fontSize: 15.5, color: "#6B7080", marginBottom: 28, lineHeight: 1.6, maxWidth: 560 }}>{module.description}</p>

      {module.lessons.length === 0 && (
        <>
          <p style={{ fontSize: 13.5, color: "#B0AEC4", marginBottom: 14, fontWeight: 600 }}>Lessons below are planned — content is being built next.</p>
          {(module.lessonPreview || []).map((l) => (
            <div key={l.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", marginBottom: 10, borderRadius: 14, border: "1px solid #EAEAF2", background: "#F6F7FB" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "#E7E5EE", color: "#A3A0B4" }}>
                <Lock size={13} />
              </div>
              <div>
                <p style={{ fontSize: 12.5, color: "#A3A0B4", margin: 0, fontWeight: 700 }}>{l.id}</p>
                <p style={{ fontSize: 15, color: "#A3A0B4", margin: 0, fontWeight: 600 }}>{l.title}</p>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="lp-grid">
        {module.lessons.map((lesson, i) => {
          const isDone = completedLessons.includes(lesson.id);
          const prevDone = i === 0 || completedLessons.includes(module.lessons[i - 1].id);
          const isLocked = !prevDone && !isDone;
          return (
            <button
              key={lesson.id}
              disabled={isLocked}
              onClick={() => onOpenLesson(lesson)}
              className="lp-card"
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%",
                padding: "18px 18px", borderRadius: 16,
                border: `2px solid ${isDone ? "#BFE8CC" : "#EAEAF2"}`,
                background: isDone ? "#F5FBF7" : isLocked ? "#F6F7FB" : "#fff",
                cursor: isLocked ? "default" : "pointer", textAlign: "left",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  background: isDone ? "#1C9450" : isLocked ? "#E7E5EE" : course.accent,
                  color: isDone ? "#fff" : isLocked ? "#A3A0B4" : textOn(course.accent), fontSize: 13, fontWeight: 800,
                }}>
                  {isDone ? <Check size={16} /> : isLocked ? <Lock size={13} /> : lesson.id.split(".")[1]}
                </div>
                <div>
                  <p style={{ fontSize: 12.5, color: "#A3A0B4", margin: 0, fontWeight: 700 }}>{lesson.id}</p>
                  <p style={{ fontSize: 15.5, color: isLocked ? "#A3A0B4" : course.ink, margin: 0, fontWeight: 700 }}>{lesson.title}</p>
                </div>
              </div>
              {!isLocked && <ChevronRight size={18} color="#B0AEC4" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================
   COURSE MAP — modules with sequential lock
   ============================================================ */

function CourseMap({ course, completedLessons, onBack, onOpenModule, onSeeCurriculum }) {
  const isModuleComplete = (m) => m.lessons.length > 0 && m.lessons.every((l) => completedLessons.includes(l.id));
  const nextUnlockedIndex = course.modules.findIndex((m, i) => {
    const prevComplete = i === 0 || isModuleComplete(course.modules[i - 1]);
    return prevComplete && !isModuleComplete(m);
  });
  const offsets = [0, -28, -42, -28, 0, 28, 42, 28];
  const sectionOrder = [...new Set(course.modules.map((m) => m.section))];

  return (
    <div className="lp-shell-narrow">
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#8A8FA0", fontSize: 14, cursor: "pointer", marginBottom: 18, padding: 0, fontWeight: 700 }}>
        <ArrowLeft size={16} /> All courses
      </button>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 30, gap: 12 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: course.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
            <CourseIcon name={course.icon} size={19} color={textOn(course.accent)} />
          </div>
          <div>
            <h1 style={{ fontSize: 27, fontWeight: 800, color: course.ink, marginBottom: 4, fontFamily: FONT_DISPLAY }}>{course.title}</h1>
            <p style={{ fontSize: 15, color: "#6B7080", margin: 0, fontWeight: 600 }}>{course.tagline}</p>
          </div>
        </div>
        <button
          className="lp-btn"
          onClick={onSeeCurriculum}
          style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0, background: "#fff", border: `2px solid ${course.accent}`, color: course.ink, fontSize: 13, fontWeight: 800, borderRadius: 20, padding: "9px 14px", cursor: "pointer" }}
        >
          <BookOpen size={14} /> Full list
        </button>
      </div>

      <div style={{ position: "relative", padding: "10px 0" }}>
        {course.modules.map((m, i) => {
          const prevComplete = i === 0 || isModuleComplete(course.modules[i - 1]);
          const complete = isModuleComplete(m);
          const isLocked = !prevComplete && !complete;
          const isCurrent = i === nextUnlockedIndex;
          // Consistent 3-state colour system: done = green, available = the
          // course's own accent, locked = grey. (Previously this cycled
          // through a 5-colour rainbow per module index, which is what made
          // the path look busy/inconsistent next to the sign-in page.)
          const color = complete ? "#1C9450" : isLocked ? "#E7E5EE" : course.accent;
          const offset = offsets[i % offsets.length];
          const isNewLevel = i === 0 || course.modules[i - 1].section !== m.section;
          const levelNumber = sectionOrder.indexOf(m.section) + 1;
          return (
            <React.Fragment key={m.id}>
              {isNewLevel && (
                <div style={{ background: course.ink, color: "#fff", borderRadius: 16, padding: "10px 18px", margin: "22px 0 24px", textAlign: "center" }}>
                  <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, opacity: 0.7, margin: 0 }}>LEVEL {levelNumber}</p>
                  <p style={{ fontSize: 15.5, fontWeight: 800, margin: "2px 0 0", fontFamily: FONT_DISPLAY }}>{m.section}</p>
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: offset, marginBottom: 26 }}>
                <button
                  className={`lp-node lp-btn${isCurrent ? " current" : ""}`}
                  disabled={isLocked}
                  onClick={() => onOpenModule(m)}
                  style={{
                    width: 60, height: 60, borderRadius: "50%", flexShrink: 0, display: "flex",
                    alignItems: "center", justifyContent: "center", zIndex: 1,
                    background: color, color: isLocked ? "#A3A0B4" : textOn(color), fontWeight: 800, fontSize: 18,
                    border: "4px solid #FFFFFF", cursor: isLocked ? "default" : "pointer",
                    boxShadow: isLocked ? "none" : `0 4px 0 ${complete ? "#127A3E" : darken(color, 0.28)}`,
                  }}
                  title={m.title}
                >
                  {complete ? <Check size={22} /> : isLocked ? <Lock size={18} /> : m.number}
                </button>
                <p style={{ fontSize: 11.5, fontWeight: 700, color: isLocked ? "#C6C3D6" : course.ink, margin: "8px 0 0", lineHeight: 1.3, maxWidth: 130, textAlign: "center" }}>{m.title}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================
   CURRICULUM — full flat list of every module + lesson
   ============================================================ */

function CurriculumView({ course, completedLessons, onBack }) {
  const sections = [];
  course.modules.forEach((m) => {
    const sec = m.section || "Course";
    let bucket = sections.find((s) => s.name === sec);
    if (!bucket) { bucket = { name: sec, modules: [] }; sections.push(bucket); }
    bucket.modules.push(m);
  });

  return (
    <div className="lp-shell-wide">
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#8A8FA0", fontSize: 14, cursor: "pointer", marginBottom: 18, padding: 0, fontWeight: 700 }}>
        <ArrowLeft size={16} /> {course.title}
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <Sparkles size={20} color={course.accent} />
        <h1 style={{ fontSize: 27, fontWeight: 800, color: course.ink, margin: 0, fontFamily: FONT_DISPLAY }}>Full curriculum</h1>
      </div>
      <p style={{ fontSize: 14.5, color: "#8A8FA0", marginBottom: 26, fontWeight: 600 }}>Everything this course will cover, start to finish.</p>

      <div className="lp-grid">
        {sections.map((sec) => (
          <div key={sec.name} style={{ marginBottom: 10 }}>
            <p style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: 0.3, color: "#B0AEC4", marginBottom: 10 }}>{sec.name.toUpperCase()}</p>
            {sec.modules.map((m) => {
              const lessonsToShow = m.lessons.length > 0 ? m.lessons : (m.lessonPreview || []);
              return (
                <div key={m.id} style={{ background: "#fff", border: "2px solid #EAEAF2", borderRadius: 16, padding: "16px 18px", marginBottom: 10 }}>
                  <p style={{ fontSize: 15, fontWeight: 800, color: course.ink, margin: "0 0 8px" }}>Module {m.number} — {m.title}</p>
                  {lessonsToShow.map((l) => {
                    const done = completedLessons.includes(l.id);
                    return (
                      <div key={l.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 0" }}>
                        {done ? <Check size={14} color="#1C9450" /> : <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D8D5E5" }} />}
                        <p style={{ fontSize: 14, color: done ? "#1C9450" : "#5A5F6E", margin: 0, fontWeight: 600 }}>{l.id} {l.title}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   HUB — course picker (multi-course home)
   ============================================================ */

/* ============================================================
   DAILY REVIEW (spaced repetition session)
   ============================================================
   All of today's due lessons, across every course, combined into ONE
   sequential quiz — reusing the same Question component (and its built-in
   explain-on-wrong feedback) that regular lessons use. No new content is
   needed: each question is pulled straight from that lesson's existing quiz. */
function ReviewSession({ dueList, onAnswer, onRevisitLesson, onExit }) {
  const [items] = useState(() =>
    dueList.map((item) => ({ ...item, question: pickReviewQuestion(item.lesson) })).filter((item) => item.question)
  );
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState([]); // { item, correct }

  if (items.length === 0) {
    return (
      <div className="lp-shell-narrow">
        <p style={{ fontSize: 15, color: "#8A8FA0", fontWeight: 700, marginBottom: 16 }}>Nothing due for review right now.</p>
        <button onClick={onExit} className="lp-btn" style={{ padding: "12px 20px", borderRadius: 12, border: "none", background: "#17213A", color: "#fff", fontWeight: 800, cursor: "pointer", fontFamily: FONT_DISPLAY }}>Back home</button>
      </div>
    );
  }

  if (index >= items.length) {
    const correctCount = results.filter((r) => r.correct).length;
    const missed = results.filter((r) => !r.correct);
    return (
      <div className="lp-shell-narrow">
        <div className="lp-pop">
          <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.3, color: "#D9791F", marginBottom: 6 }}>DAILY REVIEW</p>
          <h1 style={{ fontSize: 25, fontWeight: 800, color: "#17213A", marginBottom: 14, fontFamily: FONT_DISPLAY }}>{correctCount}/{items.length} correct</h1>
          {missed.length === 0 ? (
            <p style={{ fontSize: 15, color: "#166A3C", fontWeight: 700, marginBottom: 20 }}>Perfect — every one of these just moved up a review box. 🎉</p>
          ) : (
            <>
              <p style={{ fontSize: 14.5, color: "#8A8FA0", fontWeight: 600, marginBottom: 14 }}>These went back to Box 1 — worth a proper revisit:</p>
              {missed.map(({ item }) => (
                <button
                  key={item.course.id + item.lesson.id}
                  onClick={() => onRevisitLesson(item.course, item.module, item.lesson)}
                  className="lp-btn"
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", textAlign: "left", background: "#FFF7E0", border: "2px solid #FDECC8", borderRadius: 14, padding: "12px 16px", marginBottom: 10, cursor: "pointer" }}
                >
                  <div>
                    <p style={{ fontSize: 12.5, fontWeight: 800, color: "#8A6A00", margin: 0 }}>{item.course.title} · Lesson {item.lesson.id}</p>
                    <p style={{ fontSize: 14.5, fontWeight: 700, color: "#17213A", margin: 0 }}>{item.lesson.title}</p>
                  </div>
                  <ChevronRight size={18} color="#B0AEC4" />
                </button>
              ))}
            </>
          )}
          <button onClick={onExit} className="lp-btn" style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: "none", background: "#17213A", color: "#fff", fontWeight: 800, fontSize: 15.5, cursor: "pointer", marginTop: 8, fontFamily: FONT_DISPLAY }}>Done</button>
        </div>
      </div>
    );
  }

  const current = items[index];
  return (
    <div className="lp-shell-narrow">
      <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.3, color: "#D9791F", marginBottom: 4 }}>DAILY REVIEW · {index + 1} of {items.length}</p>
      <p style={{ fontSize: 12.5, color: "#B0AEC4", fontWeight: 700, marginBottom: 16 }}>{current.course.title} · Lesson {current.lesson.id} — {current.lesson.title}</p>
      <Question
        key={current.course.id + current.lesson.id}
        data={current.question}
        onAnswered={(isCorrect) => {
          onAnswer(current.course.id, current.lesson.id, isCorrect);
          setResults((r) => [...r, { item: current, correct: isCorrect }]);
          setIndex((i) => i + 1);
        }}
      />
    </div>
  );
}

function Hub({ courses, progressMap, dueCount, onOpenCourse, onOpenReview }) {
  const totalStars = Object.values(progressMap).reduce((n, p) => n + (p.completedLessons?.length || 0), 0);
  return (
    <div className="lp-shell-wide">
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="lp-float" style={{ width: 34, height: 34, borderRadius: 10, background: "#17213A", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <GraduationCap size={18} color="#fff" />
            </div>
            <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.4, color: "#8A8FA0", margin: 0 }}>YOUR ACADEMY</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#FFF7E0", borderRadius: 20, padding: "7px 13px" }}>
            <Star size={15} color="#D9791F" fill="#D9791F" />
            <span style={{ fontSize: 14, fontWeight: 800, color: "#17213A" }}>{totalStars}</span>
          </div>
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: "#17213A", marginBottom: 28, fontFamily: FONT_DISPLAY }}>Let's keep learning! 👋</h1>

        {dueCount > 0 && (
          <button
            onClick={onOpenReview}
            className="lp-btn"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", background: "#FFF7E0", border: "2px solid #FDECC8", borderRadius: 18, padding: "16px 20px", marginBottom: 24, cursor: "pointer", textAlign: "left" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "#D9791F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <RotateCw size={19} color="#fff" />
              </div>
              <div>
                <p style={{ fontSize: 12.5, fontWeight: 800, color: "#8A6A00", margin: 0, letterSpacing: 0.3 }}>DAILY REVIEW</p>
                <p style={{ fontSize: 16, fontWeight: 800, color: "#17213A", margin: 0, fontFamily: FONT_DISPLAY }}>{dueCount} review{dueCount === 1 ? "" : "s"} due today</p>
              </div>
            </div>
            <ChevronRight size={20} color="#D9791F" />
          </button>
        )}

        <div className="lp-grid">
          {courses.map((c) => {
            const completedLessons = progressMap[c.id]?.completedLessons || [];
            const done = completedLessons.length;
            const total = c.modules.reduce((n, m) => n + (m.lessons.length || (m.lessonPreview || []).length), 0);
            const isModuleComplete = (m) => m.lessons.length > 0 && m.lessons.every((l) => completedLessons.includes(l.id));
            const currentIndex = c.modules.findIndex((m) => !isModuleComplete(m));
            const currentModule = currentIndex === -1 ? c.modules[c.modules.length - 1] : c.modules[currentIndex];
            return (
              <button key={c.id} className="lp-btn lp-card" onClick={() => onOpenCourse(c)} style={{ display: "block", width: "100%", textAlign: "left", background: "#fff", border: "2px solid #EAEAF2", borderRadius: 20, padding: 22, cursor: "pointer", boxShadow: "0 3px 0 rgba(23,33,58,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 14, background: c.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CourseIcon name={c.icon} size={22} color={textOn(c.accent)} />
                  </div>
                  <div>
                    <p style={{ fontSize: 19, fontWeight: 800, color: c.ink, margin: 0, fontFamily: FONT_DISPLAY }}>{c.title}</p>
                    <p style={{ fontSize: 13.5, color: "#8A8FA0", margin: 0, fontWeight: 600 }}>{c.tagline}</p>
                  </div>
                </div>

                <p style={{ fontSize: 12.5, fontWeight: 700, color: c.ink, margin: "0 0 8px" }}>Module {currentModule.number} of {c.modules.length} — {currentModule.title}</p>

                <div style={{ height: 10, background: "#F1EFF8", borderRadius: 6, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${total ? (done / total) * 100 : 0}%`, background: c.accent, borderRadius: 6, transition: "width 0.4s ease" }} />
                </div>
                <p style={{ fontSize: 12.5, color: "#A3A0B4", marginTop: 8, marginBottom: 0, fontWeight: 700 }}>{done}/{total} lessons complete</p>
              </button>
            );
          })}

          <div style={{ border: "2px dashed #E7E5EE", borderRadius: 20, padding: 22, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontSize: 14, color: "#B0AEC4", margin: 0, fontWeight: 700 }}>Psychology and Effective Learning — coming soon ✨</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ROOT APP
   ============================================================ */

function getNextLesson(course, module, lesson) {
  const modIdx = course.modules.findIndex((m) => m.id === module.id);
  const lessonIdx = module.lessons.findIndex((l) => l.id === lesson.id);
  if (lessonIdx !== -1 && lessonIdx < module.lessons.length - 1) {
    return { module, lesson: module.lessons[lessonIdx + 1] };
  }
  for (let i = modIdx + 1; i < course.modules.length; i++) {
    const nm = course.modules[i];
    if (nm.lessons.length > 0) return { module: nm, lesson: nm.lessons[0] };
  }
  return null;
}

export default function LearningPlatform({ user }) {
  const [view, setView] = useState({ screen: "hub" }); // hub | course | curriculum | module | lesson | review
  const [progressMap, setProgressMap] = useState({});
  const [loaded, setLoaded] = useState(false);

  // A course with no `restrictedTo` field is visible to everyone. A course
  // with `restrictedTo: ["someone@email.com"]` only shows for that account.
  const visibleCourses = COURSES.filter(
    (c) => !c.restrictedTo || (user?.email && c.restrictedTo.includes(user.email))
  );

  useEffect(() => {
    (async () => {
      const entries = await Promise.all(visibleCourses.map(async (c) => [c.id, await loadProgress(c.id)]));
      setProgressMap(Object.fromEntries(entries));
      setLoaded(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);

  const completeLesson = useCallback((courseId, lessonId, score, total) => {
    setProgressMap((prev) => {
      const cur = prev[courseId] || { completedLessons: [], scores: {}, review: {} };
      const alreadyDone = cur.completedLessons.includes(lessonId);
      const completedLessons = alreadyDone ? cur.completedLessons : [...cur.completedLessons, lessonId];
      const review = { ...(cur.review || {}) };

      // Seed the spaced-repetition queue the moment every lesson in THIS
      // lesson's module is complete — not the instant this one lesson
      // finishes (per the "only after finishing a module" decision). Only
      // ever ADDS new entries, never overwrites one that already exists,
      // so a lesson already progressing through review boxes never resets.
      const course = COURSES.find((c) => c.id === courseId);
      const module = course?.modules.find((m) => m.lessons.some((l) => l.id === lessonId));
      if (module && module.lessons.every((l) => completedLessons.includes(l.id))) {
        module.lessons.forEach((l) => { if (!review[l.id]) review[l.id] = newReviewEntry(); });
      }

      const next = {
        completedLessons,
        scores: { ...(cur.scores || {}), [lessonId]: { score, total, at: Date.now() } },
        review,
      };
      saveProgress(courseId, next);
      return { ...prev, [courseId]: next };
    });
  }, []);

  // Called once per question during a daily review session — advances (or
  // resets) that lesson's Leitner box based on whether it was answered
  // correctly, and persists it the same way completeLesson does.
  const recordReview = useCallback((courseId, lessonId, wasCorrect) => {
    setProgressMap((prev) => {
      const cur = prev[courseId] || { completedLessons: [], scores: {}, review: {} };
      const nextEntry = advanceReviewEntry(cur.review?.[lessonId], wasCorrect);
      const next = { ...cur, review: { ...(cur.review || {}), [lessonId]: nextEntry } };
      saveProgress(courseId, next);
      return { ...prev, [courseId]: next };
    });
  }, []);

  if (!loaded) {
    return <div style={{ minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center", color: "#B0AEC4", fontSize: 14, fontWeight: 700 }}>Loading…</div>;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF", fontFamily: FONT_BODY }}>
      {/* Rendered once here at the true root, which never unmounts as you
          navigate between screens — this is what actually fixes the
          "modules/lessons go to the edge, no spacing" bug. GLOBAL_STYLE
          defines .lp-shell-wide/.lp-shell-narrow (max-width + centering)
          and .lp-grid (the gap between cards), but it was previously only
          rendered inside CourseMap and Hub — so the moment you navigated
          to ModuleView, LessonView, or CurriculumView (none of which
          rendered it themselves), React tore the <style> tag out of the
          page along with the CourseMap/Hub that had it, and those three
          screens were left with the class names in their JSX but zero
          matching CSS rules: full-width, no-gap divs, on every device. */}
      <style>{GLOBAL_STYLE}</style>
      {view.screen === "hub" && (
        <Hub
          courses={visibleCourses}
          progressMap={progressMap}
          dueCount={getDueReviews(visibleCourses, progressMap).length}
          onOpenCourse={(c) => setView({ screen: "course", course: c })}
          onOpenReview={() => setView({ screen: "review" })}
        />
      )}
      {view.screen === "review" && (
        <ReviewSession
          dueList={getDueReviews(visibleCourses, progressMap)}
          onAnswer={recordReview}
          onRevisitLesson={(course, module, lesson) => setView({ screen: "lesson", course, module, lesson })}
          onExit={() => setView({ screen: "hub" })}
        />
      )}
      {view.screen === "course" && (
        <CourseMap
          course={view.course}
          completedLessons={progressMap[view.course.id]?.completedLessons || []}
          onBack={() => setView({ screen: "hub" })}
          onOpenModule={(m) => setView({ screen: "module", course: view.course, module: m })}
          onSeeCurriculum={() => setView({ screen: "curriculum", course: view.course })}
        />
      )}
      {view.screen === "curriculum" && (
        <CurriculumView
          course={view.course}
          completedLessons={progressMap[view.course.id]?.completedLessons || []}
          onBack={() => setView({ screen: "course", course: view.course })}
        />
      )}
      {view.screen === "module" && (
        <ModuleView
          course={view.course}
          module={view.module}
          completedLessons={progressMap[view.course.id]?.completedLessons || []}
          onBack={() => setView({ screen: "course", course: view.course })}
          onOpenLesson={(l) => setView({ screen: "lesson", course: view.course, module: view.module, lesson: l })}
        />
      )}
      {view.screen === "lesson" && (() => {
        const next = getNextLesson(view.course, view.module, view.lesson);
        return (
          <LessonView
            key={view.lesson.id}
            course={view.course}
            module={view.module}
            lesson={view.lesson}
            completed={(progressMap[view.course.id]?.completedLessons || []).includes(view.lesson.id)}
            lastScore={progressMap[view.course.id]?.scores?.[view.lesson.id] || null}
            nextLesson={next}
            onBack={() => setView({ screen: "module", course: view.course, module: view.module })}
            onMarkComplete={(score, total) => completeLesson(view.course.id, view.lesson.id, score, total)}
            onGoModules={() => setView({ screen: "module", course: view.course, module: view.module })}
            onGoHome={() => setView({ screen: "hub" })}
            onGoNext={(score, total) => {
              completeLesson(view.course.id, view.lesson.id, score, total);
              setView({ screen: "lesson", course: view.course, module: next.module, lesson: next.lesson });
            }}
          />
        );
      })()}
    </div>
  );
}
