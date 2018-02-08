import type { Action } from '../actions/types';

const initialState = [];

function venues(state: Array = initialState, action: Action): State {
  if (action.type === 'SET_VENUES') {
    return [...action.data];
  }
  if (action.type === 'ADD_VENUES') {
    return [...state, ...action.data];
  }
  return state;
}

module.exports = venues;
