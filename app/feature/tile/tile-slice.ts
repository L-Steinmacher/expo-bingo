import { createSlice } from "@reduxjs/toolkit";
import { JsonItem, generateBoard } from "../../utils/misc";

// default value of active is false
interface TileState extends JsonItem {
    active: boolean;
}

const initialState: TileState[] = []

const tileSlice = createSlice({
    name: "tile",
    initialState,
    reducers: {
        setTiles: (state, action) => {

            state.push(...action.payload)
        },
        setActive: (state, action) => {
            const { id } = action.payload;
            const tile = state.findIndex((tile) => tile.id === id);
            state[tile].active = true;
        }
    }
})

export const { setTiles, setActive } = tileSlice.actions;
export default tileSlice.reducer;