import { createSelector } from 'reselect';
import { IRootTodoState } from './service/typing/state';
import { TodoAction } from '../../../constant';

const getTodos = (state: IRootTodoState) => state.todosData.todos;
const getFilter = (state: IRootTodoState) => state.todosData.filter;


export const getTodosFilteredByStatus = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case TodoAction.ALL:
        return todos
      case TodoAction.COMPLETED:
        return todos.filter(t => t.isDone)
      case TodoAction.ACTIVE:
        return todos.filter(t => !t.isDone)
      default:
      return todos
    }
  }
)