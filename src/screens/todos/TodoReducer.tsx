import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL
} from "../../../constant";

const initialTodoAllReducer = {
  isLoading: false,
  todos: [],
  err: false
};
export const todosReducer = (state = initialTodoAllReducer, action: any) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        isLoading: true
      };
    case GET_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload
      };
    case GET_TODOS_FAIL:
      return {
        ...state,
        isLoading: false,
        todos: [],
        err: true
      };
    default:
      return state;
  }
};
