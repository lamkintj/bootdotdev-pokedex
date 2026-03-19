import type { CLICommand } from "./state.js";

import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMapBack } from "./command_map.js";
import { commandMapForward } from "./command_map.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands (): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays usage summary for the pokedex",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays the next 20 available locations",
            callback: commandMapForward,
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous 20 available locations",
            callback: commandMapBack
        },
        explore: {
            name: "explore",
            description: "Gets detailed location data. Requires area name as argument",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Throw a Pokeball and catch a Pokemon located in your area!",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Gets information about captured pokemon",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Lists all Pokemon that you have caught during the session",
            callback: commandPokedex,
        },
    };
}