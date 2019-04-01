import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL
} from "../../../constant";

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
