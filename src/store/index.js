import {createStore, combineReducers, applyMiddleware} from "redux";
import { calendarReducer } from "./calendarReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    calendar: calendarReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
