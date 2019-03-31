import { todosData } from "./firebaseConfig";
import { ITodo } from "../typing/ITodo";

export function fetchTodos(): Promise<ITodo[]> {
  return new Promise((resolve, reject) => {
    todosData.once("value").then(
      data => {
        var todoList: ITodo[] = [];
        data.forEach((note: any) => {
          todoList.push({
            id: note.key,
            status: note.val().status,
            task: note.val().task
          });
        });
        resolve(todoList);
      },
      err => reject(err)
    );
  });
}

export function updateTodo(todo: ITodo) {
  return new Promise((resolve, reject) => {
    todosData
      .child(todo.id)
      .update({
        status: todo.status,
        task: todo.task
      })
      .then(res => resolve(res.data), err => reject(err));
  });
}
