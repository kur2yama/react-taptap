

import { combineReducers } from "redux"



import other from "./other"
import async from "./async"
import city from "./city"


export const reducers = combineReducers({
    other: other,
    async: async,
    city: city
})




