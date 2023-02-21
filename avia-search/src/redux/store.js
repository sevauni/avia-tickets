import { createStore } from "redux";
import userReducer from "./reducers/paramsToFromReducer";

const store = createStore(userReducer);

export default store;   