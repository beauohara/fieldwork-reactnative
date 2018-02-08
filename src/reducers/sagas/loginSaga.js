/**
 * Created by borys-duda
 */

import {call, put, take} from "redux-saga/effects";
import * as Actions from "../../actions/types";
import * as Api from "../../services/api";
import * as LoginActions from "../../actions/auth";

function* authorize(email, password) {
  try {
    const token = yield call(Api.login, email, password);
    if (!token.message) {
      yield put(LoginActions.setLoginSuccess(token, email, password));
      return token;
    } 
    yield put(LoginActions.setLoginError(token));
    return undefined;
    
  } catch (error) {
    yield put(LoginActions.setLoginError(error));
    return undefined;
  }
}

export function* loginFlow() {
  while (true) {
    const {email, password} = yield take(Actions.LOGIN_ACTION);
    yield call(authorize, email, password);
  }
}


