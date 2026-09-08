import React, { useState, useEffect, useCallback } from "react";
import { Lock, Check, ChevronRight, ChevronLeft, Moon, ArrowLeft, X, Star, BookOpen, Sparkles, RotateCw } from "lucide-react";
import { COURSES } from "./courses/index.js";
import { loadProgress, saveProgress } from "./storage.js";

// Fun, cycling palette for module nodes on the winding path — cosmic/night themed but varied
const PALETTE = ["#2E7FD1", "#1C9450", "#D8465F", "#D9791F", "#E5C93A", "#2E7FD1"];

// Picks readable text (white vs. navy) based on the background colour's brightness —
// used anywhere a dynamic/vibrant background hosts text or an icon.
function textOn(hex) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16), g = parseInt(c.substring(2, 4), 16), b = parseInt(c.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.62 ? "#17213A" : "#FFFFFF";
}

const GLOBAL_STYLE = `
  .lp-btn { transition: transform 0.15s ease, box-shadow 0.15s ease; }
  .lp-btn:hover:not(:disabled) { transform: translateY(-2px) scale(1.02); }
  .lp-btn:active:not(:disabled) { transform: translateY(0) scale(0.98); }
  .lp-node:hover:not(:disabled) { transform: scale(1.1) !important; }
  .lp-node.current { animation: lp-pulse 1.8s ease-in-out infinite; }
  @keyframes lp-pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(201,162,75,0.4); } 50% { box-shadow: 0 0 0 8px rgba(201,162,75,0); } }
  @keyframes lp-pop { 0% { transform: scale(0.85); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
  .lp-pop { animation: lp-pop 0.25s ease; }
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
          <strong key={i} style={{ fontWeight: 600 }}>{part.slice(2, -2)}</strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

function Block({ block, accent, ink }) {
  if (block.type === "h") {
    return <h3 style={{ fontSize: 18, fontWeight: 600, color: ink, margin: "28px 0 10px" }}>{block.text}</h3>;
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
      <div style={{ background: "#FBF6E9", borderLeft: `3px solid ${accent}`, padding: "14px 16px", borderRadius: 4, margin: "8px 0 20px" }}>
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
        background: flipped ? "#FBF6E9" : "#F5F4F0", border: `1.5px solid ${flipped ? accent : "#EAE7DF"}`,
        borderRadius: 12, padding: "14px 16px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: ink, margin: 0, textTransform: flipped ? "none" : "uppercase", letterSpacing: flipped ? 0 : 0.3 }}>
          {flipped ? "Definition" : term}
        </p>
        <RotateCw size={14} color="#B8B5AC" />
      </div>
      {flipped && <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#3A3220", margin: "8px 0 0" }}>{definition}</p>}
      {!flipped && <p style={{ fontSize: 12, color: "#B8B5AC", margin: "6px 0 0" }}>Tap to reveal definition</p>}
    </button>
  );
}

/* ============================================================
   DIAGRAMS — small built-in SVGs, referenced by "kind"
   ============================================================ */

function Diagram({ kind, accent, ink }) {
  if (kind === "hypnogram") {
    // Simplified hypnogram: 4 cycles, deep sleep early, REM lengthening later
    const points = "0,20 20,20 40,90 60,90 80,140 110,140 130,90 150,60 170,20 200,20 220,90 240,120 270,80 290,40 310,20 340,20 360,80 380,60 410,10 440,10";
    return (
      <div style={{ margin: "12px 0 22px", background: "#F5F4F0", borderRadius: 12, padding: "16px 12px" }}>
        <svg viewBox="0 0 460 170" style={{ width: "100%", height: "auto" }}>
          <text x="0" y="14" fontSize="9" fill="#9C99A6">Awake</text>
          <text x="0" y="34" fontSize="9" fill="#9C99A6">REM</text>
          <text x="0" y="64" fontSize="9" fill="#9C99A6">N1</text>
          <text x="0" y="94" fontSize="9" fill="#9C99A6">N2</text>
          <text x="0" y="144" fontSize="9" fill="#9C99A6">N3</text>
          <polyline points={points} fill="none" stroke={accent} strokeWidth="2.5" strokeLinejoin="round" />
          <text x="230" y="165" fontSize="10" fill="#B8B5AC" textAnchor="middle">Time across the night →</text>
        </svg>
        <p style={{ fontSize: 12, color: "#9C99A6", margin: "4px 0 0", textAlign: "center" }}>Note the deep dips (N3) early, and how the line lifts closer to REM/light sleep later on.</p>
      </div>
    );
  }
  if (kind === "cycle") {
    return (
      <div style={{ margin: "12px 0 22px", background: "#F5F4F0", borderRadius: 12, padding: "16px 12px" }}>
        <svg viewBox="0 0 460 130" style={{ width: "100%", height: "auto" }}>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <path d={`M ${i * 115 + 10} 30 Q ${i * 115 + 40} 110 ${i * 115 + 65} 100 T ${i * 115 + 115} 30`} fill="none" stroke={accent} strokeWidth="2.5" />
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
   LESSON VIEW
   ============================================================ */

function buildSteps(lesson) {
  const steps = [];
  let current = null;
  const pushCurrent = () => { if (current && current.blocks.length) steps.push(current); current = null; };
  lesson.blocks.forEach((b) => {
    if (b.type === "check") {
      pushCurrent();
      steps.push({ type: "check", block: b });
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

function StepQuestion({ q, options, correct, explain, accent, onAnswered }) {
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const isCorrect = selected === correct;
  return (
    <div>
      <p style={{ fontSize: 19, fontWeight: 700, color: "#17213A", lineHeight: 1.4, marginBottom: 18 }}>{q}</p>
      {options.map((opt, oi) => {
        let border = "#E3E1DA", bg = "#fff", textColor = "#2E3646";
        if (confirmed && oi === correct) { border = "#1C9450"; bg = "#EAFAF0"; textColor = "#166A3C"; }
        else if (confirmed && oi === selected) { border = "#D8465F"; bg = "#FCEAEC"; textColor = "#A23347"; }
        else if (!confirmed && oi === selected) { border = accent; bg = "#EEF6FD"; }
        return (
          <button
            key={oi}
            disabled={confirmed}
            onClick={() => setSelected(oi)}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", textAlign: "left", padding: "13px 16px", marginBottom: 10, borderRadius: 12, border: `2px solid ${border}`, background: bg, cursor: confirmed ? "default" : "pointer", fontSize: 15.5, color: textColor, fontWeight: 500 }}
          >
            {opt}
            {confirmed && oi === correct && <Check size={18} color="#1C9450" />}
            {confirmed && oi === selected && oi !== correct && <X size={18} color="#D8465F" />}
          </button>
        );
      })}
      {!confirmed ? (
        <button
          disabled={selected === null}
          onClick={() => setConfirmed(true)}
          className="lp-btn"
          style={{ width: "100%", padding: "14px 0", borderRadius: 12, border: "none", marginTop: 8, background: selected === null ? "#E3E1DA" : "#17213A", color: "#fff", fontWeight: 700, fontSize: 15.5, cursor: selected === null ? "default" : "pointer" }}
        >
          Check
        </button>
      ) : (
        <div className="lp-pop">
          {explain && (
            <div style={{ background: isCorrect ? "#EAFAF0" : "#FBF6E9", borderRadius: 10, padding: "12px 14px", marginTop: 4, marginBottom: 12 }}>
              <p style={{ fontSize: 14, color: isCorrect ? "#166A3C" : "#8A6A50", margin: 0, fontWeight: 500 }}>{isCorrect ? "Correct! " : "Not quite — "}{explain}</p>
            </div>
          )}
          <button
            onClick={() => onAnswered(isCorrect)}
            className="lp-btn"
            style={{ width: "100%", padding: "14px 0", borderRadius: 12, border: "none", background: "#17213A", color: "#fff", fontWeight: 700, fontSize: 15.5, cursor: "pointer" }}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

function LessonView({ course, module, lesson, onBack, onComplete, completed }) {
  const steps = React.useMemo(() => buildSteps(lesson), [lesson]);
  const quizStartIndex = steps.findIndex((s) => s.type === "quiz");
  const [stepIndex, setStepIndex] = useState(completed ? steps.length - 1 : 0);
  const [quizResults, setQuizResults] = useState({});

  const step = steps[stepIndex];
  const stepColor = (t) => (t === "read" ? "#2E7FD1" : t === "check" ? "#D8465F" : t === "quiz" ? "#1C9450" : "#D9791F");

  const goNext = () => setStepIndex((i) => Math.min(i + 1, steps.length - 1));

  const handleQuizAnswered = (qIndex, correct) => {
    setQuizResults((prev) => ({ ...prev, [qIndex]: correct }));
    goNext();
  };

  const score = Object.values(quizResults).filter(Boolean).length;
  const passed = score >= Math.ceil(lesson.quiz.length * 0.66);

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "20px 20px 80px" }}>
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#8A8FA0", fontSize: 14, cursor: "pointer", marginBottom: 14, padding: 0 }}>
        <ArrowLeft size={16} /> Module {module.number}
      </button>

      <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
        {steps.slice(0, -1).map((s, i) => (
          <div key={i} style={{ flex: 1, height: 7, borderRadius: 4, background: i <= stepIndex ? stepColor(s.type) : "#EAE7DF", transition: "background 0.2s" }} />
        ))}
      </div>
      <p style={{ fontSize: 12, color: "#B8B5AC", marginBottom: 20 }}>{Math.min(stepIndex + 1, steps.length - 1)} of {steps.length - 1}</p>

      {step.type === "read" && (
        <div className="lp-pop">
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 0.3, color: course.accent, marginBottom: 6 }}>LESSON {lesson.id}</p>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: course.ink, lineHeight: 1.3, marginBottom: 18, fontFamily: "ui-serif, Georgia, serif" }}>{lesson.title}</h1>
          {step.blocks.map((b, i) => {
            if (b.type === "term") return <TermCard key={i} term={b.term} definition={b.definition} accent={course.accent} ink={course.ink} />;
            if (b.type === "diagram") return <Diagram key={i} kind={b.kind} accent={course.accent} ink={course.ink} />;
            return <Block key={i} block={b} accent={course.accent} ink={course.ink} />;
          })}
          <button className="lp-btn" onClick={goNext} style={{ width: "100%", padding: "14px 0", borderRadius: 12, border: "none", background: course.accent, color: "#fff", fontWeight: 700, fontSize: 15.5, cursor: "pointer", marginTop: 8 }}>
            Continue
          </button>
        </div>
      )}

      {step.type === "check" && (
        <div className="lp-pop">
          <p style={{ fontSize: 12.5, fontWeight: 700, color: "#D8465F", letterSpacing: 0.5, marginBottom: 12 }}>QUICK PAUSE</p>
          <StepQuestion q={step.block.q} options={step.block.options} correct={step.block.correct} explain={step.block.explain} accent="#D8465F" onAnswered={goNext} />
        </div>
      )}

      {step.type === "quiz" && (
        <div className="lp-pop">
          <p style={{ fontSize: 12.5, fontWeight: 700, color: "#1C9450", letterSpacing: 0.5, marginBottom: 12 }}>QUIZ · QUESTION {step.index + 1} OF {lesson.quiz.length}</p>
          <StepQuestion q={step.q.q} options={step.q.options} correct={step.q.correct} accent="#1C9450" onAnswered={(correct) => handleQuizAnswered(step.index, correct)} />
        </div>
      )}

      {step.type === "results" && (
        <div className="lp-pop" style={{ textAlign: "center", paddingTop: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: passed ? "#EAFAF0" : "#FBF6E9", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            {passed ? <Check size={34} color="#1C9450" /> : <X size={34} color="#D9791F" />}
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: course.ink, marginBottom: 6 }}>{passed ? "Lesson complete!" : "Almost there"}</h2>
          <p style={{ fontSize: 15, color: "#8A8FA0", marginBottom: 24 }}>{score}/{lesson.quiz.length} correct</p>
          {passed ? (
            <button className="lp-btn" onClick={onComplete} style={{ width: "100%", padding: "14px 0", borderRadius: 12, border: "none", background: "#1C9450", color: "#fff", fontWeight: 700, fontSize: 15.5, cursor: "pointer" }}>
              Done
            </button>
          ) : (
            <button
              className="lp-btn"
              onClick={() => { setQuizResults({}); setStepIndex(quizStartIndex); }}
              style={{ width: "100%", padding: "14px 0", borderRadius: 12, border: "none", background: course.ink, color: "#fff", fontWeight: 700, fontSize: 15.5, cursor: "pointer" }}
            >
              Retry the quiz
            </button>
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
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 20px 60px" }}>
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#8A8FA0", fontSize: 14, cursor: "pointer", marginBottom: 18, padding: 0 }}>
        <ArrowLeft size={16} /> {course.title}
      </button>
      <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 0.3, color: course.accent, marginBottom: 6 }}>MODULE {module.number}</p>
      <h1 style={{ fontSize: 26, fontWeight: 700, color: course.ink, marginBottom: 8, fontFamily: "ui-serif, Georgia, serif" }}>{module.title}</h1>
      <p style={{ fontSize: 15, color: "#6B7080", marginBottom: 28, lineHeight: 1.6 }}>{module.description}</p>

      {module.lessons.length === 0 && (
        <>
          <p style={{ fontSize: 13.5, color: "#B8B5AC", marginBottom: 14 }}>Lessons below are planned — content is being built next.</p>
          {(module.lessonPreview || []).map((l) => (
            <div key={l.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", marginBottom: 10, borderRadius: 10, border: "1px solid #EAE7DF", background: "#F7F6F2" }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "#E3E1DA", color: "#A3A096" }}>
                <Lock size={13} />
              </div>
              <div>
                <p style={{ fontSize: 12.5, color: "#A3A0A0", margin: 0, fontWeight: 600 }}>{l.id}</p>
                <p style={{ fontSize: 15, color: "#A3A0A0", margin: 0, fontWeight: 500 }}>{l.title}</p>
              </div>
            </div>
          ))}
        </>
      )}

      {module.lessons.map((lesson, i) => {
        const isDone = completedLessons.includes(lesson.id);
        const prevDone = i === 0 || completedLessons.includes(module.lessons[i - 1].id);
        const isLocked = !prevDone && !isDone;
        return (
          <button
            key={lesson.id}
            disabled={isLocked}
            onClick={() => onOpenLesson(lesson)}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%",
              padding: "16px 18px", marginBottom: 10, borderRadius: 10,
              border: `1px solid ${isDone ? "#D8E8DB" : "#EAE7DF"}`,
              background: isDone ? "#F5FAF6" : isLocked ? "#F7F6F2" : "#fff",
              cursor: isLocked ? "default" : "pointer", textAlign: "left",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                background: isDone ? "#1C9450" : isLocked ? "#E3E1DA" : course.accent,
                color: isDone ? "#fff" : isLocked ? "#A3A096" : course.ink, fontSize: 13, fontWeight: 700,
              }}>
                {isDone ? <Check size={15} /> : isLocked ? <Lock size={13} /> : lesson.id.split(".")[1]}
              </div>
              <div>
                <p style={{ fontSize: 12.5, color: "#A3A0A0", margin: 0, fontWeight: 600 }}>{lesson.id}</p>
                <p style={{ fontSize: 15.5, color: isLocked ? "#A3A0A0" : course.ink, margin: 0, fontWeight: 500 }}>{lesson.title}</p>
              </div>
            </div>
            {!isLocked && <ChevronRight size={18} color="#B8B5AC" />}
          </button>
        );
      })}
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
  // offsets create the winding path: 0 = centered, negative = left, positive = right
  const offsets = [0, -46, -70, -46, 0, 46, 70, 46];
  const sectionOrder = [...new Set(course.modules.map((m) => m.section))];

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 20px 60px" }}>
      <style>{GLOBAL_STYLE}</style>
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#8A8FA0", fontSize: 14, cursor: "pointer", marginBottom: 18, padding: 0 }}>
        <ArrowLeft size={16} /> All courses
      </button>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 30, gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: course.ink, marginBottom: 4, fontFamily: "ui-serif, Georgia, serif" }}>{course.title}</h1>
          <p style={{ fontSize: 15, color: "#6B7080", margin: 0 }}>{course.tagline}</p>
        </div>
        <button
          className="lp-btn"
          onClick={onSeeCurriculum}
          style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0, background: "#fff", border: `1.5px solid ${course.accent}`, color: course.ink, fontSize: 13, fontWeight: 600, borderRadius: 20, padding: "8px 14px", cursor: "pointer" }}
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
          const color = complete ? "#1C9450" : isLocked ? "#E3E1DA" : PALETTE[i % PALETTE.length];
          const offset = offsets[i % offsets.length];
          const isNewLevel = i === 0 || course.modules[i - 1].section !== m.section;
          const levelNumber = sectionOrder.indexOf(m.section) + 1;
          return (
            <React.Fragment key={m.id}>
              {isNewLevel && (
                <div style={{ background: course.ink, color: "#fff", borderRadius: 12, padding: "10px 18px", margin: "22px 0 24px", textAlign: "center" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, opacity: 0.7, margin: 0 }}>LEVEL {levelNumber}</p>
                  <p style={{ fontSize: 15, fontWeight: 700, margin: "2px 0 0" }}>{m.section}</p>
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: offset, marginBottom: 26 }}>
                <button
                  className={`lp-node lp-btn${isCurrent ? " current" : ""}`}
                  disabled={isLocked}
                  onClick={() => onOpenModule(m)}
                  style={{
                    width: 58, height: 58, borderRadius: "50%", flexShrink: 0, display: "flex",
                    alignItems: "center", justifyContent: "center", zIndex: 1,
                    background: color, color: isLocked ? "#A3A0A0" : textOn(color), fontWeight: 700, fontSize: 17,
                    border: "4px solid #FAFAF8", cursor: isLocked ? "default" : "pointer",
                    boxShadow: isLocked ? "none" : `0 4px 0 ${complete ? "#178A48" : "rgba(0,0,0,0.15)"}`,
                  }}
                  title={m.title}
                >
                  {complete ? <Check size={22} /> : isLocked ? <Lock size={18} /> : m.number}
                </button>
                <p style={{ fontSize: 11.5, fontWeight: 600, color: isLocked ? "#C2BFB6" : course.ink, margin: "8px 0 0", lineHeight: 1.3, maxWidth: 130, textAlign: "center" }}>{m.title}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================
   CURRICULUM — full flat list of every module + lesson, always
   visible regardless of lock state (browse-only, no navigation
   into locked content)
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
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 20px 60px" }}>
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#8A8FA0", fontSize: 14, cursor: "pointer", marginBottom: 18, padding: 0 }}>
        <ArrowLeft size={16} /> {course.title}
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <Sparkles size={20} color={course.accent} />
        <h1 style={{ fontSize: 26, fontWeight: 700, color: course.ink, margin: 0, fontFamily: "ui-serif, Georgia, serif" }}>Full curriculum</h1>
      </div>
      <p style={{ fontSize: 14.5, color: "#8A8FA0", marginBottom: 26 }}>Everything this course will cover, start to finish.</p>

      {sections.map((sec) => (
        <div key={sec.name} style={{ marginBottom: 26 }}>
          <p style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 0.3, color: "#B8B5AC", marginBottom: 10 }}>{sec.name.toUpperCase()}</p>
          {sec.modules.map((m) => {
            const lessonsToShow = m.lessons.length > 0 ? m.lessons : (m.lessonPreview || []);
            return (
              <div key={m.id} style={{ background: "#fff", border: "1px solid #EAE7DF", borderRadius: 12, padding: "16px 18px", marginBottom: 10 }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: course.ink, margin: "0 0 8px" }}>Module {m.number} — {m.title}</p>
                {lessonsToShow.map((l) => {
                  const done = completedLessons.includes(l.id);
                  return (
                    <div key={l.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 0" }}>
                      {done ? <Check size={14} color="#1C9450" /> : <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D8D5CC" }} />}
                      <p style={{ fontSize: 14, color: done ? "#1C9450" : "#5A5F6E", margin: 0 }}>{l.id} {l.title}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   HUB — course picker (multi-course home)
   ============================================================ */

function Hub({ courses, progressMap, onOpenCourse }) {
  const totalStars = Object.values(progressMap).reduce((n, p) => n + (p.completedLessons?.length || 0), 0);
  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "40px 20px 60px" }}>
      <style>{GLOBAL_STYLE}</style>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Moon size={20} color="#17213A" />
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.4, color: "#8A8FA0", margin: 0 }}>YOUR ACADEMY</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#FBF6E9", borderRadius: 20, padding: "6px 12px" }}>
          <Star size={14} color="#D9791F" fill="#D9791F" />
          <span style={{ fontSize: 13.5, fontWeight: 700, color: "#17213A" }}>{totalStars}</span>
        </div>
      </div>
      <h1 style={{ fontSize: 30, fontWeight: 700, color: "#17213A", marginBottom: 28, fontFamily: "ui-serif, Georgia, serif" }}>Courses</h1>

      {courses.map((c) => {
        const completedLessons = progressMap[c.id]?.completedLessons || [];
        const done = completedLessons.length;
        const total = c.modules.reduce((n, m) => n + (m.lessons.length || (m.lessonPreview || []).length), 0);
        const isModuleComplete = (m) => m.lessons.length > 0 && m.lessons.every((l) => completedLessons.includes(l.id));
        const currentIndex = c.modules.findIndex((m) => !isModuleComplete(m));
        const currentModule = currentIndex === -1 ? c.modules[c.modules.length - 1] : c.modules[currentIndex];
        const moduleTotal = currentModule.lessons.length || (currentModule.lessonPreview || []).length;
        const moduleDone = currentModule.lessons.filter((l) => completedLessons.includes(l.id)).length;
        return (
          <button key={c.id} className="lp-btn" onClick={() => onOpenCourse(c)} style={{ display: "block", width: "100%", textAlign: "left", background: "#fff", border: "1px solid #EAE7DF", borderRadius: 14, padding: 20, marginBottom: 14, cursor: "pointer", boxShadow: "0 2px 0 rgba(0,0,0,0.04)" }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: c.ink, margin: "0 0 4px", fontFamily: "ui-serif, Georgia, serif" }}>{c.title}</p>
            <p style={{ fontSize: 14, color: "#8A8FA0", margin: "0 0 14px" }}>{c.tagline}</p>

            <p style={{ fontSize: 12.5, fontWeight: 600, color: c.ink, margin: "0 0 8px" }}>Module {currentModule.number} of {c.modules.length} — {currentModule.title}</p>

            <div style={{ height: 8, background: "#F1EFE9", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${total ? (done / total) * 100 : 0}%`, background: c.accent, borderRadius: 4 }} />
            </div>
            <p style={{ fontSize: 12.5, color: "#A3A0A0", marginTop: 6, marginBottom: 0 }}>{done}/{total} lessons complete</p>
          </button>
        );
      })}

      <div style={{ border: "1.5px dashed #EAE7DF", borderRadius: 14, padding: 20, textAlign: "center" }}>
        <p style={{ fontSize: 14, color: "#B8B5AC", margin: 0 }}>Psychology and Effective Learning — coming soon</p>
      </div>
    </div>
  );
}

