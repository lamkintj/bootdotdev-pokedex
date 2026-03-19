import type { State } from "./state.js";

export async function commandHelp(state: State): Promise<void> {
    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Pokedex usage:");
    console.log();
    for ( const cmd of Object.values(state.commands)) {
        console.log(`${cmd.name}: ${cmd.description}`);
    }
}