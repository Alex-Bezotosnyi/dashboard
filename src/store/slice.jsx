import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    points: [],
}

export const pointsSlice = createSlice({
        name: "points",
        initialState,
        reducers: {
            addPoint: (state, action) => {
                state.points = [...state.points, action.payload]
            },
            removePoint: (state, action) => {
                state.points = state.points.filter((point) => point.id !== action.payload.id)
            },
            editPoint: (state, action) => {
                state.points = state.points.map((point) => point.id === action.payload.id ? action.payload : point);
            },
        },
    },
);

const addPoint = pointsSlice.actions.addPoint;
const removePoint = pointsSlice.actions.removePoint;
const editPoint = pointsSlice.actions.editPoint;
export {addPoint, removePoint, editPoint};
export default pointsSlice.reducer;