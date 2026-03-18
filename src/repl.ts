import readline from "node:readline";
import { getCommands } from "./commands.js";

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

export function startREPL() {
    const repl: readline.Interface = readline.createInterface(
        process.stdin,
        process.stdout,
    );

    repl.setPrompt("Pokedex > ");
    repl.prompt();

  repl.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      repl.prompt();
      return;
    }

    const commandName = words[0];

    const commands = getCommands();
    const cmd = commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      repl.prompt();
      return;
    }

    try {
      cmd.callback(commands);
    } catch (err) {
      console.log(err);
    }

    repl.prompt();
  });
}
