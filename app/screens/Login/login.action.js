import { userConstants } from "../../constants";
import {Navigation} from 'react-native-navigation';

export function login(){
    return (dispatch) => {
        dispatch(request('username'));
        /*fetch('https://swapi.co/api/people')
        .then(res => res.json())
        .then(jsonData => {
            dispatch(success(jsonData.results));
        })
        .catch(err => dispatch(error(err)))*/
    }
}

function request(user){
    return {
        type: userConstants.LOGIN_REQUEST,
        user
    }
}

function success(user){
    return {
        type: userConstants.LOGIN_SUCCESS,
        user
    }
}

function failure(error){
    return {
        type: userConstants.LOGIN_FAILURE,
        error
    }
}