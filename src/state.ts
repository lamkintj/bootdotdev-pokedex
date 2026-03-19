import { createInterface, type Interface } from "node:readline";
import { PokeAPI } from "./pokeapi.js";
import { getCommands } from "./commands.js";
import { Pokemon } from "./command_catch.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    commands: Record<string, CLICommand>;
    readline: Interface;
    pokeAPI: PokeAPI;
    nextLocationURL: string;
    prevLocationURL: string;
    pokedex: Record<string, Pokemon>;
};

export function initState (cacheInterval: number) {
    const rl: Interface = createInterface(
        process.stdin,
        process.stdout,
    );
    const API = new PokeAPI(cacheInterval);
    const next = "";
    const prev = "null";
    const registry: Record<string, CLICommand> = getCommands();
    const pokedex: Record<string, Pokemon> = {};
    const newState: State = {
        commands: registry,
        readline: rl,
        pokeAPI: API,
        nextLocationURL: next,
        prevLocationURL: prev,
        pokedex: pokedex,
    }
    
    return newState;
}

