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

export async function startREPL(state: State) {

    state.readline.setPrompt("Pokedex > ");
    state.readline.prompt();

  state.readline.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      state.readline.prompt();
      return;
    }

    const commandName = words[0];
    const args: string[] = words.slice(1)
    const cmd = state.commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      state.readline.prompt();
      return;
    }

    try {
      await cmd.callback(state, ...args);
    } catch (err) {
      console.log((err as Error).message);
    }

    state.readline.prompt();
  });
}
