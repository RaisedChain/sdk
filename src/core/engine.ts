import { StrategyInput, StrategyResult } from "../types";
import { basicStrategy } from "../strategies/basic";

export function runStrategy(input: StrategyInput): StrategyResult {
  return basicStrategy(input);
}
