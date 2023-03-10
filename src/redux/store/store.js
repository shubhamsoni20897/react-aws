import { applyMiddleware, combineReducers, createStore } from "redux";
import { loginReducer } from "../reducer/loginReducer";
import { changeState } from "../reducer/sideBarReducer";

import logger from 'redux-logger'
import thunk from 'redux-thunk'
export const store = createStore(combineReducers({
    loginReducer,changeState
}),applyMiddleware(thunk,logger))


