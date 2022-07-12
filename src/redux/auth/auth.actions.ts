import * as actionTypes from "../action-types";

const actions = {
  login: (accessToken: string) => ({
    type: actionTypes.LOGIN_USER,
    payload: accessToken,
  }),
  logout: () => ({ type: actionTypes.LOGOUT }),
};

export default actions;
