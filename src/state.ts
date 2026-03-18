import { createInterface, type Interface } from "node:readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
};

export type State = {
    cmdRegistry: Record<string, CLICommand>;
    rlInterface: Interface;
};

export function initState () {
    const rl: Interface = createInterface(
        process.stdin,
        process.stdout,
    );
    const registry: Record<string, CLICommand> = {
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
    };
    const newState: State = {
        cmdRegistry: registry,
        rlInterface: rl,
    }
    return newState;
}