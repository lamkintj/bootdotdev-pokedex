import type { State } from "./state.js";

export function commandHelp(state: State): void {
    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Pokedex usage:");
    console.log();
    for ( const cmd of Object.values(state.cmdRegistry)) {
        console.log(`${cmd.name}: ${cmd.description}`);
    }
}