import { combineReducers } from "@reduxjs/toolkit";
import logReducers from "./logReducers";
import techReducers from "./techReducers";

export default combineReducers({
    log: logReducers,
    tech: techReducers
});