import { combineReducers } from "redux";
import api from "../../services/api";

export const loginOperations = (username, password) => (dispatch, getState) => {
  api
    .postLogin(username, password)
    .then((data) =>
      dispatch({
        type: "auth/LOGIN_SUCCESS",
        payload: { token: data.message.token },
      })
    )
    .catch((error) => console.log(error));
};

const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case "auth/LOGIN_SUCCESS":
      return action.payload.token;

    case "auth/LOGOUT_SUCCESS":
      return null;

    default:
      return state;
  }
};

const isShowTextReducer = (state = true, action) => {
  switch (action.type) {
    case "auth/IS_SHOW_TEXT":
      return !state;

    default:
      return state;
  }
};

export default combineReducers({
  token: tokenReducer,
  isShowText: isShowTextReducer,
});
