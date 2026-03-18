import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

// Build the list of special CLI commands for the Pokedex
export type CLICommand = {
    name: string;
    description: string;
    callback: (commands: Record<string, CLICommand>) => void;
};

export function getCommands(): Record<string, CLICommand> {
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
    };
}

export const commandRegistry: Record<string, CLICommand> = getCommands();