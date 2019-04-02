const { createAction } = require("redux-actions");
import { TodoAction } from "../../../constant/index";
import { ITodo } from "./service/typing/todo";
import { IAction } from './service/typing/state';

export function getTodos(): IAction {
  return { type: TodoAction.GET_TODOS };
}

export function getTodosSuccess(data: ITodo[]) {
  return {
    type: TodoAction.GET_TODOS_SUCCESS,
    payload: data
  };
}

export function getTodosFail(err: any) {
  return { type: TodoAction.GET_TODOS_FAIL, payload: err };
}

export function updateTodo(todo: ITodo): IAction {
  return { type: TodoAction.UPDATE_TODOS, payload: todo };
}

export function updateTodoSuccess() {
  return {
    type: TodoAction.UPDATE_TODOS_SUCCESS
  };
}

export function updateTodoFail(err:string) {
  return { type: TodoAction.UPDATE_TODOS_FAIL, payload: err };
}

export function addTodo(todo: ITodo): IAction {
  return { type: TodoAction.ADD_TODOS, payload: todo };
}

export function addTodoSuccess() {
  return {
    type: TodoAction.ADD_TODOS_SUCCESS
  };
}

export function addTodoFail(err:string) {
  return { type: TodoAction.ADD_TODOS_FAIL, payload: err};
}

export function deleteTodo(id: string): IAction {
  return { type: TodoAction.DELETE_TODO, payload: { id: id } };
}

export function deleteTodoSuccess(): IAction {
  return { type: TodoAction.DELETE_TODO_SUCCESS };
}

export function deleteTodoFail(err:string): IAction {
  return { type: TodoAction.DELETE_TODO_FAIL, payload: err};
}

export function changeFilter(filter: string): IAction {
  return { type: TodoAction.CHANGE_FILTER, payload: { filter: filter } };
}