/* ============================================================
   ROOT APP
   ============================================================ */

export default function LearningPlatform() {
  const [view, setView] = useState({ screen: "hub" }); // hub | course | module | lesson
  const [progressMap, setProgressMap] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const entries = await Promise.all(COURSES.map(async (c) => [c.id, await loadProgress(c.id)]));
      setProgressMap(Object.fromEntries(entries));
      setLoaded(true);
    })();
  }, []);

  const completeLesson = useCallback((courseId, lessonId) => {
    setProgressMap((prev) => {
      const cur = prev[courseId] || { completedLessons: [] };
      if (cur.completedLessons.includes(lessonId)) return prev;
      const next = { ...cur, completedLessons: [...cur.completedLessons, lessonId] };
      saveProgress(courseId, next);
      return { ...prev, [courseId]: next };
    });
  }, []);

  if (!loaded) {
    return <div style={{ minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center", color: "#B8B5AC", fontSize: 14 }}>Loading…</div>;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF8", fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" }}>
      {view.screen === "hub" && (
        <Hub courses={COURSES} progressMap={progressMap} onOpenCourse={(c) => setView({ screen: "course", course: c })} />
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
      {view.screen === "lesson" && (
        <LessonView
          course={view.course}
          module={view.module}
          lesson={view.lesson}
          completed={(progressMap[view.course.id]?.completedLessons || []).includes(view.lesson.id)}
          onBack={() => setView({ screen: "module", course: view.course, module: view.module })}
          onComplete={() => {
            completeLesson(view.course.id, view.lesson.id);
            setView({ screen: "module", course: view.course, module: view.module });
          }}
        />
      )}
    </div>
  );
}
