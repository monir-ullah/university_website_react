import { combineReducers } from "redux";
import userReducer from "../slices/userSlice";
const rootReducer = combineReducers({
  user: userReducer, // Reducer that will be persisted
});

export default rootReducer;
