import axios from 'axios';
import { URL } from '../../../../../constant';
import { ITodo } from '../typing/ITodo';

export function fetchTodos() {
  return new Promise((resolve, reject) => {
    axios({
      url: URL,
      method: "GET",
    }).then(r => { resolve(r.data) },
      r => { reject(r.response.data.message) });
  })
}

export function updateTodo(todo: ITodo) {
  return new Promise((resolve, reject) => {
    axios({
      url: URL + `/${todo.id}`,
      method: "PUT",
      data: todo
    }).then(r => { resolve(r.data) },
      r => { reject(r.response.data.message) });
  })
}

export function addTodo(todo: ITodo) {
  return new Promise((resolve, reject) => {
    axios({
      url: URL,
      method: "POST",
      data: todo
    }).then(r => { resolve(r.data) },
      r => { reject(r.response.data.message) });
  })
}

export function deleteTodo(id: string) {
  return new Promise((resolve, reject) => {
    axios({
      url: URL + `/${id}`,
      method: "DELETE",
    }).then(r => { resolve(r.data) },
      r => { reject(r.response.data.message) });
  })
}