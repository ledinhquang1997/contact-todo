import { call, put, select } from "redux-saga/effects";
import { getTodosSuccess, getTodosFail, getTodos , updateTodoFail, addTodoFail, deleteTodoFail} from "./TodoAction";
import { fetchTodos, updateTodo, deleteTodo, addTodo } from "./service/request/TodoAPI";
import { ITodo } from "./service/typing/todo";
import { IToDoState, IAction } from './service/typing/state';
const _ = require("lodash");

const todos = (state: IToDoState) => state.todos;

export function* getTodosSaga() {
  try {
    const data: ITodo[] = yield call(fetchTodos);
    console.log(data);
    yield put(getTodosSuccess(data));
  } catch (err) {
    yield put(getTodosFail(err));
  }
}

export function* updateTodoSaga(action: IAction) {
  try {
    const todoToUpdate = action.payload;
    yield call(updateTodo, todoToUpdate)
    yield put(getTodos())
  } catch (err) {
    yield put(updateTodoFail(err));
  }
}

export function* addTodoSaga(action: IAction) {
  try {
    const newTodo = action.payload;
    yield call(addTodo, newTodo);
    yield put(getTodos())
  } catch (err) {
    yield put(addTodoFail(err));
  }
}

export function* deleteTodoSaga(action: IAction) {
  try {
    const idToDelete = action.payload.id;
    yield call(deleteTodo, idToDelete);
    yield put(getTodos())
  } catch (err) {
    yield put(deleteTodoFail(err));
  }
}
