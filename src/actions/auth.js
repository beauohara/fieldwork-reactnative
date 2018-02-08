/**
 * Created by borys-duda
 */

import * as Actions from "./types";

export function login(email, password) {
  return {
    type: Actions.LOGIN_ACTION,
    email,
    password
  }
}

export function setLoginError(error) {
  return {
    type: Actions.LOGIN_ERROR,
    error
  }
}

export function setLoginSuccess(token, email, password) {
  return {
    type: Actions.LOGIN_SUCCESS,
    token,
    email,
    password
  }
}

export function logout(authId, email, password) {
  return {
    type: Actions.LOGOUT_ACTION,
    authId,
    email,
    password
  }
}

export function setLogoutSuccess() {
  return {type: Actions.LOGOUT_SUCCESS}
}

export function setLogoutError(error) {
  return {
    type: Actions.LOGOUT_ERROR,
    error
  }
}
