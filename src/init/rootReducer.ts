import { combineReducers } from "redux";
import { products } from "../redux/products";

export const rootReducer = combineReducers({products});

export type AppState = ReturnType<typeof rootReducer>;