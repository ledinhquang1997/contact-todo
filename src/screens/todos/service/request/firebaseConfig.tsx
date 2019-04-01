// import * as firebase from "firebase";
// var config = {
//   apiKey: "AIzaSyCdZNu0PypOPJLsX36Vbq9JsYcjrGN4fcU",
//   authDomain: "notereact-1873f.firebaseapp.com",
//   databaseURL: "https://notereact-1873f.firebaseio.com",
//   projectId: "notereact-1873f",
//   storageBucket: "notereact-1873f.appspot.com",
//   messagingSenderId: "1020415466273"
// };

// firebase.initializeApp(config);
// export const todosData = firebase.database().ref("todos");

// import { todosData } from "./firebaseConfig";
// import { ITodo } from "../typing/ITodo";

// export function fetchTodos(): Promise<ITodo[]> {
//   return new Promise((resolve, reject) => {
//     todosData.once("value").then(
//       data => {
//         var todoList: ITodo[] = [];
//         data.forEach((note: any) => {
//           todoList.push({
//             id: note.key,
//             status: note.val().status,
//             task: note.val().task
//           });
//         });
//         resolve(todoList);
//       },
//       err => reject(err)
//     );
//   });
// }

// export function updateTodo(todo: ITodo) {
//   return new Promise((resolve, reject) => {
//     todosData
//       .child(todo.id)
//       .update({
//         status: todo.status,
//         task: todo.task
//       })
//       .then(res => resolve(res.data), err => reject(err));
//   });
// }
