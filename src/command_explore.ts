import { State } from "./state.js";

export async function commandExplore (state: State, locationName: string): Promise<void> {
    const areaInfo = await state.pokeAPI.fetchLocation(locationName);
    console.log(`Exploring ${locationName}`);
    console.log(`Found Pokemon:`);
    const pokemon = areaInfo.pokemon_encounters;
    for (const entry of pokemon) {
        console.log(`- ${entry.pokemon.name}`);
    }
}