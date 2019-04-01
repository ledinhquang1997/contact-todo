import { takeEvery } from "redux-saga/effects";
import {
  getTodosSaga,
  updateTodoSaga,
  addTodoSaga
} from "../src/screens/todos/TodoSaga";
import { GET_TODOS, UPDATE_TODOS, ADD_TODOS } from "../constant";

export default function* rootSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga);
  yield takeEvery(UPDATE_TODOS, updateTodoSaga);
  yield takeEvery(ADD_TODOS, addTodoSaga);
}
