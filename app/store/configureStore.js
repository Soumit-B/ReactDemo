import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import appReducer from "./combineReducers";

const loggerMiddleware = createLogger();

export const configureStore = () => createStore(
    appReducer, 
    applyMiddleware(thunkMiddleware,loggerMiddleware)
);