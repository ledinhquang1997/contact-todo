// export const GET_TODOS = "GET_TODOS";
// export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
// export const GET_TODOS_FAIL = "GET_TODOS_FAIL";

// export const UPDATE_TODOS = "UPDATE_TODOS";
// export const UPDATE_TODOS_SUCCESS = "UPDATE_TODOS_SUCCESS";
// export const UPDATE_TODOS_FAIL = "UPDATE_TODOS_FAIL";

// export const ADD_TODOS = "ADD_TODOS";
// export const ADD_TODOS_SUCCESS = "ADD_TODOS_SUCCESS";
// export const ADD_TODOS_FAIL = "ADD_TODOS_FAIL";

// export const DELETE_TODO = "DELETE_TODO";
// export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
// export const DELETE_TODO_FAIL = "DELETE_TODO_FAIL";

// export const URL = "https://ghostbb-testapi.azurewebsites.net/api/task";

export enum TodoAction {
    GET_TODOS = "GET_TODOS",
    GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS",
    GET_TODOS_FAIL = "GET_TODOS_FAIL",

    UPDATE_TODOS = "UPDATE_TODOS",
    UPDATE_TODOS_SUCCESS = "UPDATE_TODOS_SUCCESS",
    UPDATE_TODOS_FAIL = "UPDATE_TODOS_FAIL",

    ADD_TODOS = "ADD_TODOS",
    ADD_TODOS_SUCCESS = "ADD_TODOS_SUCCESS",
    ADD_TODOS_FAIL = "ADD_TODOS_FAIL",

    DELETE_TODO = "DELETE_TODO",
    DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS",
    DELETE_TODO_FAIL = "DELETE_TODO_FAIL",

    CHANGE_FILTER = "CHANGE_FILTER",

    ALL = "ALL",
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED"
}

export const URL = "https://ghostbb-testapi.azurewebsites.net/api/task";
