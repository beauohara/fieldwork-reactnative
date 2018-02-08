/**
 * Created by borys-duda
 */

import * as Actions from "../actions/types";

export default function loginReducer(state, action = {}) {
  switch (action.type) {
    case Actions.LOGIN_ERROR:
      return state.withMutations(state => state
        .set('isLoggedIn', false)
        .set('progress', false)
        .set('loginError', action.error));
    case Actions.LOGIN_SUCCESS:
      return state.withMutations(state => state
        .set('isLoggedIn', true)
        .set('progress', false)
        .set('authorizationId', action.token)
        .set('username', action.email)
        .set('password', action.password)
        .set('token', action.token));
    case Actions.LOGOUT_SUCCESS: {
      return state.withMutations(state => state
        .set('progress', false)
        .set('isLoggedIn', false)
        .set('token', '')
        .set('authorizationId', '')
        .set('username', '')
        .set('username', '')
        .set('password', ''));
    }
    case Actions.LOGOUT_ERROR: {
      return state.withMutations(state => state
        .set('progress', false)
        .set('isLoggedIn', false)
        .set('loginError', action.err));
    }
    default:
      return state
  }
}