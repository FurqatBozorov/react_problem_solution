import { combineReducers } from "redux";
import { questionReduser } from "./questionReduser";

export const rootReducer=combineReducers({
    questions: questionReduser
})