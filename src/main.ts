import { startREPL } from "./repl.js";
import { initState , State } from "./state.js";

async function main() {
  const minutes: number = 5;
  // Keep cache entries alive for 5 minutes
  const state: State = initState(1000 * 60 * minutes);
  await startREPL(state);
}

main();