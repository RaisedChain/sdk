import { runStrategy } from "../src/core/engine";

const result = runStrategy({
  capital: 1000,
  riskLevel: "medium",
});

console.log("Test Result:", result);
