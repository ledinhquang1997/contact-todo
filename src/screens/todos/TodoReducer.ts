import { TodoAction } from "../../../constant";
import { IAction } from './service/typing/state';

const initialTodoAllReducer = {
  isLoading: false,
  todos: [
    {
      id: "ee3a530e-2f89-406f-aab2-00f3f760603b",
      name: "Task 1",
      isDone: false,
      description: null
    },
    {
      id: "b9b40a0d-9913-4689-a34f-2e9a2697541e",
      name: "Task 312",
      isDone: false,
      description: "fssd sad sfd sdfg "
    }
  ],
  err: false,
  errMessage: "",
  filter: TodoAction.ALL,
};
export const todosReducer = (state = initialTodoAllReducer, action: IAction) => {
  switch (action.type) {
    case TodoAction.GET_TODOS:
      return {
        ...state,
        isLoading: true
      };
    case TodoAction.GET_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload
      };
    case TodoAction.GET_TODOS_FAIL:
      return {
        ...state,
        isLoading: false,
        todos: [],
        err: true
      };
    case TodoAction.CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload.filter
      }
    case TodoAction.UPDATE_TODOS_FAIL:
      return {
        ...state,
        err:true,
        errMessage:action.payload
      }
      case TodoAction.ADD_TODOS_FAIL:
      return {
        ...state,
        err:true,
        errMessage:action.payload
      }
      case TodoAction.DELETE_TODO_FAIL:
      return {
        ...state,
        err:true,
        errMessage:action.payload
      }
    default:
      return state;
  }
};
