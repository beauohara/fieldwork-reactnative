export const login = (data: Object) => {
  return (dispatch) => {
    dispatch({
      type: 'AUTH_LOGIN',
      data,
    });
  };
}

