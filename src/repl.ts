import { createInterface, type Interface } from "node:readline";
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    const words: string[] = input
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter((word) => word !== "");
    return words;
}

// Use of readline module to build REPL interface

export function startREPL(state: State) {
    const rl = state.rlInterface;
    const commands = state.cmdRegistry;
    rl.setPrompt("Pokedex > ");
    rl.prompt();

  rl.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];
    const cmd = commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      rl.prompt();
      return;
    }

    try {
      cmd.callback(state);
    } catch (err) {
      console.log(err);
    }

    rl.prompt();
  });
}
