import { combineReducers } from "redux";
import { todosReducer } from "../src/screens/todos/TodoReducer";

export default combineReducers({
  todosData: todosReducer
});
