import { StrategyInput, StrategyResult } from "../types";
import { getRiskMultiplier } from "../utils/risk";

export function basicStrategy(input: StrategyInput): StrategyResult {
  const multiplier = getRiskMultiplier(input.riskLevel);

  const expectedReturn = input.capital * multiplier;
  const riskScore = multiplier * 100;

  return {
    expectedReturn,
    riskScore,
  };
}
