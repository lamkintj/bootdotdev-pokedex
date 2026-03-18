import readline from "node:readline";

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
    repl.on("line", (input: string) => {
        const result: string[] = cleanInput(input);
        if (result.length === 0) {
            repl.prompt();
        } else {
            console.log(`Your command was: ${result[0]}`);
            repl.prompt();
        }
    });
}
