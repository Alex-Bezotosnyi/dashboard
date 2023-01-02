import {configureStore} from "@reduxjs/toolkit";
import countryReducer from "./CountrySlice";
import pointsReducer from "./slice";

export const store = configureStore({
    reducer: {
        pointsReducer,
        countryReducer,
    }
});