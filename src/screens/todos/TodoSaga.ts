import { call, put, select } from "redux-saga/effects";
import { getTodosSuccess, getTodosFail, getTodos } from "./TodoAction";
import { fetchTodos, updateTodo, deleteTodo, addTodo } from "./service/request/TodoAPI";
import { ITodo } from "./service/typing/ITodo";
const _ = require("lodash");

const todos = (state: any) => state.todosData.todos;

export function* getTodosSaga() {
  try {
    const data: any[] = yield call(fetchTodos);
    console.log(data);
    yield put(getTodosSuccess(data));
  } catch (err) {
    yield put(getTodosFail());
  }
}

export function* updateTodoSaga(action: any) {
  try {
    const todoToUpdate = action.payload;
    console.log(">>>>>>>", todoToUpdate);

    // yield call(updateTodo, todoToUpdate);
    // yield put(getTodos());


    // const data = yield select(todos);
    // const index = yield _.findIndex(
    //   data,
    //   (todo: ITodo) => todoToUpdate.id === todo.id
    // );
    // if (index !== -1) {
    //   const newTodoList = yield [...data];
    //   newTodoList[index] = yield {
    //     ...todoToUpdate
    //   };
    //   yield put(getTodosSuccess(newTodoList));
    // }

    yield call(updateTodo, todoToUpdate)
    yield put(getTodos())
  } catch (err) {
    yield put(getTodosFail());
  }
}

export function* addTodoSaga(action: any) {
  try {
    const newTodo = action.payload;
    // const todoList = yield select(todos);
    // const newTodoList = yield [...todoList, newTodo];
    // yield put(getTodosSuccess(newTodoList));

    yield call(addTodo, newTodo);
    yield put(getTodos())
  } catch (err) {
    yield put(getTodosFail());
  }
}

export function* deleteTodoSaga(action: any) {
  try {
    const idToDelete = action.payload.id;
    // const data = yield select(todos);
    // const index = yield _.findIndex(
    //   data,
    //   (todo: ITodo) => idToDelete === todo.id
    // );
    // if (index !== -1) {

    //   const newTodoList = [...data.slice(0, index), ...data.slice(index + 1, data.length)];
    //   yield put(getTodosSuccess(newTodoList));

    yield call(deleteTodo, idToDelete);
    yield put(getTodos())

  } catch (err) {
    yield put(getTodosFail());
  }
}
