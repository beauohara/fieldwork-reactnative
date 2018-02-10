/**
 * Created by borys-duda
 */

import {call, put, take, select} from "redux-saga/effects";
import * as Actions from "../../actions/types";
import * as Api from "../../services/api";
import * as CustomerActions from "../../actions/customers";

export const getAPIKey = (state) => {
  return state.get('auth').get('api_key');
}

export function* loadCustomer() {
  try {
    let apiKey = yield select(getAPIKey);
    const customersData = yield call(Api.loadAllCustomers, apiKey);
    if (customersData) {
      yield put(CustomerActions.setLoadCustomersSuccess(customersData));
      return customersData;
    }
    yield put(CustomerActions.setLoadCustomersError(customersData));
    return undefined;

  } catch (error) {
    yield put(CustomerActions.setLoadCustomersError(error));
    return undefined;
  }
}



