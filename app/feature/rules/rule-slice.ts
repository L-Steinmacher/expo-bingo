import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RulesState {
    rows: number[][];
}

const initialState: RulesState = {
    rows: [[], [], [2], [], []],
};

const rulesSlice = createSlice({
    name: "rules",
    initialState,
    reducers: {
        setCoordinates: (state, action: PayloadAction<{ row: number | undefined; column: number | undefined }>) => {
            const { row, column } = action.payload;
            state.rows[row].push(column)
            console.log(row, column);
        },
        checkForWin: (state) => {
            // console.log(JSON.stringify(state.rows, null, 2));
            // Check rows
            for (const row of state.rows) {
                if (row.length === 5) {
                    // Handle win condition
                    console.log("Row win!");
                    return;
                }
            }

            // Check columns
            for (let col = 0; col < 5; col++) {
                const isColumnComplete = state.rows.every((row) => row.includes(col));
                if (isColumnComplete) {
                    // Handle win condition
                    console.log("Column win!");
                    return;
                }
            }

            // Check diagonals
            let row = 0;
            let col = 0;
            let isDiagonalComplete = true;
            while (row < 5) {
                if (!state.rows[row].includes(col)) {
                    isDiagonalComplete = false;
                    break;
                }
                row++;
                col++;
            }
            if (isDiagonalComplete) {
                // Handle win condition
                console.log("Diagonal win!");
            }

            row = 0;
            col = 4;

            let isDiagonalCompleteReverse = true;
            while (row < 5) {
                if (!state.rows[row].includes(col)) {
                    isDiagonalCompleteReverse = false;
                    break;
                }
                row++;
                col--;
            }
            if (isDiagonalCompleteReverse) {
                // Handle win condition
                console.log("Reverse Diagonal win!");
            }
            isDiagonalCompleteReverse = true;
            isDiagonalComplete = true;
        },
    },
});

export const { setCoordinates, checkForWin } = rulesSlice.actions;
export default rulesSlice.reducer;
