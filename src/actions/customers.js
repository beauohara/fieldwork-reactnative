import * as Actions from "./types";

export function loadAllCustomers() {
  return {
    type: Actions.LOAD_CUSTOMERS
  }
}


export function setLoadCustomersError(error) {
  return {
    type: Actions.LOAD_CUSTOMERS_ERROR,
    error
  }
}

export function setLoadCustomersSuccess(customers) {
  return {
    type: Actions.LOAD_CUSTOMERS_SUCCESS,
    customers
  }
}