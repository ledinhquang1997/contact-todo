import { ITodo } from './todo';

export interface IToDoState {
    todos: ITodo[];
    isLoading: boolean;
    isFirstLoaded: boolean;
    filter: string,
    err:boolean,
    errMessage:string
}
export interface IRootTodoState {
    todosData: IToDoState
}

export interface IAction {
    type: string;
    payload?: any
}