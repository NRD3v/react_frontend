import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { links } from "./reducers/links"
import { doctors } from "./reducers/doctors"

export const store = createStore(combineReducers({links, doctors}), applyMiddleware(thunk));
