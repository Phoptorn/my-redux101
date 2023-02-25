import { combineReducers } from "redux";

import { itReducer } from "./itReducers";
import { userReducer } from "./userReducers";

import { pfusersReducer } from "./pfusers";

const rootReducer = combineReducers({
    user: userReducer,
    it: itReducer,
    
    pfusers : pfusersReducer,
})

export default rootReducer