// Diagram registry — the actual mechanism for "how do new diagrams get added."
// A lesson's content just references a diagram by id:
//   { type: "diagram", kind: "transformationSystem" }
// To add a new diagram: build a new file in this folder, then add one
// import + one line below. Nothing else in the app ever needs to change.
import TransformationSystem from "./TransformationSystem.jsx";
import RiskRewardLadder from "./RiskRewardLadder.jsx";
import SizeBands from "./SizeBands.jsx";
import LocationCircles from "./LocationCircles.jsx";
// TODO: RolesCycle — lesson 1.3's diagram, not built yet

export const DIAGRAM_REGISTRY = {
  transformationSystem: TransformationSystem,
  riskRewardLadder: RiskRewardLadder,
  sizeBands: SizeBands,
  locationCircles: LocationCircles,
};
