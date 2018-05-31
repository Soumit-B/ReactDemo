import { combineReducers } from "redux";

import rootReducer from "../screens/root.reducer";
import loginReducer from "../screens/Login/login.reducer";

const appReducer = combineReducers({
    rootReducer,
    loginReducer
});

export default appReducer;