import { createSlice } from "@reduxjs/toolkit";
import { JsonItem } from "../../utils/misc";

// type user = name nad username
type User = {
    name: string;
    username: string;
}

const initialState = {
    name: "",
    username: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.username = action.payload.username;
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;