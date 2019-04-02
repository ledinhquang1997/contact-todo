import { takeEvery } from "redux-saga/effects";
import {
  getTodosSaga,
  updateTodoSaga,
  addTodoSaga,
  deleteTodoSaga
} from "../src/screens/todos/TodoSaga";
import { TodoAction } from "../constant";

export default function* rootSaga() {
  yield takeEvery(TodoAction.GET_TODOS, getTodosSaga);
  yield takeEvery(TodoAction.UPDATE_TODOS, updateTodoSaga);
  yield takeEvery(TodoAction.ADD_TODOS, addTodoSaga);
  yield takeEvery(TodoAction.DELETE_TODO, deleteTodoSaga);
}
