import type { CLICommand } from "./commands.js";

export function commandHelp(commands: Record<string, CLICommand>): void {
    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Pokedex usage:");
    console.log();
    for ( const cmd of Object.values(commands)) {
        console.log(`${cmd.name}: ${cmd.description}`);
    }
}