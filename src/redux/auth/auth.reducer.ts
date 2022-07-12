import { persistReducer } from "redux-persist";
import { ActionWithPayload } from "../redux-helper";
import * as actionTypes from "../action-types";
import localStorage from "redux-persist/es/storage";

export interface IAuthState {
  user?: any;
  token?: string;
}

export const initialState: IAuthState = {
  user: "",
  token: "bu bir token",
};

export const reducer = persistReducer(
  {
    storage: localStorage,
    key: "settings",
    whitelist: ["language"],
  },
  (state: IAuthState = initialState, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case actionTypes.LOGIN_USER: {
        return { ...initialState, token: action.payload };
      }
      default:
        return state;
    }
  }
);
