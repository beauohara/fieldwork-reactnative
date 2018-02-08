import type { ThunkAction } from './types';

function setVenues(venues: Array): ThunkAction {
  return (dispatch) => {
    dispatch({
      type: 'SET_VENUES',
      data: venues,
    });
  };
}

function addVenues(venues: Array): ThunkAction {
  return (dispatch) => {
    dispatch({
      type: 'ADD_VENUES',
      data: venues,
    });
  };
}

module.exports = {
  setVenues,
  addVenues,
};
