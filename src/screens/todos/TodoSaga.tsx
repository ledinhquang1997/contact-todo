import { call, put, select } from "redux-saga/effects";
import { getTodosSuccess, getTodosFail, getTodos } from "./TodoAction";
import { fetchTodos, updateTodo } from "./service/request/api";
import { ITodo } from "./service/typing/ITodo";
import { Action } from "redux";

const todos = (state: any) => state.todosData;

export function* getTodosSaga() {
  try {
    const data: ITodo[] = yield call(fetchTodos);
    yield put(getTodosSuccess(data));
  } catch (err) {
    yield put(getTodosFail());
  }
}

export function* updateTodoSaga(action: any) {
  try {
    const todoToUpdate = yield action.payload;
    // yield call(updateTodo, todoToUpdate);
    // yield put(getTodos());
    const data = yield select(todos);
    console.log(data);
  } catch (err) {
    yield put(getTodosFail());
  }
}
