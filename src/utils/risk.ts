import { RiskLevel } from "../types";

export function getRiskMultiplier(risk: RiskLevel): number {
  switch (risk) {
    case "low":
      return 0.02;
    case "medium":
      return 0.05;
    case "high":
      return 0.1;
    default:
      return 0.02;
  }
}
