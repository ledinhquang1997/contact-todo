import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL
} from "../../../constant";

const initialTodoAllReducer = {
  isLoading: false,
  todos: [
    {
      id: "ksdhifuh",
      task: "Fix bug at 5",
      status: 1
    },
    {
      id: "fdhdsdfsdfg",
      task: "Go to school at 4",
      status: 0
    },
    {
      id: "ksdh46",
      task: "Dating with gf",
      status: 1
    },
    {
      id: "vzxdsv",
      task: "Do yoga",
      status: 0
    },
    {
      id: "ksd124wehifuh",
      task: "Fix bug",
      status: 1
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
