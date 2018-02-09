/**
 * Created by borys-duda
 */

import * as Actions from "../actions/types";

export default function loginReducer(state, action = {}) {
  switch (action.type) {
    case Actions.LOGIN_ERROR:
      return state.merge({
        isLoggedIn: false,
        progress: false,
        loginError: action.error
      });
    case Actions.LOGIN_SUCCESS:
      return state.merge({
        isLoggedIn: true,
        progress: false,
        api_key: action.api_key,
        email: action.email,
        password: action.password
      });
    case Actions.LOGOUT_SUCCESS:
      return state.merge({
        isLoggedIn: false,
        progress: false,
        api_key: '',
        email: '',
        password: ''
      });
    case Actions.LOGOUT_ERROR:
      return state.merge({
        isLoggedIn: false,
        progress: false,
        loginError: action.error
      });
    default:
      return state
  }
}