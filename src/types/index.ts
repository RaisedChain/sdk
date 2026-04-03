export type RiskLevel = "low" | "medium" | "high";

export interface StrategyInput {
  capital: number;
  riskLevel: RiskLevel;
}

export interface StrategyResult {
  expectedReturn: number;
  riskScore: number;
}
