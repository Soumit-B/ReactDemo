import { userConstants } from "../../constants";

const initialState = {
    user: {},
    isFetching: false,
    isError: false
}

export default function loginReducer(state = initialState, action) {
    switch(action.type){
        case userConstants.LOGIN_REQUEST: 
            return {
                ...state,
                isFetching: true,
                user: {}
            };
        case userConstants.LOGIN_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE: 
            return {
                ...state,
                isFetching: false,
                isError: true
            };
        default: 
            return state;
    }
}