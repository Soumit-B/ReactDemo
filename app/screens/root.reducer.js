import { appRootConstants } from "../constants";

const initialState = { root: undefined };

export default function rootReducer(state = initialState, action){
     switch (action.type){
        case appRootConstants.ROOT_CHANGED:
            return {
                ...state,
                root: action.root
            };
        default:
            return state;
     }
}