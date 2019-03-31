import { takeEvery } from "redux-saga/effects";
import { getTodosSaga, updateTodoSaga } from "../src/screens/todos/TodoSaga";
import { GET_TODOS, UPDATE_TODOS } from "../constant";

export default function* rootSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga);
  yield takeEvery(UPDATE_TODOS, updateTodoSaga);
}
