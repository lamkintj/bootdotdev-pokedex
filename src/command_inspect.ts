import { Pokemon } from "./command_catch.js";
import { State } from "./state.js";

export async function commandInspect (state: State, pokemonName: string): Promise<void>{
    if (!(`${pokemonName}` in state.pokedex)) {
        console.log(`You have not caught ${pokemonName} yet!`);
        return;
    }
    const pokemonInfo: Pokemon = state.pokedex[`${pokemonName}`];
    console.log("Height: ", pokemonInfo.height);
    console.log("Weight: ", pokemonInfo.weight);
    console.log("Stats:");
    for (const stat of pokemonInfo.stats) {
        console.log(`   -${stat.stat["name"]}: `, stat.base_stat);
    };
    console.log("Types:");
    for (const type of pokemonInfo.types) {
        console.log(`   -${type.type["name"]}`)
    };
}