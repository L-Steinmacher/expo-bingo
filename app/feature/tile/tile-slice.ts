import { createSlice } from "@reduxjs/toolkit";
import { JsonItem } from "../../utils/misc";

// default value of active is false
export interface Tile extends JsonItem {
    active: boolean;
    coordinates: coordinates;
}
type coordinates = { row: number; column: number };

const initialState: Tile[] = []

const tileSlice = createSlice({
    name: "tile",
    initialState,
    reducers: {
        setTiles: (state, action) => {
            state.push(...action.payload)
        },
        setActive: (state, action) => {
            const { slug } = action.payload;
            const tile = state.findIndex((tile) => tile.slug === slug);
            state[tile].active = true;
        }
    }
})

export const { setTiles, setActive } = tileSlice.actions;
export default tileSlice.reducer;