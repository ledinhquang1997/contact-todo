import { call, put, select } from "redux-saga/effects";
import { getTodosSuccess, getTodosFail, getTodos } from "./TodoAction";
import { fetchTodos, updateTodo } from "./service/request/api";
import { ITodo } from "./service/typing/ITodo";
const _ = require("lodash");

const todos = (state: any) => state.todosData.todos;

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
    // yield console.log(">>>>>>>", todoToUpdate);

    // yield call(updateTodo, todoToUpdate);
    // yield put(getTodos());
    const data = yield select(todos);
    const index = yield _.findIndex(
      data,
      (todo: ITodo) => todoToUpdate.id === todo.id
    );
    if (index !== -1) {
      const newTodoList = yield [...data];
      newTodoList[index] = yield {
        ...todoToUpdate
      };
      yield put(getTodosSuccess(newTodoList));
    }
  } catch (err) {
    yield put(getTodosFail());
  }
}

export function* addTodoSaga(action: any) {
  try {
    const newTodo = yield action.payload;
    const todoList = yield select(todos);
    const newTodoList = yield [...todoList, newTodo];
    yield put(getTodosSuccess(newTodoList));
  } catch (err) {
    yield put(getTodosFail());
  }
}
