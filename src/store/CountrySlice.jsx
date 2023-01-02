import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    country: [],
}

export const countrySlice = createSlice({
    name: "country",
    initialState: initialState,
    reducers: {
        selectCountry: (state, action) => {
            state.country = [...state.country, action.payload]
        },
    },
});

const selectCountry = countrySlice.actions.selectCountry;
export {selectCountry};
export default countrySlice.reducer;