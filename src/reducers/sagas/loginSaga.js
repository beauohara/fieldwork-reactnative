/**
 * Created by borys-duda
 */

import {call, put, take} from "redux-saga/effects";
import * as Actions from "../../actions/types";
import * as Api from "../../services/api";
import * as LoginActions from "../../actions/auth";

export function* login(action) {
  const { email, password} = action;
  try {
    const tokenData = yield call(Api.login, email, password);
    if (tokenData.api_key) {
      yield put(LoginActions.setLoginSuccess(tokenData.api_key, email, password));
      return tokenData;
    } 
    yield put(LoginActions.setLoginError(tokenData));
    return undefined;
    
  } catch (error) {
    yield put(LoginActions.setLoginError(error));
    return undefined;
  }
}


