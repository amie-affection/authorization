import { combineReducers } from "redux";
import axios from "axios";

axios.defaults.baseURL = "https://uxcandy.com/~shapoval/test-task-backend/v2";

/* OPETATIONS */
export const loginOperations = (username, password) => (dispatch, getState) => {
  console.log(username, password);

  const params = new URLSearchParams();
  params.append("username", username);
  params.append("password", password);

  return axios
    .post("/login/?developer=Name", params)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: "auth/LOGIN_SUCCESS",
        payload: { token: res.data.message.token },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

/* REDUCERS */
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

    case "auth/SHOW_TEXT":
      return action.payload;

    case "auth/HIDE_TEXT":
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  token: tokenReducer,
  isShowText: isShowTextReducer,
});
