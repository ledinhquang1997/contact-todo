const { createAction } = require("redux-actions");
import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  UPDATE_TODOS,
  UPDATE_TODOS_SUCCESS,
  UPDATE_TODOS_FAIL
} from "../../../constant";
import { ITodo } from "./service/typing/ITodo";

export function getTodos(): any {
  return { type: GET_TODOS };
}

export function getTodosSuccess(data: ITodo[]) {
  console.log(data);

  return {
    type: GET_TODOS_SUCCESS,
    payload: data
  };
}

export function getTodosFail() {
  return { type: GET_TODOS_FAIL };
}

export function updateTodo(todo: ITodo): any {
  return { type: UPDATE_TODOS, payload: todo };
}

export function updateTodoSuccess() {
  return {
    type: UPDATE_TODOS_SUCCESS
  };
}

export function updateTodoFail() {
  return { type: UPDATE_TODOS_FAIL };
}
