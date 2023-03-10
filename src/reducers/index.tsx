import { combineReducers } from "redux";

import { stringReducer } from "./stringReducers";
import { numberReducer } from "./numberReducers";

import { pfusersReducer } from "./pfusers";

const rootReducer = combineReducers({
    string: stringReducer,
    number: numberReducer,
    
    pfusers : pfusersReducer,
})

export default rootReducer