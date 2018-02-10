/**
 * Created by borys-duda
 */

import * as Actions from "../actions/types";

export default function customerReducer(state, action = {}) {
  switch (action.type) {
    case Actions.LOAD_CUSTOMERS_ERROR:
      return state;
    case Actions.LOAD_CUSTOMERS_SUCCESS:
      return action.customers;
    default:
      return state
  }
}