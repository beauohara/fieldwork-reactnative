import type { ThunkAction } from './types';

function changeAuthData(data: Object): ThunkAction {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_DATA',
      data,
    });
  };
}

module.exports = {
  changeAuthData,
};
