import { takeLatest, takeEvery, all } from 'redux-saga/effects';

import * as Actions from "../../actions/types";
import { login } from './loginSaga';
import { loadCustomer } from './customerSaga';

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(Actions.LOGIN_ACTION, login),
    takeLatest(Actions.LOAD_CUSTOMERS, loadCustomer),
  ]);
}