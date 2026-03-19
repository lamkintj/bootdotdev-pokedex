import { State } from "./state.js";

export async function commandMapForward (state: State) : Promise<void> {
    if (state.nextLocationURL === "null") {
        console.log ("You have reached the last page, try going back");
        return;
    }
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationURL);
    for (const loc of locations.results) {
        console.log(`${loc.name}`)
    }
    state.nextLocationURL = `${locations.next}`;
    state.prevLocationURL = `${locations.previous}`;
}

export async function commandMapBack (state: State) : Promise<void> {
    if (state.prevLocationURL === "null") {
        console.log("You are on the first page, you must go forward");
        return;
    }
    const locations = await state.pokeAPI.fetchLocations(state.prevLocationURL);
    for (const loc of locations.results) {
        console.log(`${loc.name}`)
    }
    state.nextLocationURL = `${locations.next}`;
    state.prevLocationURL = `${locations.previous}`;
}