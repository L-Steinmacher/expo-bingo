import { createSlice } from "@reduxjs/toolkit";
import { JsonItem } from "../../utils/misc";

// default value of active is false
type coordinates = { row: number; column: number };
export interface Tile extends JsonItem {
    active: boolean;
    coordinates: coordinates;
}

const initialState: { Tiles: Tile[], TileSets: Tile[][] } = {
    Tiles: [],
    TileSets: []
}

const tileSlice = createSlice({
    name: "tile",
    initialState,
    reducers: {
        setTiles: (state, action) => {
            const tiles = action.payload;
            state.Tiles.push(...tiles)
            for (let i = 0; i < 5; i++) {
                const subArray = tiles.slice(i * 5, i * 5 + 5);
                state.TileSets.push(subArray);
            }
        },
        setActive: (state, action) => {
            const { slug } = action.payload;
            const tile = state.Tiles.find((tile) => tile.slug === slug);
            if (!tile) return;
            tile.active = true;
        }
    }
})

export const { setTiles, setActive } = tileSlice.actions;
export default tileSlice.reducer;