import { combineReducers } from "redux";
import userReducer from "../user/userReducer";

export default combineReducers({
  users: combineReducers({
    users: userReducer
  })
});
