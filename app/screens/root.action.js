import { appRootConstants, pageConstants } from "../constants";

export function changeAppRoot(root){
    return {
        type: appRootConstants.ROOT_CHANGED,
        root
    }
}

export function appInitialized(){
    return async function(dispatch, getState){
        dispatch(changeAppRoot(pageConstants.LOGIN))
    }
}

export function login() {
    return async function(dispatch, getState) {
        dispatch(changeAppRoot(pageConstants.AFTER_LOGIN));
    };
  }