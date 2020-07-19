import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authReducer";

const rootPersistConfig = {
  key: "authRoot",
  storage: storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  authRoot: persistReducer(rootPersistConfig, authReducer),
});

export default rootReducer;
