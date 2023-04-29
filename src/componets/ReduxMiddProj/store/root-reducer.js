import { combineReducers } from "redux";
import { themeReducer } from "../theme-reducer/themeReducer";
import { countryReducer } from "../country/countryReducer";
import {filterReducer} from "../filter/filterReducer"
import { DetailsReducer } from "../detalis/detalisReducer";

export const rootReducer = combineReducers({
    theme:themeReducer,
    country:countryReducer,
    filter:filterReducer,
    details:DetailsReducer
});