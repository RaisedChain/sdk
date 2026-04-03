import { runStrategy } from "./core/engine";

const result = runStrategy({
  capital: 1000,
  riskLevel: "low",
});

console.log("Result:", result);
