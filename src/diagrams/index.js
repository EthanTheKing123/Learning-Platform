// Diagram registry — the actual mechanism for "how do new diagrams get added."
// A lesson's content just references a diagram by id:
//   { type: "diagram", kind: "evidencePyramid" }
// To add a new diagram: build a new file in this folder (copy the shape of
// EvidencePyramid.jsx or LoadingPhaseChart.jsx — static SVG, or animated/
// interactive SVG+CSS/JS, both work the same way), then add one import +
// one line below. Nothing else in the app ever needs to change.
//
// This registry is checked first. The two original built-in diagrams
// ("hypnogram" and "cycle", used by Sleep Science) still live directly in
// App.jsx's Diagram() function, untouched — this registry only adds new
// kinds on top, it doesn't replace anything existing.
import EvidencePyramid from "./EvidencePyramid.jsx";
import LoadingPhaseChart from "./LoadingPhaseChart.jsx";
import MacroBreakdown from "./MacroBreakdown.jsx";
import ProteinSourcesChart from "./ProteinSourcesChart.jsx";
import GlycemicResponseChart from "./GlycemicResponseChart.jsx";
import CommonDeficienciesChart from "./CommonDeficienciesChart.jsx";
import HydrationNeedChart from "./HydrationNeedChart.jsx";
import EnergySystemsTimeline from "./EnergySystemsTimeline.jsx";
import GutDiversityDiagram from "./GutDiversityDiagram.jsx";
import FastingTimelineChart from "./FastingTimelineChart.jsx";

export const DIAGRAM_REGISTRY = {
  evidencePyramid: EvidencePyramid,
  loadingPhaseChart: LoadingPhaseChart,
  macroBreakdown: MacroBreakdown,
  proteinSourcesChart: ProteinSourcesChart,
  glycemicResponseChart: GlycemicResponseChart,
  commonDeficienciesChart: CommonDeficienciesChart,
  hydrationNeedChart: HydrationNeedChart,
  energySystemsTimeline: EnergySystemsTimeline,
  gutDiversityDiagram: GutDiversityDiagram,
  fastingTimelineChart: FastingTimelineChart,
};
