import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import global from "./global";
import profile from "./profile";

const reducer = {
  global: global,
  profile: profile,
};

const configReduxPersist = {
  key: "root",
  storage: storage,
  whitelist: ["profile"],
};

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;
