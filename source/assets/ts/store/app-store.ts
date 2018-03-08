import { createStore } from "redux";
import taskListReducer from "../reducers/app-reducer";

const store = createStore(taskListReducer);

export default store;